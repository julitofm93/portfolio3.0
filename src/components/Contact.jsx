import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import Map from './Map'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`

const Left = styled.div`
  flex: 1;
`

const Title = styled.h1`
  font-weight: 200;
`

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const Input = styled.input`
  padding: 20px;
  color: #e8e6e6;
  border: none;
  border-radius: 5px;
  color: black;
`

const TextArea = styled.textarea`
  padding: 20px;
  color: #e8e6e6;
  border: none;
  border-radius: 5px;
  color: black;
`

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const Contact = () => {

  const ref = useRef()

  const [success, setSuccess] = useState(null)
  
  const handleSubmit = e => {
    e.preventDefault()
  
    emailjs.sendForm('service_0shdl0r', 'template_se6gbr9', ref.current, 'N8tauOpLWRarx7lW8')
        .then((result) => {
            console.log(result.text);
            setSuccess(true)
        }, (error) => {
            console.log(error.text);
            setSuccess(false)
        });
  }

  return (
    <Section>
      <Container>
        <Left>
          <Map/>
        </Left>
        <Right>
        <Form ref={ref} onSubmit={handleSubmit}>
            <Title></Title>
            <Input placeholder='Name' name="name"/>
            <Input placeholder='Email' name="email"/>
            <TextArea placeholder='Write your message' name="message" rows={10}/>
            <Button type="submit">Send</Button>
            {success && 
            "Your message has been sent."}
          </Form>
        </Right>
      </Container>
    </Section>
  )
}

export default Contact