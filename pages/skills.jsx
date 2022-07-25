import Image from 'next/image'
import React from 'react'

export default function Skills() {
    return (
        <div id="skills" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <h1>My Skills</h1>
                    <div>
                        <Image
                            src='/images/skills/html.png'
                            alt='html5'
                            width={50}
                            height={50}
                        />
                        <Image
                            src='/images/skills/css.png'
                            alt='css'
                            width={50}
                            height={50}
                        />
                        <Image
                            src='/images/skills/javascript.png'
                            alt='javascript'
                            width={50}
                            height={50}
                        />
                        <Image
                            src='/images/skills/python.png'
                            alt='python'
                            width={50}
                            height={50}
                        />
                        <Image
                            src='/images/skills/react.png'
                            alt='react'
                            width={50}
                            height={50}
                        />
                        <Image
                            src='/images/skills/node-js.png'
                            alt='node.js'
                            width={50}
                            height={50}
                        />
                        <Image
                            src='/images/skills/next-js.png'
                            alt='next.js'
                            width={50}
                            height={50}
                        />
                        <Image
                            src='/images/skills/mongoDB.png'
                            alt='mongoDB'
                            width={50}
                            height={50}
                        />
                        <Image
                            src='/images/skills/postgreSQL.png'
                            alt='postgreSQL'
                            width={50}
                            height={50}
                        />
                        <Image
                            src='/images/skills/bootstrap.png'
                            alt='bootstrap'
                            width={50}
                            height={50}
                        />
                        <Image
                            src='/images/skills/tailwind.png'
                            alt='tailwind'
                            width={50}
                            height={50}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
