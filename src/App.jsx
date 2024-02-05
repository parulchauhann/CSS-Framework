import React from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'

function App() {
  return (
    <>
      <Navbar />
      <div className='lower w-10/12 m-auto'>
        <button className='bg-blue-500 py-2 px-5 w-22 my-7 font-bold text-lg text-white font-normal rounded-md border-white border-2 cursor-pointer'>Button One</button>
        <div className='bg-red-200 p-3.5 rounded border-red-400 border cursor-pointer'><span className='font-bold text-lg text-red-600'>Alert!</span> <span className='text-lg text-red-600'>This is awesome!</span></div>
      </div>
      <Card />
      <footer className='bg-gray-300 text-center p-3 text-xm fixed bottom-0 w-screen'>
      ©2021 Copyright:<span className='font-semibold'>Kalvium</span>
      </footer>
    </>
  )
}

export default App