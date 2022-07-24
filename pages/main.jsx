import React from "react"
import Image from "next/image"

export default function main() {
    return (
        <div id="main" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <Image
                        src="/../public/images/emily-herndon.png"
                        alt="me wearing sunglasses with the picturesque columbia river gorge behind me"
                        width={200}
                        height={200}
                    />
                    <h1>Hi, I`m <span className="text-[#415A77]">Emily</span></h1>
                    <h2>I`m a Software Engineer</h2>
                    <p className="py-4 m-auto max-w-[70%]">I have an intellectual curiosity, love for learning, and the ability to work both independently and collaboratively. I am passionate about developing accessible products to better people`s lives and enjoy solving complex puzzles. I believe software engineering is a conduit to create a positive and meaningful impact.  I strive to make products with accessible, unique interfaces and adaptability for the ever-changing future.</p>
                </div>
            </div>
        </div>
    )
}
