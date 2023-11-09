// State
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Images and SVG
import TextLogo from "../assets/new_wc_logo.png";

// Formik
import { useFormik } from "formik";
import * as Yup from "yup";

// Components

// Services
import { AdminSignup } from "../services/Admin/SignupService";
import ApiService from "../services/ApiService";

// Models
import ErrorModel from "../common/ErrorModel";
import CountrySelect from "../components/CountrySelect";

const SignupPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    company_name: Yup.string()
      .min(3, "Company name must be 3 characters")
      .required("Please enter your company name"),
    slug: Yup.string().required("Please enter a domain name"),
    email: Yup.string()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        "Please enter a valid email address"
      )
      .required("Please enter your email"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile number must be a 10-digit number")
      .required("Please enter your mobile number"),
    password: Yup.string()
      .min(8, "Password must be contain at least 8 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contains letters, numbers & Special characters"
      )
      .required("Please enter your password"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Please enter your confirm password"),
  });

  const formik = useFormik({
    initialValues: {
      company_name: "",
      slug: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      SignupUser(values);
    },
  });

  const SignupUser = async () => {
    const payload = {
      name: formik.values.company_name,
      slug: formik.values.slug,
      email: formik.values.email,
      phone: formik.values.phone,
      password: formik.values.password,
      password_confirmation: formik.values.confirm_password,
      user_type: "admin",
    };
    console.log(payload);
    try {
      const response = await AdminSignup(payload);
      if (response.status === 200) {
        navigate("/verify-otp", {
          state: {
            phone: formik.values.phone,
            path: pathName,
          },
        });
        console.log(response);
      } else {
        setError(response?.response?.data?.message);
        console.log(response?.response?.data?.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Slug
  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    const slugValue = generateSlug(nameValue);
    formik.setValues({
      ...formik.values,
      company_name: nameValue,
      slug: slugValue,
    });
  };

  // Slug value generation
  const generateSlug = (name) => {
    const sanitizedName = name.replace(
      /[\s~`!@#$%^&*()_\-+={}[\]:;<>,.?\/\\|]/g,
      ""
    );
    return sanitizedName.toLowerCase();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="max-w-md mx-auto">
          <div className="mb-10 text-center">
            <img src={TextLogo} alt="Logo" className="mx-auto" />
          </div>
          <form onSubmit={formik.handleSubmit} noValidate>
            <div className="mb-5">
              <label
                htmlFor="company_name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name (or) Company Name
              </label>
              <input
                type="text"
                id="name"
                name="company_name"
                onChange={(e) => {
                  formik.handleChange(e);
                  handleNameChange(e);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.company_name}
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500"
              />
              {formik.touched.company_name && formik.errors.company_name && (
                <span className="text-xs text-red-600">
                  {formik.errors.company_name}
                </span>
              )}
            </div>
            <div className="relative">
              <div className="mb-5">
                <label
                  htmlFor="slug"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Slug
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="slug"
                    name="slug"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.slug}
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500"
                  />
                  <p className="text-gray-300 absolute right-2 top-1/2 transform -translate-y-1/2">
                    .whitecrappie.in
                  </p>
                </div>
                {formik.touched.slug && formik.errors.slug && (
                  <span className="text-xs text-red-600">
                    {formik.errors.slug}
                  </span>
                )}
              </div>
            </div>
            <div className="mt-5 mb-5">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
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
              {formik.touched.email && formik.errors.email && (
                <span className="text-xs text-red-600">
                  {formik.errors.email}
                </span>
              )}
            </div>

            <div className="mb-5">
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Mobile Number
              </label>
              <div className="flex items-center gap-3">
                <CountrySelect />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  className="w-full border border-gray-300 p-2 rounded-r-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500"
                />
              </div>
              {formik.touched.phone && formik.errors.phone && (
                <span className="text-xs text-red-600 transition-transform duration-100">
                  {formik.errors.phone}
                </span>
              )}
            </div>

            <div className="flex gap-4 justify-center">
              <div className="mb-4 w-2/4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
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
                {formik.touched.password && formik.errors.password && (
                  <span className="text-xs text-red-600 transition-transform duration-100">
                    {formik.errors.password}
                  </span>
                )}
              </div>
              <div className="mb-4 w-2/4">
                <label
                  htmlFor="confirm_password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirm_password}
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500"
                />
                {formik.touched.confirm_password &&
                  formik.errors.confirm_password && (
                    <span className="text-xs text-red-600 transition-transform duration-100">
                      {formik.errors.confirm_password}
                    </span>
                  )}
              </div>
            </div>
            <button
              type="submit"
              disabled={!formik.isValid || loading}
              className={`w-full bg-blue-900 text-white py-3 px-4 rounded-md hover:bg-blue-600 mb-2 ${
                loading ? "disabled" : ""
              }`}
            >
              {loading ? "Signing Up...." : "Sign Up"}
            </button>
            {error ? <ErrorModel error={error} /> : ""}
            <div className="text-center">
              <span className="text-gray-600 text-sm">
                Already have an account?{" "}
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

export default SignupPage;
