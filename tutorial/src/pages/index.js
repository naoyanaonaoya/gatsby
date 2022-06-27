import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <div>Hello world!</div>
      <div>
        <Link to="/about">about</Link>
      </div>
      <div>
        <Link to="/company">company</Link>
      </div>
      <div>
        <Link to="/company/history">history</Link>
      </div>
    </>
  )
}
