import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function RegisterPage() {

  const navigate = useNavigate();

  const formik = useFormik({

    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({

      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),

    onSubmit: (values) => {
      alert("Registration successful!");
      navigate("/login");
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">

        {/* <h2 className="text-2xl font-bold text-center mb-6">
          Register
        </h2> */}

        <form onSubmit={formik.handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full border p-2 rounded"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />

            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm">
                {formik.errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border p-2 rounded"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />

            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">
                {formik.errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full border p-2 rounded"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />

            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm">
                {formik.errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full border p-2 rounded"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />

            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {formik.errors.confirmPassword}
                </p>
              )}
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 py-2 rounded font-semibold hover:bg-yellow-500"
          >
            Register
          </button>

        </form>

        <p className="text-center text-sm mt-4">

          Already have an account?{" "}
          <Link to="/login" className="text-yellow-500 hover:underline">
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default RegisterPage;