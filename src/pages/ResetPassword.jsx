import React from 'react'
import TextLogo from "../assets/new_wc_logo.png";

const ResetPassword = () => {
    return (
        <div className="patterns min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="max-w-md mx-auto">
                    <div className="mb-4 text-center">
                        <img src={TextLogo} alt="Logo" className="mx-auto" />
                    </div>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                New Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-primary"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-primary"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-primary-dark mb-2"
                        >
                            Reset Password
                        </button>
                        <div className="text-center">
                            <span className="text-gray-600 text-sm">Remember your password? </span>
                            <a href="/signin" className="text-blue-500 text-sm">Sign In</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ResetPassword
