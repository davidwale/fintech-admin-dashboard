import { use, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from "/assets/Logo.png"
import dashboardPreview from "/assets/AuthRIghtSection.png"
import { EyeOffIcon, Eye, LoaderCircle } from "lucide-react"

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.username || !formData.password) {
      setError(true)
      return
    }
    setError(false)
    setLoading(true)
    setSuccess(true)
    // Simulate authentication delay
    setTimeout(() => {
        setLoading(false)
        navigate("/dashboard")
    }, 3000)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="flex min-h-screen w-full">
      {/* Left side - Login Form */}
      <div className="w-full lg:w-full p-8 flex flex-col justify-between">
        <div>
          {/* Logo */}
          <div className="mb-16">
            <img src={logo} alt="LAPO Logo" className="h-10" />
          </div>

          <div className="px-10">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold mb-1">Hi, Welcome Back</h1>
              <p className="text-gray-600 text-sm">Please sign in using your credentials</p>
            </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Username Field */}
                <div className="space-y-2">
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="Enter your username"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 pl-8"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter your password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 pl-8"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Forgot Password & Remember Me */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                      Forgot password
                    </a>
                  </div>
                </div>

                {/* Login Button */}
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {loading ? (
                      <LoaderCircle className="animate-spin h-5 w-5 text-white" />
                    ) : (
                      "Login"
                    )}
                  </button>
                  {success && (
                    <div className="mt-2 text-green-600 text-sm">
                      Login successful! Redirecting...
                    </div>
                  )}
                  {error && (
                    <div className="mt-2 text-red-600 text-sm">
                      Email and password are required.
                    </div>
                  )}
                </div>
              </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-gray-500">
          © 2024 Mercator Technologies Ltd. All rights reserved.
        </div>
      </div>

      {/* Right side - Preview */}
      <div className="hidden lg:block p-8 max-h-screen lg:w-full bg-[#E5F0FF]">
        {/* <div className="h-full p-8">
          <div className="h-full w-full flex items-center justify-center"> */}
            <img
              src={dashboardPreview}
              alt="Dashboard Preview"
              className="h-full w-full object-contain rounded-lg"
            />
          {/* </div>
        </div> */}
      </div>
    </div>
  )
}

export default Login
