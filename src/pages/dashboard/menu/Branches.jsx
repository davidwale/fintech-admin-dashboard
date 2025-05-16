import { useState } from "react"
import { Search, Upload, RefreshCw, Trash2, Edit, X, FileUp, Plus, Building2 } from "lucide-react"
import Navbar from "../../../components/Navbar"

const Branches = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [showAddModal, setShowAddModal] = useState(false)
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [uploadedFile, setUploadedFile] = useState(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [newBranch, setNewBranch] = useState({
    name: "",
    code: "",
    address: "",
    zone: "",
    area: "",
  })

  // Sample branch data
  const [branches, setBranches] = useState([
    { id: 1, name: "Head Office", code: "202", address: "Lekki", zone: "Lagos", dateAdded: "10/18/2024 14:39:58" },
    { id: 2, name: "Head Office", code: "202", address: "Lekki", zone: "Lagos", dateAdded: "10/18/2024 14:39:58" },
    { id: 3, name: "Head Office", code: "202", address: "Lekki", zone: "Lagos", dateAdded: "10/18/2024 14:39:58" },
  ])

  // Filter branches based on search query
  const filteredBranches = branches.filter(
    (branch) =>
      branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.zone.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this branch?")) {
      setBranches(branches.filter((branch) => branch.id !== id))
    }
  }

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log("Edit branch with ID:", id)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewBranch({
      ...newBranch,
      [name]: value,
    })
  }

  const handleAddBranch = (e) => {
    e.preventDefault()
    const newId = branches.length > 0 ? Math.max(...branches.map((branch) => branch.id)) + 1 : 1
    const currentDate = new Date().toLocaleString()

    const branchToAdd = {
      id: newId,
      ...newBranch,
      dateAdded: currentDate,
    }

    setBranches([...branches, branchToAdd])
    setNewBranch({
      name: "",
      code: "",
      address: "",
      zone: "",
      area: "",
    })
    setShowAddModal(false)
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setUploadedFile({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(1), // Convert to MB
      })

      // Simulate upload progress
      setUploadProgress(0)
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 80) {
            clearInterval(interval)
            return 80
          }
          return prev + 10
        })
      }, 300)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) {
      setUploadedFile({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(1), // Convert to MB
      })

      // Simulate upload progress
      setUploadProgress(0)
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 80) {
            clearInterval(interval)
            return 80
          }
          return prev + 10
        })
      }, 300)
    }
  }

  const handleSubmitUpload = () => {
    // Simulate completing the upload
    setUploadProgress(100)
    setTimeout(() => {
      setShowUploadModal(false)
      setUploadedFile(null)
      setUploadProgress(0)
      // Here you would typically process the CSV data and update the branches
    }, 500)
  }

  const removeUploadedFile = () => {
    setUploadedFile(null)
    setUploadProgress(0)
  }

  return (
    <div className="flex flex-col h-full">
      <Navbar 
      itemName="Branches"
       itemIcon={<Building2 className="w-5 h-5" />
       }
       />

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6 bg-gray-50">
        {/* Page Title and Description */}
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Branches</h2>
            <p className="text-gray-600">Add branches, view branches and edit branches.</p>
          </div>
          <button
            className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
            onClick={() => setShowUploadModal(true)}
          >
            <Upload className="w-5 h-5" />
            <span>Upload File</span>
          </button>
        </div>

        {/* Action Buttons and Search */}
        <div className="flex flex-col md:flex-row mb-6 py-4 border-y border-gray-200 justify-between gap-4">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search branch"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
          <div className="flex gap-2">
            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-[#014DAF] text-white rounded hover:bg-blue-700"
              onClick={() => setShowAddModal(true)}
            >
              <Plus className="w-5 h-5" />
              <span>Add Branch</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
              <RefreshCw className="w-5 h-5" />
              <span>Update From Core</span>
            </button>
          </div>
        </div>

        {/* Branches Table */}
        <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Code
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Address
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Zone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Added
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredBranches.length > 0 ? (
                  filteredBranches.map((branch) => (
                    <tr key={branch.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{branch.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{branch.code}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{branch.address}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{branch.zone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{branch.dateAdded}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <div className="flex space-x-2">
                          <button onClick={() => handleDelete(branch.id)} className="text-gray-500 hover:text-red-600">
                            <Trash2 className="w-5 h-5" />
                          </button>
                          <button onClick={() => handleEdit(branch.id)} className="text-gray-500 hover:text-blue-600">
                            <Edit className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                      No branches found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Add Branch Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-gray-900/95 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md mx-4">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <Plus className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Add Branch</h3>
                  <p className="text-sm text-gray-500">Fill in branch details.</p>
                </div>
              </div>
              <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-500">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAddBranch} className="p-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newBranch.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Head Office"
                  />
                </div>
                <div>
                  <label htmlFor="code" className="block text-sm font-medium text-gray-700">
                    Code<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="code"
                    name="code"
                    value={newBranch.code}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="000"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={newBranch.address}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Lekki"
                  />
                </div>
                <div>
                  <label htmlFor="zone" className="block text-sm font-medium text-gray-700">
                    Zone<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="zone"
                    name="zone"
                    value={newBranch.zone}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="LG"
                  />
                </div>
                <div>
                  <label htmlFor="area" className="block text-sm font-medium text-gray-700">
                    Area<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="area"
                    name="area"
                    value={newBranch.area}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="SW"
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add Branch
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Upload CSV Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md mx-4">
            <div className="flex justify-between items-center p-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <FileUp className="w-5 h-5 text-gray-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Upload CSV File</h3>
              </div>
              <button onClick={() => setShowUploadModal(false)} className="text-gray-400 hover:text-gray-500">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 pb-4">
              <p className="text-sm text-gray-600 mb-4">CSV file should contain the following columns</p>
              <ul className="list-disc pl-5 text-sm text-gray-600 mb-6 space-y-1">
                <li>Name</li>
                <li>Code</li>
                <li>Address</li>
                <li>Zone</li>
                <li>Area</li>
              </ul>

              {!uploadedFile ? (
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center relative"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                >
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                    <Upload className="w-5 h-5 text-gray-500" />
                    </div>
                    <p className="text-sm text-blue-600 font-medium mb-1">Click to upload</p>
                    <p className="text-sm text-gray-500 mb-2">or drag and drop</p>
                    <p className="text-xs text-gray-400">CSV, XLSX (max. 5MB)</p>
                    <input
                    type="file"
                    accept=".csv,.xlsx"
                    className="hidden"
                    id="file-upload"
                    onChange={handleFileUpload}
                    />
                    <label 
                    htmlFor="file-upload" 
                    className="absolute top-0 left-0 right-0 bottom-0 cursor-pointer flex items-center justify-center"
                    ></label>
                </div>
              ) : (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-sm flex items-center justify-center mr-3">
                        <span className="text-xs text-green-800 font-medium">CSV</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">{uploadedFile.name}</p>
                        <p className="text-xs text-gray-500">{uploadedFile.size} MB</p>
                      </div>
                    </div>
                    <button onClick={removeUploadedFile} className="text-gray-400 hover:text-gray-600">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${uploadProgress}%` }}></div>
                  </div>
                  <div className="flex justify-end mt-1">
                    <span className="text-xs text-gray-500">{uploadProgress}%</span>
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-end gap-3 p-4 border-t border-gray-200">
              <button
                onClick={() => setShowUploadModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitUpload}
                disabled={!uploadedFile}
                className={`px-4 py-2 text-sm font-medium text-white rounded-md ${
                  uploadedFile ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-400 cursor-not-allowed"
                }`}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Branches
