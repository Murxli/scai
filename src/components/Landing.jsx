"use client"
import React from 'react'
import Image from "next/image"
import hero from "./../assets/images/hero.png"
import Button from './ui/Button'
import { signIn } from 'next-auth/react'

const Landing = () => {
  return (
    <div className='w-full  '>
        <section className='flex gap-20 w-full justify-center items-center'>
            <div className='py-10'>
                <div>
                  <p className='text-gray-800 text-xl uppercase pt-4'>career guidance platform</p>
                  <h1 className='text-6xl py-6'>Find yourself <br />in a vast <br />universe</h1>
                  <h3 className='w-9/12 '>SCAI helps you to choose your dream profession and to make first steps towards mastering it.</h3>
                </div>
                <div className='py-4 gap-4 flex text-white'>
                  <Button onClick={()=>{console.log("")}}>Try Now</Button>
                  <Button onClick={()=>{console.log("")}}>See How It Works</Button>
                </div>
            </div>
            <Image src={hero.src} width={100} height={100} alt='fill' className='w-60 h-60'/>       
        </section>
        <section className='w-full py-20'>
          <div className='py-10'>
            <h2 className='text-center text-5xl'>Who is it for ?</h2>
            <div className='w-60 h-1 mt-3 bg-violet-600 flex items-center m-auto'></div>
          </div>
          <div className='flex gap-10 w-9/12 item-center m-auto'>
            <Image src={hero.src} width={100} height={100} alt='fill' className='w-60 h-60'/>
            <div className='w-11/12 px-16'>
              <p className='pb-4'> New professions appear every day, the demand for specialists changes every minute. It's pretty easy to get lost choosing your own way in this life, especially if you do not understand what you really want and what will be trendy in a few years. We can help you out. </p>
              <p>SCAI is uniquely crafted for high school students to unleash their real talent in this competitive world. This helps them to excel in their field of talent.</p>
            </div>
          </div>
        </section>

        <section className='w-full py-20'>
          <div className='w-5/6 m-auto bg-white rounded-md shadow-md py-16'>
            <div className='flex gap-20 items-center justify-center'>
              <div>
                <h2 className='text-5xl py-6'>Introducing <br /> good solution</h2>
                <p className='pb-4'>Join our community and unleash your real talent today!</p>
                <Button className={"text-white"} onClick={() => {signIn()}}>Sign up now</Button>
              </div>
              <Image src={hero.src} width={100} height={100} alt='fill' className='w-60 h-60'/>
            </div>
          </div>

        </section>
    </div>
  )
}

export default Landing