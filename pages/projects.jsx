import Image from "next/image"

export default function projects() {
    return (
        <div id="projects" className="w-full text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <h1>My Main Projects</h1>
                    <div>
                        <h2>Cat Scraps</h2>
                        <Image
                            src="/images/projects/cat-scraps.png"
                            alt="A screenshot of the starting page for the cat scraps game"
                            width={300}
                            height={200}
                        />
                        <h3 className="py-4 m-auto max-w-[70%]">Play as a cat living in a home with some messy humans. Catch the food scraps as they drop, just be sure to avoid the tummy-ache inducing cheese!</h3>
                        <p>Built with HTML5, CSS, JavaScript, and Canvas</p>
                        <p><a href="https://github.com/Emily-Herndon/Cat-Scraps" target="_blank" rel="noopener noreferrer">Code</a> | <a href="https://emily-herndon.github.io/Cat-Scraps/" target="_blank" rel="noopener noreferrer">Try it!</a></p>
                    </div>
                    <div>
                        <h2>The Bibliofiles</h2>
                        <Image
                            src="/images/projects/the-bibliofiles.png"
                            alt="A screenshot of a profile page on the bibliofiles that has several books saved with different tags"
                            width={300}
                            height={200}
                        />
                        <h3 className="py-4 m-auto max-w-[70%]">Are you an avid reader? Do you have trouble keeping track of all the books you`ve read and the books you want to read? Try the Bibliofiles!</h3>
                        <p>Built with EJS, SQL, Express, Bootstrap, and Sequelize</p>
                        <p><a href="https://github.com/Emily-Herndon/The-Bibliofiles" target="_blank" rel="noopener noreferrer">Code</a> | <a href="https://the-bibliofiles.herokuapp.com/" target="_blank" rel="noopener noreferrer">Try it!</a></p>
                    </div>
                    <div>
                        <h2>BugOut</h2>
                        <Image
                            src="/images/projects/bugout.png"
                            alt="A screenshot of a manger`s profile with their projects displayed"
                            width={300}
                            height={200}
                        />
                        <h3 className="py-4 m-auto max-w-[70%]">A project and bug tracker tool built with a development team in mind.</h3>
                        <p>Built with React, Mongoose, Tailwind, MongoDB, and Express as part of a group</p>
                        <p><a href="https://github.com/Emily-Herndon/BugOut-Client" target="_blank" rel="noopener noreferrer">Code</a> | <a href="https://p3-bugout.netlify.app/login" target="_blank" rel="noopener noreferrer">Try it!</a></p>
                    </div>
                    <div>
                        <h2>Ensemble</h2>
                        <Image
                            src="/images/projects/ensemble.png"
                            alt="A screenshot of a profile page on ensemble whith a profile picture and a few pieces of clothing"
                            width={300}
                            height={200}
                        />
                        <h3 className="py-4 m-auto max-w-[70%]">A website to virtually store your closet, create outfits, and plan what to wear, from anywhere!</h3>
                        <p>Built with React, Mongoose, Tailwind, Express, MongoDB, & Cloudinary</p>
                        <p><a href="https://github.com/Emily-Herndon/Ensemble-Client" target="_blank" rel="noopener noreferrer">Code</a> | <a href="https://ensemble-closet.netlify.app/register" target="_blank" rel="noopener noreferrer">Try it!</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
