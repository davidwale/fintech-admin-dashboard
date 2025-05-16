import { useState } from "react"
import { CreditCard, FileText, Maximize, ChevronRight, CircleAlert, ArrowUpRightIcon, Calendar, LayoutDashboard } from "lucide-react"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import Navbar from "../../components/Navbar"

const Dashboard = () => {
  const [currentDate] = useState(new Date())

  // Format date as "11 Nov 2024"
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })

  // Format time as "12:30:20"
  const lastLoginTime = "12:30:20"
  const lastLoginDate = "30/11/2023"

  // Quick access buttons
  const quickAccessButtons = [
    { id: 1, title: "Manage a Card", icon: <CreditCard className="w-5 h-5" />, color: "bg-blue-600" },
    { id: 2, title: "Issue Instant Card", icon: <CreditCard className="w-5 h-5" />, color: "bg-blue-600" },
    { id: 3, title: "Issue Personalized Card", icon: <CreditCard className="w-5 h-5" />, color: "bg-blue-600" },
    {
      id: 4,
      title: "Review Card Requests",
      icon: <FileText className="w-5 h-5" />,
      color: "bg-blue-600",
      badge: "1",
    },
  ]

  // Analytics cards data
  const analyticsCards = [
    {
      id: 1,
      title: "Total Active Cards",
      value: "26,478",
      change: "9%",
      period: "this month",
      icon: "/assets/card-check.png",
      iconBg: "bg-blue-100",
    },
    {
      id: 2,
      title: "Total Personalized Cards",
      value: "15,703",
      change: "8.8%",
      period: "this month",
      icon: "/assets/card-pen.png",
      iconBg: "bg-purple-100",
    },
    {
      id: 3,
      title: "Today's Revenue",
      value: "₦9.3M",
      change: "5%",
      period: "vs yesterday",
      icon: "/assets/check-icon.png",
      iconBg: "bg-blue-100",
    },
    {
      id: 4,
      title: "Pending Requests",
      value: "38",
      alert: "requires attention",
      icon: "/assets/pending-icon.png",
      iconBg: "bg-orange-100",
      changeColor: "text-[#E78020]",
    },
  ]

  // Monthly issuance data for bar chart
  const monthlyIssuanceData = [
    { name: "Jan", personalized: 40, instant: 24 },
    { name: "Feb", personalized: 30, instant: 13 },
    { name: "Mar", personalized: 20, instant: 38 },
    { name: "Apr", personalized: 27, instant: 39 },
    { name: "May", personalized: 18, instant: 48 },
    { name: "Jun", personalized: 23, instant: 38 },
    { name: "Jul", personalized: 34, instant: 43 },
  ]

  // Weekly income data for line chart
  const weeklyIncomeData = [
    { name: "Mon", value: 40 },
    { name: "Tue", value: 30 },
    { name: "Wed", value: 20 },
    { name: "Thu", value: 27 },
    { name: "Fri", value: 90 },
    { name: "Sat", value: 23 },
    { name: "Sun", value: 34 },
  ]

  // Recent card requests data
  const recentCardRequests = [
    { id: 1, branch: "Corporate", cardType: "Instant", quantity: 13, status: "Ready" },
    { id: 2, branch: "Corporate", cardType: "Personalized", quantity: 21, status: "In Progress" },
    { id: 3, branch: "Corporate", cardType: "Personalized", quantity: 11, status: "Acknowledged" },
    { id: 4, branch: "Corporate", cardType: "Instant", quantity: 17, status: "Ready" },
  ]

  // Card status distribution data for pie chart
  const cardStatusData = [
    { name: "Active", value: 1500, color: "#00984C" },
    { name: "Inactive", value: 500, color: "#014DAF" },
    { name: "Expired", value: 300, color: "#FFBA24" },
    { name: "Blocked", value: 100, color: "#8020E7" },
    { name: "Lost", value: 50, color: "#FF4457" },
  ]

  const totalCards = cardStatusData.reduce((sum, item) => sum + item.value, 0)

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <Navbar
       itemName="Dashboard" 
       dashboard={true}
       itemIcon={<LayoutDashboard className="w-5 h-5" />} 
       />

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6 bg-gray-50">
        {/* Welcome Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Hi David, what would you like to do today?</h2>
            <p className="text-sm text-gray-500">
             <span className="font-bold">Last login:</span> {lastLoginDate} {lastLoginTime}
            </p>
          </div>
          <div className="text-sm text-gray-500 px-3 py-2 rounded border border-gray-200 flex items-center">
            <span className="mr-1 flex font-bold"><Calendar className="h-4 relative top-0.5" /> Today</span>
            <div className="w-px h-4 bg-gray-300 mx-2"></div>
            <span className="font-medium">{formattedDate}</span>
          </div>
        </div>

        {/* Quick Access Section */}
        <div className="mb-8 bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Your Quick Access</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickAccessButtons.map((button) => (
              <button
                key={button.id}
                className="flex items-center p-4 bg-[#F1F7FF] rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className={`${button.color} text-white p-2 rounded-full mr-3`}>{button.icon}</div>
                <span className="text-sm font-medium text-gray-700">{button.title}</span>
                  <span className=" text-[#808080] text-xs font-medium px-2.5 py-0.5">
                    <ChevronRight className="w-4 h-4" />
                  </span>
              </button>
            ))}
          </div>
        </div>

        {/* Analytics Section */}
        <div className="mb-8">
          <div className="mb-4 flex justify-between items-center">
              <h3 className="text-lg font-bold mr-4 text-gray-800">Analytics</h3>
              <hr className="border-gray-200 w-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {analyticsCards.map((card) => (
              <div key={card.id} className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex flex-col">
                  <div className=" p-2 rounded-md mr-3">
                    <img src={card.icon} alt="Card Icon" className="object-contain w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-500">{card.title}</h4>
                    <div className="flex items-baseline mt-1">
                      <p className="text-2xl font-semibold text-gray-800">{card.value}</p>
                      {card.change && (
                        <span className={`ml-16 text-xs flex ${card.changeColor}`}>
                          <span className="bg-[#EFFAF6] flex flex-row text-[#29A174] rounded-full p-1 mr-1">
                            <ArrowUpRightIcon className="w-3 h-4 relative top- m" />
                            {card.change} 
                          </span>
                          <span className="relative text-[#0000008F]  top-1">
                          {card.period}
                          </span>
                        </span>
                      )}
                      {card.alert && (
                        <span className={`ml-20 relative bottom-1 text-xs flex ${card.changeColor}`}>
                          <span className="mr-1">
                            <CircleAlert className="w-3 h-3 relative top-2 m-0" /> 
                          </span>
                          <span className="relative top-1">
                          {card.alert}
                          </span>
                        </span>
                      )}

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Charts and Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Monthly Issuance Chart */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-medium text-gray-800">Monthly Issuance</h3>
              <button className="text-gray-400 hover:text-gray-600">
                <Maximize className="w-5 h-5" />
              </button>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyIssuanceData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Bar dataKey="personalized" fill="#014DAF" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="instant" fill="#CCE2FF" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center mt-2 text-xs">
              <div className="flex items-center mr-4">
                <span className="w-3 h-3 bg-[#014DAF] rounded-full mr-1"></span>
                <span>Personalized</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-[#CCE2FF] rounded-full mr-1"></span>
                <span>Instant</span>
              </div>
            </div>
          </div>

          {/* Recent Card Requests */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-medium text-gray-800">Recent Card Requests</h3>
              <button className="text-gray-400 hover:text-gray-600">
                <Maximize className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#F1F7FF] pt-4">
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Branch
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Card Type
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentCardRequests.map((request) => (
                    <tr key={request.id}>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-700">{request.branch}</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-700">{request.cardType}</td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-700">{request.quantity}</td>
                      <td className="px-3 py-2 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            request.status === "Ready"
                              ? "bg-green-100 text-green-800"
                              : request.status === "In Progress"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {request.status}
                        </span>
                      </td>
                      <td className="px-3 py-2 whitespace-nowrap text-sm text-blue-600">
                        <button className="hover:text-blue-800">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* This Week's Income */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-medium text-gray-800">This Week's Income</h3>
              <button className="text-gray-400 hover:text-gray-600">
                <Maximize className="w-5 h-5" />
              </button>
            </div>
            <div className="h-64 border border-purple-200 rounded-lg p-2">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyIncomeData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#4DAF01"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Card Status Distribution */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-medium text-gray-800">Card Status Distribution</h3>
              <button className="text-gray-400 hover:text-gray-600">
                <Maximize className="w-5 h-5" />
              </button>
            </div>
            <div className="relative cursor-pointer w-full h-64"> 
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={cardStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {cardStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <p className="text-sm text-gray-500">Total Cards</p>
              <p className="text-2xl font-semibold">{totalCards.toLocaleString()}</p>
            </div>
          </div>

            <div className="flex flex-wrap justify-center mt-2 text-xs gap-3">
              {cardStatusData.map((status, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: status.color }}></span>
                  <span>{status.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
