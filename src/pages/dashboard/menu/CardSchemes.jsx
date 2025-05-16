"use client"

import { useState } from "react"
import { Search, Trash2, Edit, CreditCard, Plus, X } from "lucide-react"
import Navbar from "../../../components/Navbar"

const CardSchemes = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [showAddModal, setShowAddModal] = useState(false)
  const [newScheme, setNewScheme] = useState({
    name: "",
    panLength: "",
  })

  // Sample card schemes data
  const [cardSchemes, setCardSchemes] = useState([
    { id: 1, name: "Verve", panLength: "16" },
    { id: 2, name: "Verve", panLength: "16" },
    { id: 3, name: "Verve", panLength: "16" },
  ])

  // PAN length options
  const panLengthOptions = ["0", "13", "14", "15", "16", "17", "18", "19"]

  // Filter card schemes based on search query
  const filteredSchemes = cardSchemes.filter((scheme) => scheme.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this card scheme?")) {
      setCardSchemes(cardSchemes.filter((scheme) => scheme.id !== id))
    }
  }

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log("Edit card scheme with ID:", id)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewScheme({
      ...newScheme,
      [name]: value,
    })
  }

  const handleAddScheme = (e) => {
    e.preventDefault()

    // Basic validation
    if (!newScheme.name.trim()) {
      alert("Scheme name is required")
      return
    }

    if (!newScheme.panLength) {
      alert("PAN length is required")
      return
    }

    const newId = cardSchemes.length > 0 ? Math.max(...cardSchemes.map((scheme) => scheme.id)) + 1 : 1

    const schemeToAdd = {
      id: newId,
      name: newScheme.name,
      panLength: newScheme.panLength,
    }

    setCardSchemes([...cardSchemes, schemeToAdd])

    // Reset form and close modal
    setNewScheme({
      name: "",
      panLength: "",
    })
    setShowAddModal(false)
  }

  return (
    <div className="flex flex-col h-full">
      <Navbar 
      itemName="Card Scheme"
      itemIcon={<CreditCard className="w-5 h-5" />}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6 bg-gray-50">
        {/* Page Title and Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Card Scheme</h2>
          <p className="text-gray-600">Add, view and edit card schemes here.</p>
        </div>

        {/* Search and Add Scheme Button */}
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search by scheme name"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
          <button
            className="flex items-center justify-center gap-2 px-4 py-2 bg-[#014DAF] text-white rounded hover:bg-blue-700"
            onClick={() => setShowAddModal(true)}
          >
            <Plus className="w-5 h-5" />
            <span>Add Scheme</span>
          </button>
        </div>

        {/* Card Schemes Table */}
        <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Scheme Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    PAN Length
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSchemes.length > 0 ? (
                  filteredSchemes.map((scheme) => (
                    <tr key={scheme.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{scheme.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{scheme.panLength}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <div className="flex space-x-2">
                          <button onClick={() => handleDelete(scheme.id)} className="text-gray-500 hover:text-red-600">
                            <Trash2 className="w-5 h-5" />
                          </button>
                          <button onClick={() => handleEdit(scheme.id)} className="text-gray-500 hover:text-blue-600">
                            <Edit className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="px-6 py-4 text-center text-sm text-gray-500">
                      No card schemes found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Add Card Scheme Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-gray-900/95 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md mx-4">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Add Card Scheme</h3>
                  <p className="text-sm text-gray-500">Fill in scheme name and PAN length.</p>
                </div>
              </div>
              <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-500">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAddScheme} className="p-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Scheme Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newScheme.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Verve"
                  />
                </div>
                <div>
                  <label htmlFor="panLength" className="block text-sm font-medium text-gray-700">
                    PAN Length
                  </label>
                  <select
                    id="panLength"
                    name="panLength"
                    value={newScheme.panLength}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" disabled>
                      Select PAN length
                    </option>
                    {panLengthOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add Scheme
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default CardSchemes
