import React, { useState } from 'react'
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
  align-items: flex-start;
  flex: 2;
  & h3 {
    font-size: 36px;
    margin-bottom: 16px;
  }
  @media (max-width: ${breakpoints.sm}) {
    align-items: center;
    & {
      margin-bottom: 24px;
    }
    & * {
      margin: 8px 0;
    }
  }
`

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 3;
  @media (max-width: ${breakpoints.sm}) {
    flex: 2;
  }
`

const ContactFormLine = styled.div`
  display: flex;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
  }
`

const ContactFormInputBase = styled.input`
  height: 36px;
  flex-grow: 1;
  &:first-child {
    margin-right: 8px;
  }
  @media (max-width: ${breakpoints.sm}) {
    font-size: 16px;
    &:first-child {
      margin-right: 0;
      margin-bottom: 8px;
    }
  }
`

const ContactFormMessage = styled.textarea`
  flex-grow: 1;
  resize: none;
  padding: 8px 4px;
  @media (max-width: ${breakpoints.sm}) {
    font-size: 16px;
    margin-bottom: 16px;
  }
`

const ContactFormInput = ({ name, placeholder, type, state, setState, ...rest }) => {
  return (
    <ContactFormInputBase
      type={ !!type ? type : "text"}
      name={name}
      placeholder={placeholder}
      value={state}
      onChange={(e) => setState(e.target.value)}
      required={true}
      {...rest}
      />
  )
}

const ContactFormSubmitButton = styled.button`
  height: 36px;
  background: #333;
  border: 1px solid #333;
  color: #fff;
  width: 100%;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: ${breakpoints.sm}) {
    height: 72px;
  }
`

const Contact = () => {
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ phone, setPhone ] = useState("")
  const [ subject, setSubject ] = useState("")
  const [ message, setMessage ] = useState("")

  return (
    <Section name="contact">
      <ContactSection>
        <ContactInfo>
          <h3>Contact Me</h3>
          <p>Brooklyn, NY 11216</p>
          <p><a href="mailto: mweitzenhoffer@gmail.com">mweitzenhoffer@gmail.com</a></p>
          <p><a href="tel:330-612-4661">330.612.4661</a></p>
        </ContactInfo>
        <ContactForm>
          <ContactFormLine>
            <ContactFormInput name="name" placeholder="Enter name" state={name} setState={setName} autoComplete="off" />
            <ContactFormInput name="email" type="email" placeholder="Enter email" state={email} setState={setEmail} />
          </ContactFormLine>
          <ContactFormLine>
            <ContactFormInput name="phone" placeholder="Enter phone" type="tel" pattern="[0-9]{3}-?[0-9]{3}-?[0-9]{4}" state={phone} setState={setPhone} />
            <ContactFormInput name="subject" placeholder="Enter subject" state={subject} setState={setSubject} autoComplete="off" />
          </ContactFormLine>
          <ContactFormLine>
            <ContactFormMessage
              name="message"
              placeholder="Enter your message..."
              rows={4}
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            />
          </ContactFormLine>
          <ContactFormLine>
            <ContactFormSubmitButton>
              Submit
            </ContactFormSubmitButton>
          </ContactFormLine>
        </ContactForm>
      </ContactSection>
    </Section>
  )
}

export default Contact
