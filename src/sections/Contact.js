import React from 'react'
import styled from 'styled-components'
import breakpoints from 'app/utils/breakpoints'

import Section from '../components/Section'

const ContactSection = styled.div`
  display: flex;
  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Contact = () => {
  return (
    <Section name="contact">
      <ContactSection>
        <ContactInfo>
          <h3>Contact Info</h3>
          <p><a href="mailto: mweitzenhoffer@gmail.com">mweitzenhoffer@gmail.com</a></p>
          <p><a href="tel:330-612-4661">330.612.4661</a></p>
          <p>Brooklyn, NY 11216</p>
        </ContactInfo>
        <ContactForm>
          <h3>Contact Form</h3>
          <p>Enter Name</p>
          <p>Enter Email</p>
          <p>Enter Phone</p>
          <p>Enter Subject</p>
          <p>Enter Message</p>
          <button>Submit</button>
        </ContactForm>
      </ContactSection>
    </Section>
  )
}

export default Contact
