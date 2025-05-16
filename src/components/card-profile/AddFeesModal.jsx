import { useState } from "react"
import { X } from "lucide-react"

const AddFeeModal = ({ onClose, onAddFee }) => {
  const [fee, setFee] = useState({
    name: "",
    value: "",
    currency: "NGN",
    frequency: "One Off",
    impact: "Issuance",
    accountPad: "None",
    account: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFee({
      ...fee,
      [name]: value,
    })
  }

  const handleRadioChange = (field, value) => {
    setFee({
      ...fee,
      [field]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic validation
    if (!fee.name || !fee.value) {
      alert("Please fill in all required fields")
      return
    }

    onAddFee(fee)
  }

  return (
    <div className="fixed inset-0 bg-gray-900/95 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-lg font-medium text-gray-600">₦</span>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Add Fee</h3>
              <p className="text-sm text-gray-500">Fill in fee details.</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Fee Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={fee.name}
                onChange={handleInputChange}
                placeholder="Maintenance"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="value" className="block text-sm font-medium text-gray-700">
                Value
              </label>
              <select
                id="value"
                name="value"
                value={fee.value}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>
                  Select value
                </option>
                {[0, 100, 200, 500, 1000].map((val) => (
                  <option key={val} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="currencyRadio"
                    checked={fee.currency === "NGN"}
                    onChange={() => handleRadioChange("currency", "NGN")}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">NGN</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="currencyRadio"
                    checked={fee.currency === "USD"}
                    onChange={() => handleRadioChange("currency", "USD")}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">USD</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fee Frequency</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="frequencyRadio"
                    checked={fee.frequency === "One Off"}
                    onChange={() => handleRadioChange("frequency", "One Off")}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">One Off</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="frequencyRadio"
                    checked={fee.frequency === "Monthly"}
                    onChange={() => handleRadioChange("frequency", "Monthly")}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">Monthly</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fee Impact</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="impactRadio"
                    checked={fee.impact === "Issuance"}
                    onChange={() => handleRadioChange("impact", "Issuance")}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">Issuance</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="impactRadio"
                    checked={fee.impact === "Pin Reissue"}
                    onChange={() => handleRadioChange("impact", "Pin Reissue")}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">Pin Reissue</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Account Pad</label>
              <div className="flex flex-wrap gap-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="accountPadRadio"
                    checked={fee.accountPad === "None"}
                    onChange={() => handleRadioChange("accountPad", "None")}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">None</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="accountPadRadio"
                    checked={fee.accountPad === "Branch Code Prefix"}
                    onChange={() => handleRadioChange("accountPad", "Branch Code Prefix")}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">Branch Code Prefix</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="accountPadRadio"
                    checked={fee.accountPad === "Branch Code Suffix"}
                    onChange={() => handleRadioChange("accountPad", "Branch Code Suffix")}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">Branch Code Suffix</span>
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="account" className="block text-sm font-medium text-gray-700">
                Account
              </label>
              <input
                type="text"
                id="account"
                name="account"
                value={fee.account}
                onChange={handleInputChange}
                placeholder="Enter account number"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Fee
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddFeeModal
