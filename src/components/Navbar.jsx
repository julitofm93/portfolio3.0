import React from 'react'
import styled from 'styled-components'
import Who from './Who'

const Section = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;

    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 10px;
    }
`

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;

`

const Logo = styled.img`
    height: 80px;
`

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
    font-size: 24px;
    color: white;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`
const ListItem = styled.li`
    cursor: pointer;
`

const Link = styled.a`
    text-decoration: none;
    color: white;
    :visited{
        color: white;
    }
`

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`
const Button = styled.button`
    width: 120px;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
    font-size: 20px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
`

const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
                <Logo src="./img/logo.png"/>
                <List>
                    <ListItem><Link href="/">Home</Link></ListItem>
                    <ListItem><Link href="#Who">About</Link></ListItem>
                    <ListItem><Link href="#Projects">Projects</Link></ListItem>
                    <ListItem><Link href="#Contact">Contact</Link></ListItem>
                </List>
            </Links>
            <Icons>
                <Button><Link href="#Contact">Hire Now</Link></Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar