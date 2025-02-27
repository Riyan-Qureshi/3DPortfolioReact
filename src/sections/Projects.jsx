import { Suspense, useState } from 'react'
import { myProjects } from '../constants'
import { Canvas } from '@react-three/fiber';
import DemoComputer from '../components/DemoComputer';
import { Center, OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import resume from '/assets/CurrentRiyanQureshiResume.pdf'

const projectCount = myProjects.length;

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const handleNavigation = (direction) => {
      setSelectedProjectIndex((prevIndex) => {
        if (direction === 'previous') {
          return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
        } else {
          return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
        }
      });
    };

    const currentProject = myProjects[selectedProjectIndex];

    return (
        <section className='c-space my-20' id='projects'>
            <p className='head-text'>My Work</p>
            <a className="flex items-center gap-2 cursor-pointer text-white-600" href={resume} download={'CurrentRiyanQureshiResume'}>
                <p className='animatedText text-white-600'> Check out my Resume!</p>
                <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
            <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
                 <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
                    </div>

                    {/* Project Logo */}
                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                        <img className="w-14 h-14 shadow-sm" src={currentProject.logo} alt="logo" />
                    </div>

                    {/* Project Title and Descriptions */}
                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                        {currentProject.tags.map((tag, index) => (
                            <div key={index} className="tech-logo">
                                <img src={tag.path} alt={tag.name} />
                            </div>
                        ))}
                        </div>

                        <a
                            className="flex items-center gap-2 cursor-pointer text-white-600"
                            href={currentProject.href}
                            target="_blank"
                            rel="noreferrer">
                            <p>Check Live Site</p>
                            <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                        </a>
                    </div>

                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                            <img src="/assets/left-arrow.png" alt="left arrow" />
                        </button>

                        <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                            <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
                        </button>
                    </div>
                 </div>

                <div className='border border-black-300 bg-black-200 rounded-lg h-96 md:h-full '>
                    <Canvas>
                        <ambientLight intensity={1}/>
                        <directionalLight intensity={2} position={[0,30,0]} color={0xffffff}/>
                        <Center>
                            <Suspense fallback={<CanvasLoader/>}>
                                <group scale={7} position={[0,0,0]} rotation={[0,0,0]}>
                                    <DemoComputer texture={currentProject.texture}/>
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/>
                    </Canvas>
                </div>
            </div>
        </section>
    )
}

export default Projects