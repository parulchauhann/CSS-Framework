import React from 'react'

function Navbar() {
    return (
        <div className='w-screen h-30 p-8 bg-red-400 flex justify-between items-center font-semibold'>

            <div className='flex justify-between items-center font-bold'>
                <div className='text-white text-3xl cursor-pointer'>Kalvium</div>
                <div className='mx-6 flex justify-between text-gray-200 text-lg'>
                    <div className='mx-2 cursor-pointer'>About Us</div>
                    <div className='mx-2 cursor-pointer'>Contacts</div>
                    <div className='mx-2 cursor-pointer'>Courses</div>
                </div>
            </div>
            <div>
                <button className='py-2 px-5 w-22 text-normal text-white font-normal rounded-md border-white bg-transparent border-2 cursor-pointer'>Login</button>
            </div>

        </div>
    )
}

export default Navbar