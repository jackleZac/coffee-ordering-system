import React from 'react';
import cafeDesign5  from '../assets/cafeDesign5.jpg';

function Contact() {
  return (
    <div className='grid grid-cols-2 max-lg:grid-cols-1 bg-[#f5f5ef]'>
      <div className='relative h-screen' >
        <img src={cafeDesign5} className='absolute z-10 w-full h-full'/>
        <div className='absolute top-36 z-20 w-full'>
        <form className='relative px-6 py-6 w-fit mx-auto text-base text-white bg-[#545454] opacity-90'>
          <div className='flex flex-row  max-sm:flex-col my-2 sm:space-x-2'>
            <div className=''>
              <label htmlFor="fname">FIRST NAME</label><br />
              <input type="text" id='fname' className='px-2 text-black'/>
            </div>
            <div className=''>
              <label htmlFor="lname">LAST NAME</label><br />
              <input type="text" id='lname' className='px-2 text-black'/>
            </div>
          </div>
          <div className='flex flex-row max-sm:flex-col my-2 sm:space-x-2'>
            <div className=''>
              <label htmlFor="phone">PHONE</label><br />
              <input type="text" id='phone' className='px-2 text-black' />
            </div>
            <div className=''>
              <label htmlFor="email">EMAIL</label><br />
              <input type="email" id='email' className='px-2 text-black'/>
            </div>
          </div>
          <div>
            <label htmlFor="inquiry">INQUIRY</label><br />
            <textarea id='inquiry' className='w-full px-2 text-black'></textarea>
          </div>
          <button className='p-2 my-6 bg-[#373333]'>SUBMIT</button>
          <p>Leave Your Message Here <br />We'll Get In Touch With You Shortly</p>
        </form>
        </div>
      </div>
      <div className='text-black'>
        <div className='mx-auto w-fit flex flex-col space-y-6'>
          <h1 className='mt-48 text-2xl font-bold'>SEE YOU SOON</h1>
          <div>
            <h2>PHONE NUMBER</h2>
            <p>(60) 18KLP00YL</p>
          </div>
          <div>
            <h2>EMAIL ADDRESS</h2>
            <p>hello@artisanbrews.com</p>
          </div>
          <div>
            <h2>LOCATION</h2>
            <p>Gala City Commercial Centre, <br />Jalan Datuk Tawi Sli 3rd Exchange <br />Commercial Centre, 93250 Kuching, Sarawak</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact