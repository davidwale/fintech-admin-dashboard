import { Bell, Search, User } from "lucide-react";

function Navbar({ itemName, dashboard, itemIcon }) {
  return (
    <header className="bg-white border-b border-gray-200 py-3 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <span className="mr-2">{itemIcon}</span>
          <h1 className="text-xl font-semibold text-gray-800">{itemName}</h1>
        </div>
        <div className="flex items-center space-x-4">
          {dashboard && (
            <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-64"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
          )}
          <button className="relative p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="flex items-center text-gray-700 focus:outline-none">
            <User className="w-6 h-6" />
          </button>
        </div>
      </header>
  );
}   

export default Navbar;