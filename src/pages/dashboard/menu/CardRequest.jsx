import { useState } from "react"
import { Search, TicketCheck } from "lucide-react"
import Navbar from "../../../components/Navbar"
import RequestDetails from "../../../components/card-request/RequestDetails"

const CardRequest = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRequest, setSelectedRequest] = useState(null)

  // Sample card requests data
  const [cardRequests, setCardRequests] = useState([
    {
      id: 1,
      branch: "Corporate",
      initiator: "RootUser",
      quantity: 30,
      batch: "847264905",
      dateRequested: "11/14/2024 10:27:43",
      status: "Ready",
      cardType: "Classic Debit",
      cardCharges: "₦1,500",
    },
    {
      id: 2,
      branch: "Corporate",
      initiator: "RootUser",
      quantity: 30,
      batch: "847264905",
      dateRequested: "11/14/2024 10:27:43",
      status: "Ready",
      cardType: "Classic Debit",
      cardCharges: "₦1,500",
    },
    {
      id: 3,
      branch: "Corporate",
      initiator: "RootUser",
      quantity: 30,
      batch: "847264905",
      dateRequested: "11/14/2024 10:27:43",
      status: "In Progress",
      cardType: "Classic Debit",
      cardCharges: "₦1,500",
    },
    {
      id: 4,
      branch: "Corporate",
      initiator: "RootUser",
      quantity: 30,
      batch: "847264905",
      dateRequested: "11/14/2024 10:27:43",
      status: "Pending",
      cardType: "Classic Debit",
      cardCharges: "₦1,500",
    },
    {
      id: 5,
      branch: "Corporate",
      initiator: "RootUser",
      quantity: 30,
      batch: "847264905",
      dateRequested: "11/14/2024 10:27:43",
      status: "Acknowledged",
      cardType: "Classic Debit",
      cardCharges: "₦1,500",
    },
  ])

  // Filter card requests based on search query
  const filteredRequests = cardRequests.filter(
    (request) =>
      request.branch.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.initiator.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.batch.includes(searchQuery),
  )

  const handleViewRequest = (request) => {
    setSelectedRequest(request)
  }

  const handleUpdateStatus = (id, newStatus) => {
    const updatedRequests = cardRequests.map((request) =>
      request.id === id ? { ...request, status: newStatus } : request,
    )
    setCardRequests(updatedRequests)

    // If we're viewing the request details, update the selected request too
    if (selectedRequest && selectedRequest.id === id) {
      setSelectedRequest({ ...selectedRequest, status: newStatus })
    }
  }

  const handleBackToList = () => {
    setSelectedRequest(null)
  }

  // If a request is selected, show the request details
  if (selectedRequest) {
    return <RequestDetails request={selectedRequest} onBack={handleBackToList} onUpdateStatus={handleUpdateStatus} />
  }

  return (
    <div className="flex flex-col h-full">
      <Navbar 
      itemName="Card Request"
      itemIcon={<TicketCheck className="w-5 h-5" />} 
      />

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6 bg-gray-50">
        {/* Page Title and Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Card Request</h2>
          <p className="text-gray-600">View and attend to card requests here.</p>
        </div>

        {/* Search */}
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search by branch"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
        </div>

        {/* Card Requests Table */}
        <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Branch
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Initiator
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Batch
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
                {filteredRequests.length > 0 ? (
                  filteredRequests.map((request) => (
                    <tr key={request.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{request.branch}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{request.initiator}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{request.quantity}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{request.batch}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{request.dateRequested}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            request.status === "Ready"
                              ? "bg-green-100 text-green-800"
                              : request.status === "In Progress"
                                ? "bg-yellow-100 text-yellow-800"
                                : request.status === "Pending"
                                  ? "bg-gray-100 text-gray-800"
                                  : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {request.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => handleViewRequest(request)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-6 py-4 text-center text-sm text-gray-500">
                      No card requests found
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

export default CardRequest
