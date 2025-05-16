import { useState } from "react"
import { Search, Trash2, Edit, Bell, User, Plus, ArrowLeft, UserCog } from "lucide-react"
import Navbar from "../../../components/Navbar"

const Roles = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [showCreateRole, setShowCreateRole] = useState(false)
  const [newRole, setNewRole] = useState({
    name: "",
    permissions: {
      Branch: { full: false, create: false, edit: false, view: false, delete: false },
      User: { full: false, create: false, edit: false, view: false, delete: false },
      Role: { full: false, create: false, edit: false, view: false, delete: false },
      Cards: { full: false, create: false, edit: false, view: false, delete: false },
      "Card Request": { full: false, create: false, edit: false, view: false, delete: false },
      "Authorization List": { full: false, create: false, edit: false, view: false, delete: false },
      "Authorization Queue": { full: false, create: false, edit: false, view: false, delete: false },
      Activity: { full: false, create: false, edit: false, view: false, delete: false },
    },
  })

  // Sample roles data
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", dateCreated: "10/27/2024 10:55:57" },
    { id: 2, name: "Admin", dateCreated: "10/27/2024 10:55:57" },
    { id: 3, name: "Admin", dateCreated: "10/27/2024 10:55:57" },
    { id: 4, name: "Admin", dateCreated: "10/27/2024 10:55:57" },
    { id: 5, name: "Admin", dateCreated: "10/27/2024 10:55:57" },
  ])

  // Filter roles based on search query
  const filteredRoles = roles.filter((role) => role.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this role?")) {
      setRoles(roles.filter((role) => role.id !== id))
    }
  }

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log("Edit role with ID:", id)
  }

  const handleInputChange = (e) => {
    setNewRole({
      ...newRole,
      name: e.target.value,
    })
  }

  const handlePermissionChange = (menuName, permissionType) => {
    const updatedPermissions = { ...newRole.permissions }

    if (permissionType === "full") {
      // If "Full" is toggled, update all permissions for this menu item
      const newValue = !updatedPermissions[menuName].full
      updatedPermissions[menuName] = {
        full: newValue,
        create: newValue,
        edit: newValue,
        view: newValue,
        delete: newValue,
      }
    } else {
      // Update individual permission
      updatedPermissions[menuName][permissionType] = !updatedPermissions[menuName][permissionType]

      // Check if all permissions are true, then set full to true
      const allPermissionsEnabled =
        updatedPermissions[menuName].create &&
        updatedPermissions[menuName].edit &&
        updatedPermissions[menuName].view &&
        updatedPermissions[menuName].delete

      updatedPermissions[menuName].full = allPermissionsEnabled
    }

    setNewRole({
      ...newRole,
      permissions: updatedPermissions,
    })
  }

  const handleCreateRole = (e) => {
    e.preventDefault()

    if (!newRole.name.trim()) {
      alert("Role name is required")
      return
    }

    const newId = roles.length > 0 ? Math.max(...roles.map((role) => role.id)) + 1 : 1
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

    const roleToAdd = {
      id: newId,
      name: newRole.name,
      dateCreated: currentDate,
      permissions: newRole.permissions,
    }

    setRoles([...roles, roleToAdd])

    // Reset form and go back to roles list
    setNewRole({
      name: "",
      permissions: {
        Branch: { full: false, create: false, edit: false, view: false, delete: false },
        User: { full: false, create: false, edit: false, view: false, delete: false },
        Role: { full: false, create: false, edit: false, view: false, delete: false },
        Cards: { full: false, create: false, edit: false, view: false, delete: false },
        "Card Request": { full: false, create: false, edit: false, view: false, delete: false },
        "Authorization List": { full: false, create: false, edit: false, view: false, delete: false },
        "Authorization Queue": { full: false, create: false, edit: false, view: false, delete: false },
        Activity: { full: false, create: false, edit: false, view: false, delete: false },
      },
    })
    setShowCreateRole(false)
  }

  // Render the Create Role page
  if (showCreateRole) {
    return (
      <div className="flex flex-col h-full">
        <header className="bg-white border-b border-gray-200 py-3 px-6 flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={() => setShowCreateRole(false)} className="mr-4 text-gray-500 hover:text-gray-700">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-semibold text-gray-800">Create Role</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="flex items-center text-gray-700 focus:outline-none">
              <User className="w-6 h-6" />
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Create Role</h2>
            <p className="text-gray-600">Set role name, select privileges and permissions.</p>
          </div>

          <form onSubmit={handleCreateRole}>
            <div className="mb-6">
              <label htmlFor="roleName" className="block text-sm font-medium text-gray-700">
                Role name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="roleName"
                value={newRole.name}
                onChange={handleInputChange}
                placeholder="Enter role name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className="bg-white rounded-md border border-gray-200 overflow-hidden mb-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Menu Name
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Full
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Create
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Edit
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      View
                    </th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {Object.keys(newRole.permissions).map((menuName) => (
                    <tr key={menuName} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{menuName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <input
                          type="checkbox"
                          checked={newRole.permissions[menuName].full}
                          onChange={() => handlePermissionChange(menuName, "full")}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <input
                          type="checkbox"
                          checked={newRole.permissions[menuName].create}
                          onChange={() => handlePermissionChange(menuName, "create")}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <input
                          type="checkbox"
                          checked={newRole.permissions[menuName].edit}
                          onChange={() => handlePermissionChange(menuName, "edit")}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <input
                          type="checkbox"
                          checked={newRole.permissions[menuName].view}
                          onChange={() => handlePermissionChange(menuName, "view")}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <input
                          type="checkbox"
                          checked={newRole.permissions[menuName].delete}
                          onChange={() => handlePermissionChange(menuName, "delete")}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create Role
            </button>
          </form>
        </main>
      </div>
    )
  }

  // Render the Roles list page
  return (
    <div className="flex flex-col h-full">
      <Navbar 
      itemName="Roles"
      itemIcon={<UserCog className="w-5 h-5" />}
       />

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6 bg-gray-50">
        {/* Page Title and Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Roles</h2>
          <p className="text-gray-600">
            Manage your roles, create roles, view roles and edit roles. Select privileges and set account permissions
            here.
          </p>
        </div>

        {/* Search and Create Role Button */}
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search role"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
          <button
            className="flex items-center justify-center gap-2 px-4 py-2 bg-[#014DAF] text-white rounded hover:bg-blue-700"
            onClick={() => setShowCreateRole(true)}
          >
            <Plus className="w-5 h-5" />
            <span>Create Role</span>
          </button>
        </div>

        {/* Roles Table */}
        <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
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
                {filteredRoles.length > 0 ? (
                  filteredRoles.map((role) => (
                    <tr key={role.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{role.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{role.dateCreated}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <div className="flex space-x-2">
                          <button onClick={() => handleDelete(role.id)} className="text-gray-500 hover:text-red-600">
                            <Trash2 className="w-5 h-5" />
                          </button>
                          <button onClick={() => handleEdit(role.id)} className="text-gray-500 hover:text-blue-600">
                            <Edit className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="px-6 py-4 text-center text-sm text-gray-500">
                      No roles found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Roles
