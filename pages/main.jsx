import React from "react"
import Image from "next/image"

export default function Main() {
    const labels = [" Gamer", "n Animal Lover", "n Avid Reader", " Sci-Fi Nerd", " Software Engineer"]
    // step 1: implement flipping animation
    // step 2: iterate through labels array
    // step 3: after iteration is finished, transition from flip card imagery to solid phrase that blends with rest of app
    return (
        <div id="main" className="w-full h-screen text-center mt-40">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div className="flex flex-col items-center md:flex-row">
                    <div>
                        <Image
                            src="/images/emily-herndon.png"
                            alt="a female presenting person with glasses and a beanie, in a tunnel of multi-colored lights, smiling at the camera"
                            width={250}
                            height={250}
                        // className="border-8 border-slate-800"
                        />
                    </div>
                    <div className="w-3/4">
                        <h1 className="text-white mb-1">{"I'm Emily Herndon"}</h1>
                        <h2 className="text-white" >{"I'm a"}<span className="text-white" id="flip"> Software Engineer</span></h2>
                        <p className="py-4 m-auto max-w-[70%] text-xl text-white">I have an intellectual curiosity, love for learning, and the ability to work both independently and collaboratively. I am passionate about developing accessible products to better {`people's`} lives and enjoy solving complex puzzles. I believe software engineering is a conduit to create a positive and meaningful impact. I strive to make products with accessible, unique interfaces and adaptability for the ever-changing future.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}