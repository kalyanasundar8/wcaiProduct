import React from 'react'
import TextLogo from "../assets/new_wc_logo.png";
import { useFormik } from 'formik';
import * as Yup from "yup";

const SigninPage = () => {

    // Validation
    const validationSchema = Yup.object({
        email: Yup.string().matches(
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            'Enter a valid email address'
        ).required("Email is required"),
        password: Yup.string().min(8, 'Password must be contain at least 8 characters').matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password must contains letters, numbers & Special characters'
        ).required("Password is required")
    })

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="max-w-md mx-auto">
                    <div className="mb-10 text-center">
                        <img src={TextLogo} alt="Logo" className="mx-auto" />
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500"
                            />
                            {formik.touched.email && formik.errors.email && <span className='text-xs text-red-600'>{formik.errors.email}</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500"
                            />
                            {formik.touched.password && formik.errors.password && <span className='text-xs text-red-600'>{formik.errors.password}</span>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-900 text-white py-3 px-4 rounded-md hover:bg-blue-600 mb-2"
                        >
                            Sign Up
                        </button>
                        <div className='flex items-center justify-between'>
                            <div className="text-center">
                                <a href="/forgot-password" className="text-blue-500 text-sm">Forgot Password?</a>
                            </div>
                            <div className="text-center">
                                <span className="text-gray-600 text-sm">I don't have an account? </span>
                                <a href="/signup" className="text-blue-500 text-sm">Sign Up</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SigninPage
