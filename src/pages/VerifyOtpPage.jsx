import React, { useEffect, useState } from "react";

import TextLogo from "../assets/new_wc_logo.png";

// Validation imports
import { useFormik } from "formik";
import * as Yup from "yup";

// Routers
import { useLocation, useNavigate } from "react-router-dom";

// Services
import { verifyOtp } from "../services/Admin/SignupService";
import { ResendOtp } from "../services/Admin/SignInService";

// Models
import ErrorModel from "../common/ErrorModel";
import SuccessModel from "../common/SuccessModel";

const VerifyOtpPage = () => {

  const navigate = useNavigate()
  const location = useLocation();
  const mobileNumber = location.state.phone;
  const pathName = location.state.path;
  console.log(pathName)
  console.log(mobileNumber);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validationSchema = Yup.object({
    otp: Yup.string()
      .matches(/^[0-9]{6}$/, "OTP must be a 6-digit number")
      .required("Please enter your OTP"),
  });

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      verifyUserOtp(values);
    },
  });

  const verifyUserOtp = async () => {
    const payload = {
      phone: mobileNumber,
      otp: formik.values.otp,
    };
    console.log(payload);

    try {
      const response = await verifyOtp(payload);
      if (response.status === 200) {
        navigate("/")
        console.log(response);
      } else {
        setError(response.response.data.message);
        console.log(response.response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const redirected = async () => {
        const payload = {
            phone: mobileNumber
        }
        try {
            const response = await ResendOtp(payload);
            setSuccess(response.data.message)
            console.log(response.data.message);
        } catch(error) {
            console.log(error);
        }
    }

    if( pathName === '/signin') {
        redirected()
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="max-w-md mx-auto">
          <div className="mb-4 text-center">
            <img src={TextLogo} alt="Logo" className="mx-auto" />
            <p className="text-[12px] text-gray-400">
              Please check your mobile, We sent a OTP to your mobilenumber.
              Don't share your OTP to anyone.
            </p>
          </div>
          <form onSubmit={formik.handleSubmit} noValidate>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Enter Your OTP
              </label>
              <input
                type="text"
                id="otp"
                required
                name="otp"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.otp}
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500"
              />
              {formik.touched.otp && formik.errors.otp && (
                <span className="text-xs text-red-600">
                  {formik.errors.otp}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-primary-dark mb-2"
            >
              Verify
            </button>
            {error ? <ErrorModel error={error} /> : success ? (<SuccessModel success={success}/>) : ""}
            {/* <div className="text-center">
                            <span className="text-gray-600 text-sm">Remember your password? </span>
                            <a href="/signin" className="text-blue-500 text-sm">Sign In</a>
                        </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
