import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) navigate("/login");
    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData || {});
  }, [navigate]);

  return (
    <div className="w-full max-w-md mx-auto shadow-sm h-[80vh]">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-medium text-gray-700">Account Settings</h1>
      </div>

      {/* Profile Section */}
      <div className="flex items-center p-4 border-b border-gray-200">
        {/* Profile Image */}
        <div className="relative mr-4">
          <img 
            src={user.profilePic || "https://imgs.search.brave.com/2H2zX1u2EUweA1kYD0BOBaMOLn310c-K6GB9fgzKQvM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtY2RuLjEyM3Jm/LmNvbS9pbmRleC9z/dGF0aWMvYXNzZXRz/L2FsbC1pbi1vbmUt/cGxhbi9waG90b3Nf/djIuanBn"} 
            alt="Profile" 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0 bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            ✓
          </div>
        </div>

        {/* User Info */}
        <div>
          <h2 className="font-medium text-gray-800">
            {user.fullName || "Marry Doe"}
          </h2>
          <p className="text-sm text-gray-600">
            {user.email || "Marry@Gmail.Com"}
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="p-4 text-sm text-gray-600">
        <p>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
};

export default Account;