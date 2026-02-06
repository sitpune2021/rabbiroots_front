import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/AuthSlice";

export default function PhoneLogin({ onClose }) {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("phone"); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setError("");

    // Validate phone number
    if (!phone || phone.length !== 10) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    setLoading(true);

    try {
    
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStep("otp");
      setLoading(false);
    } catch (err) {
      setError("Failed to send OTP. Please try again.");
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setError("");

    // Validate OTP
    if (!otp || otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    setLoading(true);

    try {
    
      // Simulate API call and mock user data
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockUser = {
        id: "1",
        name: "User",
        phone: phone,
        token: "mock-token-123",
      };

      dispatch(login(mockUser));

      setLoading(false);
      onClose();
    } catch (err) {
      setError("Invalid OTP. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          {step === "phone" ? "Welcome Back" : "Verify OTP"}
        </h2>
        <p className="text-gray-600">
          {step === "phone"
            ? "Enter your phone number to continue"
            : `We've sent a code to +91 ${phone}`}
        </p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
          {error}
        </div>
      )}

      {step === "phone" ? (
        <form onSubmit={handleSendOTP}>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <div className="flex items-center border-2 border-gray-300 rounded-lg focus-within:border-green-500 transition-colors">
              <span className="px-4 text-gray-600 font-medium">+91</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
                placeholder="Enter 10-digit number"
                className="flex-1 px-4 py-3 outline-none rounded-r-lg"
                maxLength={10}
                disabled={loading}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send OTP"}
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOTP}>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Enter OTP
            </label>
            <input
              type="text"
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
              }
              placeholder="Enter 6-digit OTP"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg outline-none focus:border-green-500 transition-colors"
              maxLength={6}
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed mb-3"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

          <button
            type="button"
            onClick={() => {
              setStep("phone");
              setOtp("");
              setError("");
            }}
            className="w-full text-green-600 font-medium py-2 hover:text-green-700 transition-colors"
          >
            Change Phone Number
          </button>
        </form>
      )}

      <div className="mt-6 text-center text-sm text-gray-500">
        By continuing, you agree to our{" "}
        <a href="/terms" className="text-green-600 hover:underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/privacy" className="text-green-600 hover:underline">
          Privacy Policy
        </a>
      </div>
    </div>
  );
}
