import React from "react"
import Layout from "../components/Layout"
import { ExampleButton } from "../examples/button"
import styled from "styled-components"

export default function Home() {
  return (
    <>
      <Layout>
        <ExampleButton>click me</ExampleButton>
        <h2>home page</h2>
      </Layout>
    </>
  )
}
