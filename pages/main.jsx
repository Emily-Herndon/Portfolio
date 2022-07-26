import React from "react"
import Image from "next/image"

export default function Main() {
    return (
        <div id="main-nav" className="w-full h-screen text-center mt-20 ">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <Image
                        src="/images/emily-herndon.png"
                        alt="me wearing sunglasses with the picturesque columbia river gorge behind me"
                        width={200}
                        height={200}
                    />
                    <h1>{`Hi, I'm`} <span className="text-cyan-300">Emily</span></h1>
                    <h2>{`I'm`} a Software Engineer</h2>
                    <p className="py-4 m-auto max-w-[70%] text-black">I have an intellectual curiosity, love for learning, and the ability to work both independently and collaboratively. I am passionate about developing accessible products to better {`people's`} lives and enjoy solving complex puzzles. I believe software engineering is a conduit to create a positive and meaningful impact. I strive to make products with accessible, unique interfaces and adaptability for the ever-changing future.</p>
                </div>
            </div>
        </div>
    )
}
