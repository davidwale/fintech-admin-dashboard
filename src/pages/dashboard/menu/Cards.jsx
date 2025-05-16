import { useState } from "react"
import { Search, Filter, CreditCard } from "lucide-react"
import Navbar from "../../../components/Navbar"

const Cards = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("Personalized")
  
  const tabs = ["Personalized", "Instant", "Blocked", "Pin Reissue"]
  
  const [cards, setCards] = useState([
    {
      id: 1,
      cardholder: "Naseer Aljalia",
      maskedPAN: "506143******362",
      dateIssued: "11/14/2024 10:27:43",
      expiry: "32 months",
      batch: "84726495"
    },
    {
      id: 2,
      cardholder: "Naseer Aljalia",
      maskedPAN: "506143******362",
      dateIssued: "11/14/2024 10:27:43",
      expiry: "32 months",
      batch: "84726495"
    },
    {
      id: 3,
      cardholder: "Naseer Aljalia",
      maskedPAN: "506143******362",
      dateIssued: "11/14/2024 10:27:43",
      expiry: "32 months",
      batch: "84726495"
    },
    {
      id: 4,
      cardholder: "Naseer Aljalia",
      maskedPAN: "506143******362",
      dateIssued: "11/14/2024 10:27:43",
      expiry: "32 months",
      batch: "84726495"
    },
    {
      id: 5,
      cardholder: "Naseer Aljalia",
      maskedPAN: "506143******362",
      dateIssued: "11/14/2024 10:27:43",
      expiry: "32 months",
      batch: "84726495"
    },
    {
      id: 6,
      cardholder: "Naseer Aljalia",
      maskedPAN: "506143******362",
      dateIssued: "11/14/2024 10:27:43",
      expiry: "32 months",
      batch: "84726495"
    },
    {
      id: 7,
      cardholder: "Naseer Aljalia",
      maskedPAN: "506143******362",
      dateIssued: "11/14/2024 10:27:43",
      expiry: "32 months",
      batch: "84726495"
    },
    {
      id: 8,
      cardholder: "Naseer Aljalia",
      maskedPAN: "506143******362",
      dateIssued: "11/14/2024 10:27:43",
      expiry: "32 months",
      batch: "84726495"
    },
    {
      id: 9,
      cardholder: "Naseer Aljalia",
      maskedPAN: "506143******362",
      dateIssued: "11/14/2024 10:27:43",
      expiry: "32 months",
      batch: "84726495"
    },
    {
      id: 10,
      cardholder: "Naseer Aljalia",
      maskedPAN: "506143******362",
      dateIssued: "11/14/2024 10:27:43",
      expiry: "32 months",
      batch: "84726495"
    },
    {
      id: 11,
      cardholder: "Naseer Aljalia",
      maskedPAN: "506143******362",
      dateIssued: "11/14/2024 10:27:43",
      expiry: "32 months",
      batch: "84726495"
    },
    {
      id: 12,
      cardholder: "Naseer Aljalia",
      maskedPAN: "506143******362",
      dateIssued: "11/14/2024 12:27:43",
      expiry: "32 months",
      batch: "84726495"
    },
    {
      id: 13,
      cardholder: "Naseer Aljalia",
      maskedPAN: "506143******362",
      dateIssued: "11/14/2024 10:27:43",
      expiry: "32 months",
      batch: "84726495"
    },
    {
      id: 14,
      cardholder: "Naseer Aljalia",
      maskedPAN: "506143******362",
      dateIssued: "11/14/2024 10:27:43",
      expiry: "32 months",
      batch: "84726495"
    },
    {
      id: 15,
      cardholder: "Naseer Aljalia",
      maskedPAN: "506143******362",
      dateIssued: "11/14/2024 10:27:43",
      expiry: "32 months",
      batch: "84726495"
    }
  ])

  // Filter cards based on search query
  const filteredCards = cards.filter((card) =>
    card.cardholder.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const issueNewCard = () => {
    // Implement functionality to issue a new card
    console.log("Issue new card")
  }

  return (
    <div className="flex flex-col h-full">
      <Navbar 
        itemName="Cards"
        itemIcon={<CreditCard className="w-5 h-5" />}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6 bg-gray-50">
        {/* Page Title and Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Cards</h2>
          <p className="text-gray-600">View all cards status here.</p>
        </div>

        {/* Tabs */}
        <div className="flex mb-6">
          {tabs.map((tab, index) => (
            <button
                key={tab}
                className={`flex items-center gap-2 px-4 py-2 border border-gray-200
                ${index === 0 ? "rounded-l-md" : ""}
                ${index === tabs.length - 1 ? "rounded-r-md" : ""}
                ${activeTab === tab ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-800"}`
                }
                onClick={() => setActiveTab(tab)}
            >
                {activeTab === tab && (
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                )}
                <span>{tab}</span>
            </button>
            ))}

        </div>

        {/* Search and Issue Card Button */}
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search card"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
          <div className="flex gap-2">
            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded border border-gray-300 hover:bg-gray-200"
            >
              <Filter className="w-5 h-5" />
              <span>Filter</span>
            </button>
            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-[#014DAF] text-white rounded hover:bg-blue-700"
              onClick={issueNewCard}
            >
              <CreditCard className="w-5 h-5" />
              <span>Issue Card</span>
            </button>
          </div>
        </div>

        {/* Cards Table */}
        <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cardholder
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Masked PAN
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Issued
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Expiry
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Batch
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCards.length > 0 ? (
                  filteredCards.map((card) => (
                    <tr key={card.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{card.cardholder}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{card.maskedPAN}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{card.dateIssued}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{card.expiry}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{card.batch}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                      No cards found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <div>Page 1 of 20</div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded bg-white text-gray-700 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Cards