import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import SectionRight from '../components/SectionRight'
import './App.css'

export default function App() {
  return (
    <>
      <Sidebar />
      <Main />
      <SectionRight />
    </>
  )
}
