import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';


const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-x1 sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>nonJohan</span> 😤
            <br />
            A Software Engineer from Indonesia.
        </h1>
    ),
    2: (
        <InfoBox 
            text='Has experience working at various companies and has picked up many skills.'
            link='/about'
            btnText='Learn More'
        />
    ),
    3: (
        <InfoBox 
            text='Led multiple projects to success over the years. curious about the impact?'
            link='/projects'
            btnText='Visit my Portofolio'
        />
    ),
    4: (
        <InfoBox 
            text="Need a project done or looking for a dev? I'm just a few keystroke away"
            link='/contact'
            btnText="Let's talk"
        />
    ),
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo