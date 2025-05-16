"use client"

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import './App.css'
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/dashboard/Dashboard"
import Branches from "./pages/dashboard/menu/Branches"
import Roles from "./pages/dashboard/menu/Roles"
import Users from "./pages/dashboard/menu/Users"
import CardSchemes from "./pages/dashboard/menu/CardSchemes"
import CardProfile from "./pages/dashboard/menu/CardProfile"
import CardRequest from "./pages/dashboard/menu/CardRequest"
import Stock from "./pages/dashboard/menu/Stock"
import Cards from "./pages/dashboard/menu/Cards"
import BlockUnblockCard from "./pages/dashboard/menu/BlockUnblockCard"
import AuthorizationList from "./pages/dashboard/menu/AuthorizationList"
import AuthorizationQueue from "./pages/dashboard/menu/AuthorizationQueue"
import Trail from "./pages/dashboard/menu/Trails"
import Account from "./pages/dashboard/menu/Account"
import Login from "./pages/auth/Login"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <div className="flex h-screen bg-gray-50">
              <Sidebar />
              <div className="flex-1 overflow-auto">
                <Routes>
                  <Route path="/" element={<Navigate to="/dashboard" replace />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/branches" element={<Branches />} />
                  <Route path="/roles" element={<Roles />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/card-schemes" element={<CardSchemes />} />
                  <Route path="/card-profile" element={<CardProfile />} />
                  <Route path="/card-request" element={<CardRequest />} />
                  <Route path="/stock" element={<Stock />} />
                  <Route path="/cards" element={<Cards />} />
                  <Route path="/block-unblock-card" element={<BlockUnblockCard />} />
                  <Route path="/authorization-list" element={<AuthorizationList />} />
                  <Route path="/authorization-queue" element={<AuthorizationQueue />} />
                  <Route path="/trail" element={<Trail />} />
                  <Route path="/account" element={<Account />} />
                  <Route path="/logout" element={<Navigate to="/login" replace />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
