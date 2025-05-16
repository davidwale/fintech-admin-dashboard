import { CheckCircle } from "lucide-react"

const SuccessModal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900/95 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-sm mx-4 p-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-600" />
          </div>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Successful</h3>
        <p className="text-sm text-gray-500 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default SuccessModal
