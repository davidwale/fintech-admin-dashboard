import { Link, useLocation } from "react-router-dom"
import { LayoutDashboard, Building2, Layers, Users, CreditCard, Wallet, ClipboardList, Package, Ban, ListChecks, ListTodo, FlaskConical, UserCircle, LogOut, MapIcon, ChartSpline, TicketCheck, UserCog } from 'lucide-react'
import logo from "/assets/Logo.png"
import cardinfraLogo from "/assets/cardinfra-logo.png"

const Sidebar = () => {
  const location = useLocation()
  const currentPath = location.pathname

  const navItems = [
    { path: "/branches", name: "Branches", icon: <Building2 className="w-5 h-5" /> },
    { path: "/roles", name: "Roles", icon: <UserCog className="w-5 h-5" /> },
    { path: "/users", name: "Users", icon: <Users className="w-5 h-5" /> },
    { path: "/card-schemes", name: "Card Schemes", icon: <CreditCard className="w-5 h-5" /> },
    { path: "/card-profile", name: "Card Profile", icon: <Wallet className="w-5 h-5" /> },
    { path: "/card-request", name: "Card Request", icon: <TicketCheck className="w-5 h-5" /> },
    { path: "/stock", name: "Stock", icon: <ChartSpline className="w-5 h-5" /> },
    { path: "/cards", name: "Cards", icon: <CreditCard className="w-5 h-5" /> },
    { path: "/block-unblock-card", name: "Block/Unblock Card", icon: <Ban className="w-5 h-5" /> },
    { path: "/authorization-list", name: "Authorization List", icon: <ListChecks className="w-5 h-5" /> },
    { path: "/authorization-queue", name: "Authorization Queue", icon: <Layers className="w-5 h-5" /> },
    { path: "/trail", name: "Trail", icon: <MapIcon className="w-5 h-5" /> },
    { path: "/account", name: "Account", icon: <UserCircle className="w-5 h-5" /> },
  ]

  return (
    <div className="w-64 h-full bg-[#002F6C] font-bold flex flex-col">
      {/* Logo */}
      <div className="p-4">
        <img src={logo} alt="LAPO Logo" className="w-36 object-contain h-12" />
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto sidebar-scrollbar py-4">
        <nav className="px-2 space-y-1">
          <Link
              to="/dashboard"
              className={`flex items-center px-4 py-2 text-sm rounded-md ${
                currentPath === "/dashboard" ? "bg-blue-50 text-[#014DAF] font-medium" : "text-[#D0D5DD] hover: hover:bg-blue-600/10 transition duration-300 hover:text-blue-400"
              }`}
            >
              <span className="mr-3"><LayoutDashboard className="w-5 h-5" /></span>
              Dashboard
            </Link>
            <p className="my-8 ml-5 text-xs text-[#7E8B9C]">MAIN MENU</p>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-2 text-sm rounded-md ${
                currentPath === item.path ? "bg-blue-50 text-[#014DAF] font-medium" : "text-[#D0D5DD] hover: hover:bg-blue-600/10 transition duration-300 hover:text-blue-400"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </Link>
          ))}
            <div className="mt-14 mb-8">
        <Link to="/logout" className="flex items-center transition duration-300 px-4 py-2 text-sm hover:text-blue-400 text-white rounded-md">
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </Link>
      </div>

      <div className="p-4 text-xs text-[#7E8B9C]">
        <p>Powered by</p>
        <img
         src={cardinfraLogo}
         alt="cardinfra Logo" 
         />
      </div>
        </nav>
      </div>
    
    </div>
  )
}

export default Sidebar
