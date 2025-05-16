import { useState } from "react"
import { ArrowLeft, Plus, X } from "lucide-react"
import AddFeeModal from "./AddFeesModal"

const CreateProfile = ({ onBack, onAddProfile }) => {
  const [showAddFeeModal, setShowAddFeeModal] = useState(false)
  const [newProfile, setNewProfile] = useState({
    name: "",
    cardScheme: "Verve",
    description: "",
    branchBlacklist: "Head Office",
    binPrefix: "",
    expiration: "0",
    currency: "NGN",
    fees: [],
  })

  // Sample data for dropdowns
  const cardSchemes = ["Verve", "Mastercard", "Visa"]
  const branches = ["Head Office", "Branch 1", "Branch 2", "Branch 3"]
  const expirationOptions = ["0", "12", "24", "36", "48", "60"]
  const currencies = ["NGN", "USD", "EUR", "GBP"]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewProfile({
      ...newProfile,
      [name]: value,
    })
  }

  const handleAddFee = (fee) => {
    setNewProfile({
      ...newProfile,
      fees: [...newProfile.fees, fee],
    })
    setShowAddFeeModal(false)
  }

  const handleRemoveFee = (index) => {
    const updatedFees = [...newProfile.fees]
    updatedFees.splice(index, 1)
    setNewProfile({
      ...newProfile,
      fees: updatedFees,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic validation
    if (!newProfile.name || !newProfile.binPrefix) {
      alert("Please fill in all required fields")
      return
    }

    onAddProfile(newProfile)
  }

  return (
    <div className="flex flex-col h-full">
      <header className="bg-white border-b border-gray-200 py-3 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={onBack} className="mr-4 text-gray-500 hover:text-gray-700">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">Card Profile</span>
            <span className="text-sm text-gray-500 mx-2">/</span>
            <h1 className="text-xl font-semibold text-gray-800">Create Profile</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-6 bg-gray-50">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Create Profile</h2>
          <p className="text-gray-600">Fill in profile details and add card fee.</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Profile Details Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Profile Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Card Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newProfile.name}
                  onChange={handleInputChange}
                  placeholder="Enter card name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="binPrefix" className="block text-sm font-medium text-gray-700 mb-1">
                  Bin Prefix<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="binPrefix"
                  name="binPrefix"
                  value={newProfile.binPrefix}
                  onChange={handleInputChange}
                  placeholder="00000000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="cardScheme" className="block text-sm font-medium text-gray-700 mb-1">
                  Card Scheme<span className="text-red-500">*</span>
                </label>
                <select
                  id="cardScheme"
                  name="cardScheme"
                  value={newProfile.cardScheme}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  {cardSchemes.map((scheme) => (
                    <option key={scheme} value={scheme}>
                      {scheme}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="expiration" className="block text-sm font-medium text-gray-700 mb-1">
                  Expiration<span className="text-red-500">*</span>
                </label>
                <select
                  id="expiration"
                  name="expiration"
                  value={newProfile.expiration}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  {expirationOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={newProfile.description}
                  onChange={handleInputChange}
                  placeholder="Enter description"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">
                  Currency<span className="text-red-500">*</span>
                </label>
                <select
                  id="currency"
                  name="currency"
                  value={newProfile.currency}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="branchBlacklist" className="block text-sm font-medium text-gray-700 mb-1">
                  Branch Blacklist
                </label>
                <select
                  id="branchBlacklist"
                  name="branchBlacklist"
                  value={newProfile.branchBlacklist}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  {branches.map((branch) => (
                    <option key={branch} value={branch}>
                      {branch}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Fees Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-800">Fees</h3>
              <button
                type="button"
                onClick={() => setShowAddFeeModal(true)}
                className="flex items-center justify-center gap-1 px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
              >
                <Plus className="w-4 h-4" />
                <span>Add Fee</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Value
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Frequency
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Currency
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Account Pad
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Account
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {newProfile.fees.length > 0 ? (
                    newProfile.fees.map((fee, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{fee.name}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{fee.value}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{fee.frequency}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{fee.currency}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{fee.impact}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{fee.accountPad}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">{fee.account || "-"}</td>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                          <button
                            type="button"
                            onClick={() => handleRemoveFee(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="px-4 py-2 text-center text-sm text-gray-500">
                        No fees added yet
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Create Profile
          </button>
        </form>
      </main>

      {/* Add Fee Modal */}
      {showAddFeeModal && <AddFeeModal onClose={() => setShowAddFeeModal(false)} onAddFee={handleAddFee} />}
    </div>
  )
}

export default CreateProfile
