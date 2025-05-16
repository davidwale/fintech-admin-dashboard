import { useState } from "react"
import { ArrowLeft, Download, Clock, CheckCircle, Send, CheckCheck } from "lucide-react"
import SuccessModal from "./SuccessModal"

const RequestDetails = ({ request, onBack, onUpdateStatus }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const handleDownload = () => {
    // Simulate download
    setSuccessMessage("Production file has been downloaded.")
    setShowSuccessModal(true)
  }

  const handleStatusChange = (newStatus) => {
    onUpdateStatus(request.id, newStatus)
    setSuccessMessage(`Request status updated to ${newStatus}.`)
    setShowSuccessModal(true)
  }

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "Ready":
        return "bg-green-100 text-green-800"
      case "In Progress":
        return "bg-yellow-100 text-yellow-800"
      case "Pending":
        return "bg-gray-100 text-gray-800"
      case "Acknowledged":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="flex flex-col h-full">
      <header className="bg-white border-b border-gray-200 py-3 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={onBack} className="mr-4 text-gray-500 hover:text-gray-700">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">Card Request</span>
            <span className="text-sm text-gray-500 mx-2">/</span>
            <h1 className="text-xl font-semibold text-gray-800">Request Details</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-6 bg-gray-50">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Request Details</h2>
          <p className="text-gray-600">Perform predetermined actions on card requests here.</p>
        </div>

        {/* Card Request Details */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-6">Card Request Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Branch Name</label>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50">{request.branch}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Initiator</label>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50">{request.initiator}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Card Type</label>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50">{request.cardType}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Card Charges</label>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50">{request.cardCharges}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50">{request.quantity}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Batch</label>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50">{request.batch}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date Requested</label>
              <div className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50">
                {request.dateRequested}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <div className="w-full px-3 py-2 flex items-center">
                <span
                  className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${getStatusBadgeClass(request.status)}`}
                >
                  {request.status}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Actions</h4>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800"
              >
                <Download className="w-4 h-4" />
                <span>Download for Production</span>
              </button>
              <button
                onClick={() => handleStatusChange("In Progress")}
                className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
              >
                <Clock className="w-4 h-4" />
                <span>Mark as In Progress</span>
              </button>
              <button
                onClick={() => handleStatusChange("Ready")}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Mark as Ready</span>
              </button>
              <button
                onClick={() => handleStatusChange("Pending")}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
              >
                <Send className="w-4 h-4" />
                <span>Send to Director</span>
              </button>
              <button
                onClick={() => handleStatusChange("Acknowledged")}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <CheckCheck className="w-4 h-4" />
                <span>Mark as Acknowledged</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Success Modal */}
      {showSuccessModal && <SuccessModal message={successMessage} onClose={() => setShowSuccessModal(false)} />}
    </div>
  )
}

export default RequestDetails
