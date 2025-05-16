import { useState } from "react"
import { Search, Filter, ClipboardList } from "lucide-react"
import Navbar from "../../../components/Navbar"

const AuthorizationQueue = () => {
  const [searchQuery, setSearchQuery] = useState("")
  
  const [queueItems, setQueueItems] = useState([
    {
      id: 1,
      initiator: "Naseer",
      menu: "Branch",
      access: "Create",
      dateRequested: "11/14/2024 12:27:43",
      status: "Pending"
    },
    {
      id: 2,
      initiator: "Naseer",
      menu: "Users",
      access: "Edit",
      dateRequested: "11/14/2024 12:27:43",
      status: "Pending"
    },
    {
      id: 3,
      initiator: "Naseer",
      menu: "Roles",
      access: "Full",
      dateRequested: "11/14/2024 12:27:42",
      status: "Pending"
    },
    {
      id: 4,
      initiator: "Naseer",
      menu: "Roles",
      access: "Create",
      dateRequested: "11/14/2024 12:27:42",
      status: "Pending"
    },
    {
      id: 5,
      initiator: "Naseer",
      menu: "Card Request",
      access: "Full",
      dateRequested: "11/14/2024 12:27:43",
      status: "Pending"
    }
  ])

  // Filter queue items based on search query
  const filteredQueueItems = queueItems.filter((item) =>
    item.initiator.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleApprove = (id) => {
    setQueueItems(
      queueItems.map((item) => 
        item.id === id ? { ...item, status: "Approved" } : item
      )
    )
  }

  const handleDecline = (id) => {
    setQueueItems(
      queueItems.map((item) => 
        item.id === id ? { ...item, status: "Declined" } : item
      )
    )
  }

  return (
    <div className="flex flex-col h-full">
      <Navbar 
        itemName="Authorization Queue"
        itemIcon={<ClipboardList className="w-5 h-5" />}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6 bg-gray-50">
        {/* Page Title and Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Authorization Queue</h2>
          <p className="text-gray-600">Shows the different requests for authorized roles.</p>
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

        {/* Queue Table */}
        <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Initiator
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Menu
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Access
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Requested
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredQueueItems.length > 0 ? (
                  filteredQueueItems.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.initiator}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.menu}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.access}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.dateRequested}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span 
                          className={`px-2 py-1 rounded text-xs font-medium
                            ${item.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                             item.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                             'bg-red-100 text-red-800'}`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex space-x-2">
                          {item.status === 'Pending' && (
                            <>
                              <button
                                onClick={() => handleApprove(item.id)}
                                className="text-green-600 hover:text-green-800"
                              >
                                Approve
                              </button>
                              <button
                                onClick={() => handleDecline(item.id)}
                                className="text-red-600 hover:text-red-800"
                              >
                                Decline
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                      No queue items found
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

export default AuthorizationQueue