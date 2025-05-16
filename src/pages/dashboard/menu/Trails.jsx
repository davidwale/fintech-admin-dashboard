import { useState } from "react"
import { Search, Filter, MapIcon } from "lucide-react"
import Navbar from "../../../components/Navbar"

const Trail = () => {
  const [searchQuery, setSearchQuery] = useState("")
  
  const [trails, setTrails] = useState([
    
    // Currently empty because the design does not specify any data
  ])

  const filteredTrails = trails.filter((trail) =>
    trail?.actor?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex flex-col h-full">
      <Navbar 
        itemName="Trail"
        itemIcon={<MapIcon className="w-5 h-5" />}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6 bg-gray-50">
        {/* Page Title and Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Trail</h2>
          <p className="text-gray-600">View details of different card trails here.</p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-between mb-6 gap-4">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search"
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

        {/* Trails Table */}
        <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Event
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    State
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Device
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time Stamp
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTrails.length > 0 ? (
                  filteredTrails.map((trail, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{trail.actor}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{trail.event}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{trail.state}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{trail.device}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{trail.timestamp}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <button
                          className="text-blue-600 hover:text-blue-800"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                      No trails found
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

export default Trail