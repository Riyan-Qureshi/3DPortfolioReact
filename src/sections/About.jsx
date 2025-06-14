import { useState } from 'react'
import Button from '../components/Button'
import Globe from 'react-globe.gl'

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('riyaniiq@gmail.com');
        setHasCopied(true);
        setTimeout(() => {setHasCopied(false);}, 2000);
    }

    return (
        <section className='c-space my-20' id='about'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
                {/* About Me Card */}
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src='/assets/grid1.png' alt='grid-1' className='w-full sm:h-[276px] h-fit object-contain'/>
                        <div>
                            <p className='grid-headtext'>Hi, I am Riyan Qureshi</p>
                            <p className='grid-subtext'>Junior Computer Engineering student at SJSU passionate about building thoughtful, user-focused software at the intersection of technology, design, and impact. </p>
                        </div>
                    </div>
                </div>
                
                {/* Tech Stack Card */}
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src='/assets/grid2.png' alt='grid-2' className='w-full sm:w-[276px] h-fit object-contain'/>
                        <div>
                        <p className='grid-headtext'> Tech Stack </p>
                        <p className='grid-subtext'> I specialize in mobile-first development using React Native and Expo, and also work across the full stack with tools like Node.js, Python, and Firebase to build responsive, cloud-connected apps.</p>
                    </div>
                    </div>
                </div>
                
                {/* Location Card */}
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                        <Globe
                            height={326}
                            width={326}
                            backgroundColor="rgba(0, 0, 0, 0)"
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[
                                { lat: 37, lng: -121, text: 'Fremont, California', color: 'white', size: 100 }, 
                                { lat: 43.4643, lng: -80.5204, text: 'Waterloo, Ontario', color: 'red', size: 100 },
                                { lat: 24.2815, lng: 55.8246, text: 'Al Buraimi, Oman', color: 'red', size: 100 }
                            ]}
                            // pointsData={[{lat: 37, lng: -121,}]}
                            // pointColor={() => '#4ade80'}
                            arcsData={[
                                {startLat: 37, startLng: -121, endLat: 43.4643, endLng: -80.5204, color: `${() => '#ffffff'}`},
                                {startLat: 43.4643, startLng: -80.5204, endLat: 24.2815, endLng: 55.8246, color: `${() => '#ffffff'}`}
                            ]}
                        />
                        </div>
                        <div>
                            <p className="grid-headtext">I’m very flexible with various time zone communications & locations</p>
                            <p className="grid-subtext">I am based in Fremont, California, but I am open to work remotely worldwide.</p>
                            <a href='#contact' className='w-fit'>
                                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Passion Card */}
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                        <div>
                        <p className="grid-headtext">My Passion for Coding</p>
                        <p className="grid-subtext">
                        I’m passionate about coding because it lets me turn ideas into interactive experiences, solve meaningful problems, and continuously learn by building things that make a real impact.
                        </p>
                        </div>
                    </div>
                </div>

                {/* Contact Me Card */}
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                        src="assets/grid4.png"
                        alt="grid-4"
                        className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2">
                        <p className="grid-subtext text-center">Contact me</p>
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">riyaniiq@gmail.com</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About