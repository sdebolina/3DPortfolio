import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons';

const InfoBox=({text, link, btnText})=>(
    <div className='info-box'>
        <p className='font-medium sm:text-l text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)
const renderContent = {
    1:(
        <h1 className='sm:text-l sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hello, I am <span className='font-semibold'> Debolina </span><br/>
        A passionate tech student from West Bengal, India.</h1>
    ),
    2:(
        <InfoBox
        text='I am currently in my 4rth year of college. I have a strong interest in web development, AI/ML and creative projects.'
        link='/about'
        btnText='Learn more'/>
    ),
    3:(
        <InfoBox
        text='I am a fresher student with no formal work experience in companies, but I have worked on several projects.'
        link='/about'
        btnText='Visit my portfolio'/>
    ),
    4:(
        <InfoBox
        text='Need a project done or looking for a dev?'
        link='/about'
        btnText='Contact me'/>
    )
}


const HomeInfo = ({ currentStage }) => {
    console.log('Current stage:', currentStage); // For debugging
    return renderContent[currentStage] || null;
  };
  

export default HomeInfo
