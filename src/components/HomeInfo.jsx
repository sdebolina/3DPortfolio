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
        A tech student from India, West Bengal.</h1>
    ),
    2:(
        <InfoBox
        text='Currently in my 4rth year and accquiring software development skills'
        link='/about'
        btnText='Learn more'/>
    ),
    3:(
        <InfoBox
        text='Currently in my 4rth year and accquiring software development skills'
        link='/projects'
        btnText='Visit my portfolio'/>
    ),
    4:(
        <InfoBox
        text='Currently in my 4rth year and accquiring software development skills'
        link='/about'
        btnText='Contact me'/>
    )
}


const HomeInfo = ({ currentStage }) => {
    console.log('Current stage:', currentStage); // For debugging
    return renderContent[currentStage] || null;
  };
  

export default HomeInfo
