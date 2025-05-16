import { useState } from "react"
import { Eye, EyeOff, User } from "lucide-react"
import Navbar from "../../../components/Navbar"

const Account = () => {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  const [passwordError, setPasswordError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Reset error
    setPasswordError("")
    
    // Basic validation
    if (!oldPassword || !newPassword || !confirmPassword) {
      setPasswordError("All fields are required")
      return
    }
    
    if (newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters long")
      return
    }
    
    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords must match")
      return
    }
    
    // Submit password change request
    console.log("Password change submitted")
    
    // Reset form
    setOldPassword("")
    setNewPassword("")
    setConfirmPassword("")
  }

  return (
    <div className="flex flex-col h-full">
      <Navbar 
        itemName="Account"
        itemIcon={<User className="w-5 h-5" />}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6 bg-gray-50">
        {/* Page Title and Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Account</h2>
          <p className="text-gray-600">Change your password here.</p>
        </div>

        {/* Password Change Form */}
        <div className="bg-white rounded-md border border-gray-200 p-6 max-w-md">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Change Password</h3>
          
          <form onSubmit={handleSubmit}>
            {/* Old Password */}
            <div className="mb-4">
              <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Old Password*
              </label>
              <div className="relative">
                <input
                  id="oldPassword"
                  type={showOldPassword ? "text" : "password"}
                  placeholder="Input"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowOldPassword(!showOldPassword)}
                >
                  {showOldPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            
            {/* New Password */}
            <div className="mb-4">
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                New Password*
              </label>
              <div className="relative">
                <input
                  id="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Create password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Password required to be at least 8 characters long</p>
            </div>
            
            {/* Confirm Password */}
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password*
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Passwords must match</p>
            </div>
            
            {/* Error Message */}
            {passwordError && (
              <div className="mb-4 text-sm text-red-600">
                {passwordError}
              </div>
            )}
            
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Account