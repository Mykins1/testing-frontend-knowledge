import { useState, useEffect } from "react";
import Button from "../components/button";

const ImageFetcher = () => {
  const [imageURL, setImageURL] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (shouldFetch) {
      const fetchImageData = async () => {
        setIsLoading(true);
        setError(null);
        setImageURL(null);

        try {
          const apiKey = import.meta.env.VITE_API_KEY;

          if (!apiKey) {
            throw new Error(
              "API Key is missing. Check your environment variables."
            );
          }

          const URL = `https://api.unsplash.com/photos/?client_id=${apiKey}`;

          const response = await fetch(URL);

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
              errorData.errors
                ? errorData.errors.join(", ")
                : "Failed to fetch images from Unsplash."
            );
          }

          const data = await response.json();

          if (data && data.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.length);
            setImageURL(data[randomIndex].urls.small);
          } else {
            throw new Error("No images found.");
          }
        } catch (e) {
          console.error("Fetch error:", e);
          setError(
            e instanceof Error ? e.message : "An unexpected error occurred."
          );
        } finally {
          setIsLoading(false);
          setShouldFetch(false);
        }
      };

      fetchImageData();
    }
  }, [shouldFetch]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-2xl font-semibold">Image Fetcher</h1>

      <Button
        onClick={() => setShouldFetch(true)}
        disabled={isLoading}
        message={isLoading ? "Loading Image..." : "Fetch New Image"}
      />

      {isLoading && (
        <div className="h-8 w-8 border-4 border-gray-300 border-t-black rounded-full animate-spin mt-4"></div>
      )}

      {imageURL && !isLoading && (
        <div className="max-w-md w-full border border-gray-300 shadow-lg mt-4">
          <img
            src={imageURL}
            alt="Fetched from Unsplash"
            className="w-140 h-64 rounded"
          />
        </div>
      )}

      {error && !isLoading && (
        <p className="text-red-600 mt-4 p-2 bg-red-100 rounded">
          Error: {error}
        </p>
      )}

      {!imageURL && !isLoading && !error && (
        <p className="mt-4 text-gray-500">
          Click the button to fetch an image from Unsplash.
        </p>
      )}
    </div>
  );
};

export default ImageFetcher;
