import Image from 'next/image'
import React from 'react'

export default function Skills() {
    return (
        <div id='skills-nav' className="w-auto lg:h-screen py-4 justify-center items-center mx-auto">
            <div className='max-w-[1240px] h-auto px-2 py-4'>
                <div id="skills" className="p-12 rounded-xl mx-auto flex flex-col justify-center items-center shadow-xl shadow-black">
                    <p className="tracking-widest text-gray-900 text-xs">What I Know</p>
                    <h1>My Skills</h1>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image
                                        src='/images/skills/html.png'
                                        alt='html5'
                                        width={50}
                                        height={50}
                                        className="place-self-center"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image
                                        src='/images/skills/css.png'
                                        alt='css3'
                                        width={65}
                                        height={65}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image
                                        src='/images/skills/javascript.png'
                                        alt='javascript'
                                        width={65}
                                        height={65}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='p-7 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image
                                        src='/images/skills/python.png'
                                        alt='python'
                                        width={150}
                                        height={50}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image
                                        src='/images/skills/react.png'
                                        alt='react'
                                        width={75}
                                        height={75}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='p-3 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image
                                        src='/images/skills/node-js.png'
                                        alt='node.js'
                                        width={90}
                                        height={90}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='p-7 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image
                                        src='/images/skills/next-js.png'
                                        alt='next.js'
                                        width={80}
                                        height={50}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image
                                        src='/images/skills/mongoDB.png'
                                        alt='mongoDB'
                                        width={75}
                                        height={75}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image
                                        src='/images/skills/postgreSQL.png'
                                        alt='postgreSQL'
                                        width={75}
                                        height={75}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='p-7 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image
                                        src='/images/skills/bootstrap.png'
                                        alt='bootstrap'
                                        width={195}
                                        height={75}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='p-8 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    <Image
                                        src='/images/skills/tailwind.png'
                                        alt='tailwind'
                                        width={1250}
                                        height={350}
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