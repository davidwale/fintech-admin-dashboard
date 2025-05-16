import { useState } from "react"
import { Search, Filter, ShieldCheck } from "lucide-react"
import Navbar from "../../../components/Navbar"

const AuthorizationList = () => {
  const [searchQuery, setSearchQuery] = useState("")
  
  const [authorizations, setAuthorizations] = useState([
    {
      id: 1,
      menu: "Users",
      access: "Create",
      enabled: true
    },
    {
      id: 2,
      menu: "Users",
      access: "Edit",
      enabled: true
    },
    {
      id: 3,
      menu: "Roles",
      access: "Full",
      enabled: true
    },
    {
      id: 4,
      menu: "Roles",
      access: "Create",
      enabled: false
    }
  ])

  // Filter authorizations based on search query
  const filteredAuthorizations = authorizations.filter((auth) =>
    auth.menu.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const toggleEnabled = (id) => {
    setAuthorizations(
      authorizations.map((auth) => 
        auth.id === id ? { ...auth, enabled: !auth.enabled } : auth
      )
    )
  }

  const configureAuth = (id) => {
    // Implement configuration functionality
    console.log("Configure authorization with ID:", id)
  }

  return (
    <div className="flex flex-col h-full">
      <Navbar 
        itemName="Authorization List"
        itemIcon={<ShieldCheck className="w-5 h-5" />}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6 bg-gray-50">
        {/* Page Title and Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Authorization List</h2>
          <p className="text-gray-600">Shows list of all users with authorized roles.</p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-between mb-6 gap-4">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search user"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
          
          <button
            className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded border border-gray-300 hover:bg-gray-200"
          >
            <Filter className="w-5 h-5" />
            <span>Filter</span>
          </button>
        </div>

        {/* Authorizations Table */}
        <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Menu
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Access
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Enabled
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAuthorizations.length > 0 ? (
                  filteredAuthorizations.map((auth) => (
                    <tr key={auth.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{auth.menu}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{auth.access}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input 
                            type="checkbox" 
                            checked={auth.enabled}
                            onChange={() => toggleEnabled(auth.id)}
                            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                          />
                          <label 
                            className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${auth.enabled ? 'bg-blue-500' : 'bg-gray-300'}`}
                          ></label>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <button
                          onClick={() => configureAuth(auth.id)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          Configure
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">
                      No authorizations found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <div>Page 1 of 1</div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded bg-white text-gray-400 cursor-not-allowed">
              Previous
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded bg-white text-gray-400 cursor-not-allowed">
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AuthorizationList
