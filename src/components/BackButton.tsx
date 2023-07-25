import { useNavigate } from "react-router-dom";
const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="bg-transparent bg-gray-700 font-semibold hover:drop-shadow-lg drop-shadow"
    >
      ← Go back
    </button>
  );
};

export default BackButton;
