import { useNavigate } from "react-router-dom";
import Button from "../components/button";

export default function Navigate() {
  const navigate = useNavigate();

  const goToOutline = () => {
    navigate("/outline");
  };

  return (
    <div className="flex items-center justify-center gap-2 ">
      To go back to outline page
      <Button onClick={goToOutline} message="click me" />
    </div>
  );
}
