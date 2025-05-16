import { useState } from "react"
import { Search, Trash2, Edit, Plus, Wallet } from "lucide-react"
import Navbar from "../../../components/Navbar"
import CreateProfile from "../../../components/card-profile/CreateProfile"

const CardProfile = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [showCreateProfile, setShowCreateProfile] = useState(false)
  const [cardProfiles, setCardProfiles] = useState([
    {
      id: 1,
      name: "Verve",
      currency: "NGN",
      expiration: "60 months",
      binPrefix: "5061336",
      dateCreated: "11/10/2024 21:31:03",
      description: "Standard debit card",
      branchBlacklist: "Head Office",
      fees: [],
    },
    {
      id: 2,
      name: "Verve",
      currency: "NGN",
      expiration: "60 months",
      binPrefix: "5061336",
      dateCreated: "11/10/2024 21:31:03",
      description: "Standard debit card",
      branchBlacklist: "Head Office",
      fees: [],
    },
    {
      id: 3,
      name: "Verve",
      currency: "NGN",
      expiration: "60 months",
      binPrefix: "5061336",
      dateCreated: "11/10/2024 21:31:03",
      description: "Standard debit card",
      branchBlacklist: "Head Office",
      fees: [],
    },
  ])

  // Filter card profiles based on search query
  const filteredProfiles = cardProfiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this card profile?")) {
      setCardProfiles(cardProfiles.filter((profile) => profile.id !== id))
    }
  }

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log("Edit card profile with ID:", id)
  }

  const handleAddProfile = (newProfile) => {
    const newId = cardProfiles.length > 0 ? Math.max(...cardProfiles.map((profile) => profile.id)) + 1 : 1

    const profileToAdd = {
      id: newId,
      ...newProfile,
      dateCreated: new Date()
        .toLocaleString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
        .replace(",", ""),
    }

    setCardProfiles([...cardProfiles, profileToAdd])
    setShowCreateProfile(false)
  }

  // If create profile is active, show the create profile component
  if (showCreateProfile) {
    return <CreateProfile onBack={() => setShowCreateProfile(false)} onAddProfile={handleAddProfile} />
  }

  return (
    <div className="flex flex-col h-full">
      <Navbar 
      itemName="Card Profile"
      itemIcon={<Wallet className="w-5 h-5" />}
       />

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6 bg-gray-50">
        {/* Page Title and Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Card Profile</h2>
          <p className="text-gray-600">Create, view and edit card profiles here.</p>
        </div>

        {/* Search and Add Profile Button */}
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search by card name"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
          <button
            className="flex items-center justify-center gap-2 px-4 py-2 bg-[#014DAF] text-white rounded hover:bg-blue-700"
            onClick={() => setShowCreateProfile(true)}
          >
            <Plus className="w-5 h-5" />
            <span>Add Profile</span>
          </button>
        </div>

        {/* Card Profiles Table */}
        <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Card Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Currency
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Expiration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bin Prefix
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProfiles.length > 0 ? (
                  filteredProfiles.map((profile) => (
                    <tr key={profile.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{profile.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{profile.currency}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{profile.expiration}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{profile.binPrefix}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{profile.dateCreated}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <div className="flex space-x-2">
                          <button onClick={() => handleDelete(profile.id)} className="text-gray-500 hover:text-red-600">
                            <Trash2 className="w-5 h-5" />
                          </button>
                          <button onClick={() => handleEdit(profile.id)} className="text-gray-500 hover:text-blue-600">
                            <Edit className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                      No card profiles found
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

export default CardProfile
