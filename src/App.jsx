import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import './App.css'

export default function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Header />
      </main>
    </>
  )
}
