import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = () => {
    localStorage.setItem("user", JSON.stringify(formData));
    localStorage.setItem("isLoggedIn", "true");
    navigate("/account");
  };

  return (
    <div className="flex flex-col h-[80vh] pt-8 relative">
      <h2 className="text-3xl font-semibold text-gray-800 mb-2 w-[60%]">
        Create your PopX account
      </h2>

      <div className="flex flex-col gap-4 mt-6">
        <InputField
          label="Full Name *"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
        />
        <InputField
          label="Phone number *"
          name="phone"
          type="text"
          value={formData.phone}
          onChange={handleChange}
        />
        <InputField
          label="Email address *"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          label="Password *"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <InputField
          label="Company name"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
        />

        {/* Radio Buttons */}
        <div>
          <p className="text-sm font-medium text-[#6C25FF] mb-2">
            Are you an Agency?*
          </p>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === "yes"}
                onChange={handleChange}
                className="accent-[#6C25FF]"
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={formData.isAgency === "no"}
                onChange={handleChange}
                className="accent-[#6C25FF]"
              />
              No
            </label>
          </div>
        </div>

        <button
          onClick={handleRegister}
          className="w-full py-3 rounded-md bg-[#6C25FF] text-white font-semibold absolute bottom-0"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Register;
