import { useState } from "react"
import { Search, Trash2, Edit, UserIcon, Plus, X, Eye, EyeOff, Users2 } from "lucide-react"
import Navbar from "../../../components/Navbar"

const Users = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [newUser, setNewUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    accessLevel: "",
    branch: "",
    role: "",
  })

  // Sample users data
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "RealUser",
      phone: "09012345678",
      email: "realuser@mercator.com",
      dateCreated: "11/09/2024 08:41:37",
      firstName: "Real",
      lastName: "User",
      accessLevel: "Admin",
      branch: "Head Office",
      role: "Admin",
    },
    {
      id: 2,
      username: "RealUser",
      phone: "09012345678",
      email: "realuser@mercator.com",
      dateCreated: "11/09/2024 08:41:37",
      firstName: "Real",
      lastName: "User",
      accessLevel: "Admin",
      branch: "Head Office",
      role: "Admin",
    },
    {
      id: 3,
      username: "RealUser",
      phone: "09012345678",
      email: "realuser@mercator.com",
      dateCreated: "11/09/2024 08:41:37",
      firstName: "Real",
      lastName: "User",
      accessLevel: "Admin",
      branch: "Head Office",
      role: "Admin",
    },
  ])

  // Sample data for dropdowns
  const accessLevels = ["Admin", "Manager", "Staff", "Viewer"]
  const branches = ["Head Office", "Branch 1", "Branch 2", "Branch 3"]
  const roles = ["Admin", "Manager", "Operator", "Viewer"]

  // Filter users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.phone.includes(searchQuery),
  )

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id))
    }
  }

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log("Edit user with ID:", id)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewUser({
      ...newUser,
      [name]: value,
    })
  }

  const handleCreateUser = (e) => {
    e.preventDefault()

    // Basic validation
    if (!newUser.username || !newUser.email || !newUser.password) {
      alert("Please fill in all required fields")
      return
    }

    const newId = users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1
    const currentDate = new Date()
      .toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
      .replace(",", "")

    const userToAdd = {
      id: newId,
      username: newUser.username,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      phone: newUser.phone,
      accessLevel: newUser.accessLevel,
      branch: newUser.branch,
      role: newUser.role,
      dateCreated: currentDate,
    }

    setUsers([...users, userToAdd])

    // Reset form and close modal
    setNewUser({
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      accessLevel: "",
      branch: "",
      role: "",
    })
    setShowCreateModal(false)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="flex flex-col h-full">
      <Navbar 
      itemName="Users"
      itemIcon={<Users2 className="w-5 h-5" />}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6 bg-gray-50">
        {/* Page Title and Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Users</h2>
          <p className="text-gray-600">
            Manage your users, create users, view and edit users. Assign roles to users here.
          </p>
        </div>

        {/* Search and Create User Button */}
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search by username"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
          <button
            className="flex items-center justify-center gap-2 px-4 py-2 bg-[#014DAF] text-white rounded hover:bg-blue-700"
            onClick={() => setShowCreateModal(true)}
          >
            <Plus className="w-5 h-5" />
            <span>Create User</span>
          </button>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Username
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.username}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.dateCreated}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <div className="flex space-x-2">
                          <button onClick={() => handleDelete(user.id)} className="text-gray-500 hover:text-red-600">
                            <Trash2 className="w-5 h-5" />
                          </button>
                          <button onClick={() => handleEdit(user.id)} className="text-gray-500 hover:text-blue-600">
                            <Edit className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Create User Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-gray-900/95 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md mx-4">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <UserIcon className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Create User</h3>
                  <p className="text-sm text-gray-500">Fill in user details and assign role.</p>
                </div>
              </div>
              <button onClick={() => setShowCreateModal(false)} className="text-gray-400 hover:text-gray-500">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleCreateUser} className="p-6 max-h-[70vh] overflow-y-auto">
              <div className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={newUser.username}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="User"
                  />
                </div>
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={newUser.firstName}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Naseer"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={newUser.lastName}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Ajibola"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="ajibola@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={newUser.phone}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="09012345678"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={newUser.password}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="********"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label htmlFor="accessLevel" className="block text-sm font-medium text-gray-700">
                    Access Level
                  </label>
                  <select
                    id="accessLevel"
                    name="accessLevel"
                    value={newUser.accessLevel}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" disabled>
                      Select level from dropdown
                    </option>
                    {accessLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="branch" className="block text-sm font-medium text-gray-700">
                    Branch
                  </label>
                  <select
                    id="branch"
                    name="branch"
                    value={newUser.branch}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" disabled>
                      Select branch from dropdown
                    </option>
                    {branches.map((branch) => (
                      <option key={branch} value={branch}>
                        {branch}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                    Assign Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={newUser.role}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" disabled>
                      Select role from dropdown
                    </option>
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Create user
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Users
