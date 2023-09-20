import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    password: "",
  });
  const [OTP, setOTP] = useState("")

  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(true);

  return (
    <div className="w-full flex flex-col items-center mt-8">
      <h1 className="text-xl font-bold ">Sign Up</h1>
      {otpSent ? (
        <>
          <div class="p-2 w-full md:w-1/3">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-300">
                OTP
              </label>
              <input
                id="message"
                name="message"
                value={OTP}
                onChange={(e) => setOTP(e.target.value)}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div class="p-2 w-full">
            <button class="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">
              {loading ? <TailSpin height={25} color="white" /> : "Confirm OTP"}
            </button>
          </div>
        </>
      ) : (
        <>
          <div class="p-2 w-full md:w-1/3">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="message"
                name="message"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div class="p-2 w-full md:w-1/3">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-300">
                Mobile No.
              </label>
              <input
                type="Number"
                id="message"
                name="message"
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div class="p-2 w-full md:w-1/3">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-300">
                Password
              </label>
              <input
                type="password"
                id="message"
                name="message"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div class="p-2 w-full">
            <button class="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">
              {loading ? <TailSpin height={25} color="white" /> : "Sign up"}
            </button>
          </div>
        </>
      )}

      <div>
        <p>
          Already have an account?
          <Link to={"/login"}>
            <span className="text-blue-500"> Login</span>
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
