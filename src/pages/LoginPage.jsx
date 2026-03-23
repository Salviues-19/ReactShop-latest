import { useDispatch } from "react-redux";
import { login } from "../features/auth/AuthSlice";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function LoginPage() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),

    onSubmit: (values) => {
      dispatch(login());
      navigate("/");
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">

        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-4">

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

          <button
            type="submit"
            className="w-full bg-yellow-400 py-2 rounded font-semibold hover:bg-yellow-500"
          >
            Login
          </button>

        </form>

        <p className="text-center text-sm mt-4">

          Don't have an account?{" "}
          <Link to="/register" className="text-yellow-500 hover:underline">
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default LoginPage;