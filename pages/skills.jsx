import Image from 'next/image'
import React from 'react'

export default function Skills() {
    return (
        <div id='skills' className="w-auto lg:h-screen py-4 justify-center items-center mx-auto ">
            <div className='max-w-[1240px] h-auto mt-40 px-2 py-4 mx-auto'>
                <div id="skills-section" className="p-12 rounded-xl mx-auto flex flex-col justify-center items-center shadow-xl shadow-black">
                    <p className="tracking-widest text-gray-700 text-xs">What I Know</p>
                    <h1>My Skills</h1>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6'>
                        <div className='skills p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div>
                                <div className='flex items-center justify-center'>
                                    <Image
                                        src='/images/skills/html.png'
                                        alt='html5'
                                        width={50}
                                        height={50}
                                        className="mx-auto justify-self-center"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='skills p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div>
                                <div className='m-auto flex items-center justify-center'>
                                    <Image
                                        src='/images/skills/css.png'
                                        alt='css3'
                                        width={65}
                                        height={65}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='skills p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div>
                                <div className='m-auto flex items-center justify-center'>
                                    <Image
                                        src='/images/skills/javascript.png'
                                        alt='javascript'
                                        width={65}
                                        height={65}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='skills p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div>
                                <div className='m-auto flex items-center justify-center'>
                                    <Image
                                        src='/images/skills/react.png'
                                        alt='react'
                                        width={75}
                                        height={75}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='skills p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div>
                                <div className='m-auto flex items-center justify-center pt-2'>
                                    <Image
                                        src='/images/skills/python.png'
                                        alt='python'
                                        width={150}
                                        height={50}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='skills p-1 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div>
                                <div className='m-auto flex items-center justify-center'>
                                    <Image
                                        src='/images/skills/node-js.png'
                                        alt='node.js'
                                        width={100}
                                        height={100}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='skills p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div>
                                <div className='m-auto flex items-center justify-center'>
                                    <Image
                                        src='/images/skills/next-js.png'
                                        alt='next.js'
                                        width={80}
                                        height={50}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='skills p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div>
                                <div className='m-auto flex items-center justify-center'>
                                    <Image
                                        src='/images/skills/mongoDB.png'
                                        alt='mongoDB'
                                        width={75}
                                        height={75}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='skills p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div>
                                <div className='m-auto flex items-center justify-center'>
                                    <Image
                                        src='/images/skills/postgreSQL.png'
                                        alt='postgreSQL'
                                        width={75}
                                        height={75}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='skills p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div>
                                <div className='m-auto flex items-center justify-center'>
                                    <Image
                                        src='/images/skills/bootstrap.png'
                                        alt='bootstrap'
                                        width={195}
                                        height={75}
                                        className="my-auto items-center"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='skills p-5 flex shadow-xl rounded-xl hover:scale-105 ease-in duration-300 items-center justify-center'>
                            <div className='m-auto py-4'>
                                <div className='m-auto flex items-center justify-center'>
                                    <Image
                                        src='/images/skills/tailwind.png'
                                        alt='tailwind'
                                        width={450}
                                        height={60}
                                        className=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='skills p-5 flex shadow-xl rounded-xl hover:scale-105 ease-in duration-300 items-center justify-center'>
                            <div className='m-auto py-4'>
                                <div className='m-auto flex items-center justify-center'>
                                    <Image
                                        src='/images/skills/jQuery.png'
                                        alt='jQuery'
                                        width={450}
                                        height={60}
                                        className=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}