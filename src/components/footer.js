import React from "react"
import styled from 'styled-components'

const FooterGroup = styled.div`
      background : #F1F3F5;
      width:100%;
      padding : 50px 0;
      display:grid;
      grid-gap:20px;

`
const Text = styled.p`
      font-size:24px;
      font-weight :600;
      color:#486791;
      max-width:600px;
      margin:0 auto;
      text-align:center;

      @media(max-width:480px){
         font-size:18px;
         max-width:300px;
      }
`
const Button = styled.button`
     background: linear-gradient(93.96deg, #9B51E0 0%, #3436E7 100%);
     box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
     border-radius: 30px;
     color:white;
     border:none;
     padding:16px 60px;
     font-weight:600;
     font-size:24px;
     justify-self:center;
     transition:0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

     &:hover{
       box-shadow:0 20px 40px rgba(0,0,0,0.15);
       transform:translateY(-3px);
     }

`
const LinkGroup = styled.a`
    width:500px;
    margin:50px auto;
    text-align:center;
    display:grid;
    grid-template-columns:repeat(2,1fr);
    grid-gap:10px;


    a{
      transition :0.8s;
    }

    a:hover{
      color:black;
    }

      @media(max-width:480px){
         font-size:18px;
         max-width:300px;
         grid-template-columns:repeat(1,1fr);
      }
   
`
const Copyright = styled.div`
    max-width:600px;
    margin:0 auto;
    color:#486791;
    padding:0 20px;
    text-align:center;

     @media(max-width:480px){
         font-size:18px;
      }
`

const Footer = ({ data, children }) => (
  <FooterGroup>
    <Text>Tweet “Prototype and build apps with React and Swift. New courses by @MengTo”</Text>
    <Button>Tweet</Button>
    <LinkGroup>
        {data.allContentfulLink.edges.map(edge => (
          <a href={edge.node.url}>{edge.node.title}</a>
        ))}
    </LinkGroup>
    <Copyright> {children}</Copyright>
  </FooterGroup>

)

export default Footer