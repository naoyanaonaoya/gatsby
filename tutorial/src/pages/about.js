import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const about = () => {
  return (
    <>
      <Layout>
        <Wrapper>
          <h1>about page</h1>
          <h1>hello world</h1>
          <p className="text">asdgf aljkdl;tja agjasty adfd</p>
        </Wrapper>
        <h2>about page</h2>
      </Layout>
    </>
  )
}

const Wrapper = styled.section`
  color: red;
  h1 {
    color: yellowgreen;
  }
  .text {
    text-transform: uppercase;
  }
`

export default about
