import React from 'react'
import styled from 'styled-components'
import Wave from './wave'

const SectionGroup = styled.div` 
   background :url(${props => props.image});
   background-size : cover;
   height: 720px; 
   display :grid;
   grid-template-rows:300px auto;
   grid-gap:20px;
   position : relative;

 

`

const SectionLogo = styled.img`
   align-self : end;
   width:128px;
   margin:0 auto;

`

const SectionTitleGroup = styled.div`
   display:grid;
   grid-template-columns : 1fr 1fr;
   margin:0 40px;
   grid-gap: 20px;
   grid-template-rows: auto 100%;

   @media (max-width :720px){
     grid-template-columns:1fr;
   }

`

const SectionTitle = styled.h3`
   color : white;
   font-size : 60px;
   margin-top : 0;
   margin-left:auto;
   line-height : 1.2;
   width:70%;

   @media (max-width:720px){
     font-size :40px;
     width:100%;
     margin:0;
     text-align:center;
   }
`

const SectionText = styled.p`
   color : white;
   width:70%;
   
    @media (max-width:720px){
     width:100%;
     text-align:center;
   }


`

const WaveBottom = styled.div`
   position:absolute;
   width:100%;
   bottom:-6px;
`
const WaveTop = styled.div`
   position : absolute;
   width:100%;
   top:-5px;
   transform: rotate(180deg);
`

const Section = props => (
  <SectionGroup image={props.image}>
    <WaveTop> <Wave /> </WaveTop>
    <WaveBottom> <Wave /> </WaveBottom>
    <SectionLogo src={props.logo} alt="Logo" />
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
  </SectionGroup>

)

export default Section