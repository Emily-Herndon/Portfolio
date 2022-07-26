import Image from "next/image"
import catScraps from "/public/images/projects/cat-scraps.png"
import bibliofiles from "/public/images/projects/the-bibliofiles.png"
import bugOut from "/public/images/projects/bugout.png"
import ensemble from "/public/images/projects/ensemble.png"

export default function Projects() {
    return (
        <div id="projects-nav" className="w-full ">
            <div className="max-w-[1240px]  mx-auto px-2 py-16 ">
                <div id="projects" className="text-center rounded-xl px-2 py-4 lg:p-8 justify-center items-center shadow-xl shadow-black">
                    <p className="tracking-widest text-gray-900 text-xs">Things I&apos;ve Built</p>
                    <h1>Main Projects</h1>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-black rounded-xl px-2 py-4 lg:p-2 group hover:bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                            <Image
                                src={catScraps}
                                alt="A screenshot of the starting page for the cat scraps game"
                                className="rounded-xl group-hover:opacity-5"
                            />
                            <div className="hidden group-hover:block absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-xs lg:text-base">
                                <h2>Cat Scraps</h2>
                                <h3 className="py-1 m-auto">Play as a cat living in a home with some messy humans. Catch the food scraps as they drop, just be sure to avoid the tummy-ache inducing cheese!</h3>
                                <p>Built with HTML5, CSS, JavaScript, and Canvas</p>
                                <p className="absolute left-[50%] translate-x-[-50%] text-center bg-gradient-to-b from-blue-700 via-blue-800 to-gray-900 text-white rounded-xl w-[50%]"><a href="https://github.com/Emily-Herndon/Cat-Scraps" target="_blank" rel="noopener noreferrer">Code</a> | <a href="https://emily-herndon.github.io/Cat-Scraps/" target="_blank" rel="noopener noreferrer">Try it!</a></p>
                            </div>
                        </div>
                        <div >
                            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-black rounded-xl px-2 py-5 md:py-6 lg:p-2 group hover:bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                                <Image
                                    src={bibliofiles}
                                    alt="A screenshot of a profile page on the bibliofiles that has several books saved with different tags"
                                    className="rounded-xl group-hover:opacity-10"
                                />
                                <div className="hidden group-hover:block absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-xs lg:text-base">
                                    <h2>The Bibliofiles</h2>
                                    <h3 className="py-1 m-auto ">Are you an avid reader? Do you have trouble keeping track of all the books you&apos;ve read and the books you want to read? Try the Bibliofiles!</h3>
                                    <p>Built with EJS, postgres, SQL, Express, Node, Bootstrap, and Sequelize</p>
                                    <p className=" absolute left-[50%] translate-x-[-50%] text-center bg-gradient-to-b from-blue-700 via-blue-800 to-gray-900 text-white rounded-xl w-[50%]"><a href="https://github.com/Emily-Herndon/The-Bibliofiles" target="_blank" rel="noopener noreferrer">Code</a> | <a href="https://the-bibliofiles.herokuapp.com/" target="_blank" rel="noopener noreferrer">Try it!</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-black rounded-xl px-2 py-4 lg:p-2 group hover:bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                            <Image
                                src={bugOut}
                                alt="A screenshot of a manger&apos;s profile with their projects displayed"
                                className="rounded-xl group-hover:opacity-10"
                            />
                            <div className="hidden group-hover:block absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-xs lg:text-base">
                                <h2>BugOut</h2>
                                <h3 className="py-1 m-auto">A project and bug tracker tool built with a development team in mind.</h3>
                                <p>Built with React, Mongoose, Tailwind, MongoDB, and Express as part of a group</p>
                                <p className=" absolute  left-[50%] translate-x-[-50%] text-center bg-gradient-to-b from-blue-700 via-blue-800 to-gray-900 text-white rounded-xl w-[50%]"><a href="https://github.com/Emily-Herndon/BugOut-Client" target="_blank" rel="noopener noreferrer">Code</a> | <a href="https://p3-bugout.netlify.app/login" target="_blank" rel="noopener noreferrer">Try it!</a></p>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-black rounded-xl px-2 py-5 lg:p-2 group hover:bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                            <Image
                                src={ensemble}
                                alt="A screenshot of a profile page on ensemble with a profile picture and a few pieces of clothing"
                                className="rounded-xl group-hover:opacity-10"
                            />
                            <div className="hidden group-hover:block absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-xs lg:text-base">
                                <h2>Ensemble</h2>
                                <h3 className="py-1 m-auto">A website to virtually store your closet, create outfits, and plan what to wear, from anywhere!</h3>
                                <p>Built with React, Mongoose, Tailwind, Express, MongoDB, & Cloudinary as part of a group</p>
                                <p className=" absolute  left-[50%] translate-x-[-50%] text-center bg-gradient-to-b from-blue-700 via-blue-800 to-gray-900 text-white rounded-xl w-[50%]"><a href="https://github.com/Emily-Herndon/Ensemble-Client" target="_blank" rel="noopener noreferrer">Code</a> | <a href="https://ensemble-closet.netlify.app/register" target="_blank" rel="noopener noreferrer">Try it!</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
