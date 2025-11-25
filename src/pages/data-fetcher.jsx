import { useState, useEffect } from "react";

const getRandomUserId = () => {
  const min = 1;
  const max = 10;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const UserFetcher = () => {
  const [user, setUser] = useState(null);
  const [fetchedId, setFetchedId] = useState(null);

  useEffect(() => {
    // Async function to handle the fetch request
    const fetchUserData = async () => {
      const randomId = getRandomUserId();
      setFetchedId(randomId);

      const URL = `https://jsonplaceholder.typicode.com/users/${randomId}`;

      try {
        const response = await fetch(URL);
        const data = await response.json();

        // 2. Store the result in state
        setUser(data);
      } catch (e) {
        console.error("Fetch error:", e);
        // We can skip updating state for error/loading to keep it simple
      }
    };

    // Call the async function
    fetchUserData();

  }, []);


  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>User Data</h1>
      {user ? (
        <p>
          Name: {user.name} <br /> id: {fetchedId}
        </p>
      ) : (
        <p>fetching random user...</p>
      )}
    </div>
  );
};

export default UserFetcher;
