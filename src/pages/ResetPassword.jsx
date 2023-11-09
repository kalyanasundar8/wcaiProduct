import React, { useState } from "react";
import TextLogo from "../assets/new_wc_logo.png";

// Formik
import { useFormik } from "formik";
import * as Yup from "yup";
import { ResetPasswordService } from "../services/commonServices/PasswordService";

// Models
import ErrorModel from "../common/ErrorModel";
import SuccessModel from "../common/SuccessModel";

// Routers
import { useParams, useLocation } from "react-router-dom";

const ResetPassword = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Get the values of 'token' and 'email' from the query parameters
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  console.log(token, email);

  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, "Password must be contain at least 8 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contains letters, numbers & Special characters"
      )
      .required("Please enter your password"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Please enter your confirm password"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      password_confirmation: "",
      token: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      resetPassword(values);
    },
  });

  const resetPassword = async () => {
    const payload = {
      email: email,
      password: formik.values.password,
      password_confirmation: formik.values.password_confirmation,
      token: token,
    };
    console.log(payload);

    try {
      const response = await ResetPasswordService(payload);
      if (response.status === true) {
        setSuccess("Password reseted successfully");
        console.log(response);
      } else {
        setError("Something went wrong");
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="patterns min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="max-w-md mx-auto">
          <div className="mb-4 text-center">
            <img src={TextLogo} alt="Logo" className="mx-auto" />
          </div>
          <form onSubmit={formik.handleSubmit} noValidate>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500"
              />
              {formik.touched.password && formik.errors.password && (
                <span className="text-xs text-red-600">
                  {formik.errors.password}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirm_Password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password_confirmation}
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500"
              />
              {formik.touched.password_confirmation &&
                formik.errors.password_confirmation && (
                  <span className="text-xs text-red-600">
                    {formik.errors.password_confirmation}
                  </span>
                )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-primary-dark mb-2"
            >
              Reset Password
            </button>
            {error ? (
              <ErrorModel error={error} />
            ) : success ? (
              <SuccessModel success={success} />
            ) : (
              ""
            )}
            <div className="text-center">
              <span className="text-gray-600 text-sm">
                Remember your password?{" "}
              </span>
              <a href="/signin" className="text-blue-500 text-sm">
                Sign In
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
