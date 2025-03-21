import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-end h-[80vh]">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Welcome to PopX</h1>
        <p className="text-md text-gray-500 mb-6 text-left w-[70%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <button
          onClick={() => navigate("/register")}
          className="w-full bg-[#6C25FF] text-white font-medium py-3 rounded-md mb-3"
        >
          Create Account
        </button>

        <button
          onClick={() => navigate("/login")}
          className="w-full bg-[#CBCBCB] bg-opacity-40 text-black font-medium py-3 rounded-md"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Welcome;
