import React from 'react';
import TextLogo from "../assets/new_wc_logo.png";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupPage = () => {

    const validationSchema = Yup.object({
        company_name: Yup.string().required('Company Name is Required'),
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
            company_name: "",
            email: "",
            number_of_employees: "",
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
                    <form onSubmit={formik.handleSubmit} noValidate>
                        <div className="mb-5">
                            <label htmlFor="company_name" className="block text-gray-700 text-sm font-bold mb-2">
                                Name (or) Company Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="company_name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.company_name}
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500"
                            />
                            {formik.touched.company_name && formik.errors.company_name && <span className='text-xs text-red-600'>{formik.errors.company_name}</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500"
                            />
                            {formik.touched.email && formik.errors.email && <span className='text-xs text-red-600'>{formik.errors.email}</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="employee_count" className="block text-gray-700 text-sm font-bold mb-2">
                                Number Of Employees
                            </label>
                            <input
                                type="number"
                                id="employeeCount"
                                name="employee_count"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.employee_count}
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500"
                            />
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
                            {formik.touched.password && formik.errors.password && <span className='text-xs text-red-600 transition-transform duration-100'>{formik.errors.password}</span>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-900 text-white py-3 px-4 rounded-md hover:bg-blue-600 mb-2"
                        >
                            Sign Up
                        </button>
                        <div className="text-center">
                            <span className="text-gray-600 text-sm">Already have an account? </span>
                            <a href="/signin" className="text-blue-500 text-sm">Sign In</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default SignupPage
