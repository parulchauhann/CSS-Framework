import React from 'react'

function Card() {
    return (
        <>
            <div className='flex justify-center items-center w-96 shadow-lg h-30 my-8 p-3 m-auto cursor-pointer'>
                <div>
                    <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="logo" className='w-36' />
                </div>
                <div className='m-4'>
                    <p className='font-medium text-lg'>Kalvium Store</p>
                    <p className='text-gray-600'>You have a new course!</p>
                </div>
            </div>
        </>
    )
}

export default Card