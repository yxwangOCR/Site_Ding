import React from 'react';
import HeroImg from "../assets/Anya.jpg"

const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center md:flex-row'>
            <div className='w-[50%] flex flex-col justify-center items-center'>
                <strong>Slogan</strong>
                <p className=''>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className='w-[50%]'>
                <img src={HeroImg} alt="" className='h-[40rem]' />
            </div>
        </div>
    )
}

export default Hero