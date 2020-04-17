import React from "react"
import Layout from "../components/layout"
import Head from '../components/head'
import Form from './form'

function Contact() {
  return (
    <Layout>
      <Head title='Contact'/>
      <h1>Contact</h1>
      <p> email:user@example.com</p>
      <p>
        Link to my linkedin{" "}
        <a
          href="https://www.linkedin.com/in/bibek-dhakal-b629b485/"
          target="blank"
        >
          click here
        </a>
      </p>
      <Form/>
    </Layout>
  )
}

export default Contact
