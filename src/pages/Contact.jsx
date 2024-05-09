import React, { useState } from 'react'
import Nav from '../components/Nav'
import Form from '../components/Form'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import ScrollToTop from '../ScrollToTop'

const Contact = () => {

  const [hidden, setHidden] = useState(true)
  ScrollToTop()
  return (
    <>
      <Nav className="scroll" no='no'/>
      <Form no='no' title='Kontakta oss' buttonText='Kontakta oss' hidden={hidden}/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default Contact
