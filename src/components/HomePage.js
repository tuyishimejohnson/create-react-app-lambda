import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbTack, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';

const HomePage = () => {
    const headerRef = useRef(null);
    useEffect(() => {
        if(headerRef.current) {
            headerRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [])
          
  return (
    <>
            <div ref={headerRef} style={{paddingTop: "8em"}}>

                <div className='lg:flex lg:px-32 gap-3 sm:px-10'>
                    <img src={require('./images/firstImg.jpg')} alt="" className='lg:w-1/2 lg:rounded-tl-3xl sm:w-full sm:rounded-none sm:relative sm:brightness-50 lg:brightness-100'/> 
                    <div className='lg:w-1/2 lg:flex lg:items-center lg:relative'>
                        <p className='sm:text-center sm:font-extrabold sm:text-5xl sm:absolute sm:text-white lg:text-black sm:w-2/3 sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:m-auto lg:w-full'>Enhance your <span className='text-blue-600'>digital skills</span> through social media and websites to increase productivity.
                        </p>
                    </div>
                    
                </div>
                    <div className='lg:flex lg:px-32 lg:gap-4 lg:mt-16 sm:px-10 sm:py-10 sm:bg-blue-800 sm:text-white sm:space-y-4 lg:text-black lg:bg-transparent'>
                        <div className='rounded-md shadow-lg shadow-gray-400'>
                            < FontAwesomeIcon icon={faThumbTack} className='p-4'/>
                            <p className='text-center px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus non quisquam harum corrupti velit, tempora repellendus alias nihil dolore repellat eveniet autem inventore. Molestiae aliquam commodi doloribus voluptate fuga?</p>
                            <button className='py-4 hover:text-gray-500 hover:translate-x-1'><FontAwesomeIcon icon={faLongArrowAltRight}className='px-4'/>Learn more </button>
                        </div>
                        <div className='rounded-md shadow-lg shadow-gray-400'>
                            < FontAwesomeIcon icon={faThumbTack} className='p-4'/>
                            <p className='text-center px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus non quisquam harum corrupti velit, tempora repellendus alias nihil dolore repellat eveniet autem inventore. Molestiae aliquam commodi doloribus voluptate fuga?</p>
                            <button className='py-4 hover:text-gray-500 hover:translate-x-1'><FontAwesomeIcon icon={faLongArrowAltRight} className='px-4'/>Learn more </button>
                        </div>
                        <div className='rounded-md shadow-lg shadow-gray-400'>
                            < FontAwesomeIcon icon={faThumbTack} className='p-4'/>
                            <p className='text-center px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus non quisquam harum corrupti velit, tempora repellendus alias nihil dolore repellat eveniet autem inventore. Molestiae aliquam commodi doloribus voluptate fuga?</p>
                            <button className='py-4 hover:text-gray-500 hover:translate-x-1'><FontAwesomeIcon icon={faLongArrowAltRight} className='px-4'/>Learn more </button>
                        </div>
                    </div>

                    <div className='lg:block lg:px-32 sm:px-10 mt-16 gap-5 sm:relative'>

                        <div className=''>

                        
                        <div className='flex flex-col lg:w-1/2 lg:block rounded-md px-4 py-5 sm:bg-gray-300  space-y-4 sm:absolute sm:z-10 sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-3/4'>
                            <h1 className='text-3xl font-bold'>Objectives</h1>
                            <h3 className='text-xl font-semibold'>Digital Literacy Education</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo reiciendis, consequatur ex facilis odio nihil totam nam dolore ad quis magnam harum deserunt fuga, fugit voluptatem dolores laboriosam ut voluptate.</p>

                            <h3 className='text-xl font-semibold'>Positive Use of Technology</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo reiciendis, consequatur ex facilis odio nihil totam nam dolore ad quis magnam harum deserunt fuga, fugit voluptatem dolores laboriosam ut voluptate.</p>

                            <h3 className='text-xl font-semibold'>Career Guidance Opportunities</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo reiciendis, consequatur ex facilis odio nihil totam nam dolore ad quis magnam harum deserunt fuga, fugit voluptatem dolores laboriosam ut voluptate.</p>

                        </div>

                        </div>

                        <div className=''>

                       
                            <div className='lg:relative lg:flex lg:items-center'>
                                <div className=''>
                                    <img src={require('./images/socialMedia.7101420c493034938955.jpg')} alt="" className='w-full brightness-50'/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
            </div>
    </>
  )
}

export default HomePage
