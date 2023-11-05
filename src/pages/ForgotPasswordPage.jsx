import React from 'react';
import TextLogo from "../assets/new_wc_logo.png";

// Validation imports
import { useFormik } from 'formik';
import * as Yup from "yup";

const ForgotPasswordPage = () => {

    // Validation
    const validationSchema = Yup.object({
        email: Yup.string().matches(
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            'Enter a valid email address'
        ).required("Email is required"),
    })

    const formik = useFormik({
        initialValues: {
            email: "",
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
                    <div className="mb-4 text-center">
                        <img src={TextLogo} alt="Logo" className="mx-auto" />
                    </div>
                    <form onSubmit={formik.handleSubmit} noValidate>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-primary"
                            />
                            {formik.touched.email && formik.errors.email && <span className='text-xs text-red-600'>{formik.errors.email}</span>}
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

export default ForgotPasswordPage
