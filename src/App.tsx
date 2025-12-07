import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Search from './pages/Search'
import TripDetails from './pages/TripDetails'
import TripBuilder from './pages/TripBuilder'

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>TravelOrchestrator</h1>
      <nav style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <Link to="/">Dashboard</Link>
        <Link to="/search">Search</Link>
        <Link to="/trip-details">Trip Details</Link>
        <Link to="/builder">Trip Builder</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/trip-details" element={<TripDetails />} />
        <Route path="/builder" element={<TripBuilder />} />
      </Routes>
    </div>
  )
}