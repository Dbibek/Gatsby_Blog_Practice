import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from '../components/head'

function About() {
  return (
    <Layout>
      <Head title='About'/>
      <h1>About</h1>
      <p>this is about</p>
      <p>
        contact information: <Link to="/contact">click me</Link>
      </p>
    </Layout>
  )
}

export default About
