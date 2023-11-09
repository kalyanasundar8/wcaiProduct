import React, { useState } from "react";
import TextLogo from "../assets/new_wc_logo.png";

// Formik
import { useFormik } from "formik";
import * as Yup from "yup";

// Service
import { ForgotPasswordService } from "../services/commonServices/PasswordService";

// Models
import ErrorModel from "../common/ErrorModel";
import SuccessModel from "../common/SuccessModel";

const ForgotPasswordPage = () => {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  // Validation
  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Enter a valid email address"
      )
      .required("Please enter your email"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      forgotPassword(values);
    },
  });

  const forgotPassword = async () => {
    const payload = {
      email: formik.values.email,
    };
    console.log(payload);

    try {
      const response = await ForgotPasswordService(payload);
      if (response.status === true) {
        setSuccess("We sent an email to your email account");
        console.log("We sent an email to your email account");
      } else {
        setError("Something went wrong");
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="max-w-md mx-auto">
          <div className="mb-4 text-center">
            <img src={TextLogo} alt="Logo" className="mx-auto" />
          </div>
          <form onSubmit={formik.handleSubmit} noValidate>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
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
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500"
              />
              {formik.touched.email && formik.errors.email && (
                <span className="text-xs text-red-600">
                  {formik.errors.email}
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

export default ForgotPasswordPage;
