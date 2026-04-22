import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ OrderPopup, setOrderPopup }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {OrderPopup && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">

          {/* Modal */}
          <div className="w-[90%] max-w-[400px] bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 duration-200">

            {/* Header (Centered) */}
            <div className="relative mb-6 text-center">
              <h1 className="text-2xl font-bold">
                {isLogin ? "Login" : "Sign Up"}
              </h1>

              {/* close button */}
              <IoCloseOutline
                className="text-2xl cursor-pointer absolute right-0 top-0"
                onClick={() => setOrderPopup(false)}
              />
            </div>

            {/* Form */}
            <div className="space-y-4">

              {!isLogin && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500
                  dark:bg-gray-800 px-4 py-2 outline-none focus:border-primary"
                />
              )}

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500
                dark:bg-gray-800 px-4 py-2 outline-none focus:border-primary"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500
                dark:bg-gray-800 px-4 py-2 outline-none focus:border-primary"
              />

              {/* Button */}
              <div className="pt-2">
                <button
                  className="w-full bg-gradient-to-r from-primary to-secondary
                  hover:scale-105 duration-200 text-white py-2.5 rounded-full font-medium"
                >
                  {isLogin ? "Login" : "Create Account"}
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-2">
                <div className="flex-1 h-[1px] bg-gray-300 dark:bg-gray-600"></div>
                <p className="text-xs text-gray-400">OR</p>
                <div className="flex-1 h-[1px] bg-gray-300 dark:bg-gray-600"></div>
              </div>

              {/* Toggle */}
              <p className="text-center text-sm">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <span
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-primary cursor-pointer ml-1 font-medium"
                >
                  {isLogin ? "Sign Up" : "Login"}
                </span>
              </p>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;