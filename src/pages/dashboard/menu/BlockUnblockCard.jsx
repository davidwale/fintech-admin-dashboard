import { useState } from "react"
import { CreditCard } from "lucide-react"
import Navbar from "../../../components/Navbar"

const BlockUnblockCard = () => {
  const [accountNumber, setAccountNumber] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    
    setTimeout(() => {
      setIsSubmitting(false)
      // Handle response accordingly
      console.log("Request submitted for account:", accountNumber)
    }, 1000)
  }

  return (
    <div className="flex flex-col h-full">
      <Navbar 
        itemName="Block/Unblock Card"
        itemIcon={<CreditCard className="w-5 h-5" />}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6 bg-gray-50">
        {/* Page Title and Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Block/Unblock Card</h2>
          <p className="text-gray-600">Attend to card block and unblock requests here.</p>
        </div>

        {/* Account Number Form */}
        <div className="bg-white rounded-md border border-gray-200 p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label 
                htmlFor="accountNumber" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Account Number*
              </label>
              <input
                id="accountNumber"
                type="text"
                placeholder="Enter account number"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
              />
            </div>
            
            {/* THis is empty to match the design */}
            
            <div className="mt-8">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                disabled={!accountNumber || isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default BlockUnblockCard