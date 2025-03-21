import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Save user email to localStorage
    const userData = JSON.parse(localStorage.getItem("user")) || {};
    if (userData.email === email && userData.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/account");
    } else {
      alert("Incorrect credentials. Try again.");
    }
  };

  return (
    <div className="flex flex-col h-[80vh] pt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2 w-[60%]">
        Signin to your PopX account
      </h2>
      <p className="text-sm text-gray-500 mb-6 w-[70%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <div className="flex flex-col gap-4">
        <InputField
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />

        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />

        <button
          onClick={handleLogin}
          disabled={!email || !password}
          className={`w-full py-2 rounded-md text-white font-semibold ${
            email && password
              ? "bg-[#6C25FF]"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
