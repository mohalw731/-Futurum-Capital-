import React, { useState } from 'react'
import Nav from '../components/Nav'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Form from '../components/Form'
import ScrollToTop from '../ScrollToTop'

function Jobs() {
    const [hidden, setHidden] = useState(true)

    ScrollToTop()
    return (
        <>
            <Nav className="scroll" no='no' />
            <Form title='Karriär i Futurum Capital' buttonText='Ansök' template='template_64zqn0c'/>
            <Testimonials hidden={hidden} />
            <Footer />
        </>
    )
}

export default Jobs
