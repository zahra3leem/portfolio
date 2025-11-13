import React from 'react'
import sammlyLogo from '../../assets/sammlyLogo.png';

const ProjectCard = ({image, title, githubUrl, liveUrl}) =>{
    const CardContent = (
        <>
            <div className='rounded-lg h-52 overflow-hidden bg-white flex items-center justify-center p-4'>
                {image ? (
                    <img src={image} alt="content" className='object-contain object-center h-3/4 w-3/4' />
                ) : (
                    <h3 className='text-2xl font-bold text-gray-800 text-center px-4'>{title}</h3>
                )}
            </div>
            {image && <h2 className='text-xl font-medium title-font text-white mt-5'>{title}</h2>}
            {githubUrl && !liveUrl && (
                <div className='text-blue-300 inline-flex items-center mt-3'>
                    View on GitHub
                    <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-4 h-4 ml-2' viewBox='0 0 24 24'>
                        <path d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'></path>
                    </svg>
                </div>
            )}
        </>
    );

    const clickableUrl = liveUrl || githubUrl;
    
    if (clickableUrl) {
        return (
            <div className='p-4 md:w-1/3 mb-6'>
                <a 
                    href={clickableUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='block cursor-pointer hover:opacity-90 transition-opacity'
                >
                    {CardContent}
                </a>
            </div>
        );
    }

    return (
        <div className='p-4 md:w-1/3 mb-6'>
            {CardContent}
        </div>
    );
};

export default function Projects() {
    const projects = [
        {
            title:'Sammly',
            image: sammlyLogo,
            githubUrl: null,
            liveUrl: 'https://react-designer-e-commerce-dopv.vercel.app/'
        },
        {
            title:'Examination System',
            image: null,
            githubUrl: 'https://github.com/zahra3leem/Examination-System-'
        },
        {
            title:'React Blog',
            image: null,
            githubUrl: 'https://github.com/zahra3leem/REACT-Blog'
        },
        {
            title:'Angular Node E-Commerce',
            image: null,
            githubUrl: 'https://github.com/Angular-Node-E-Commerce'
        }
    ];
  return (
    <section id='projects' className='text-gray-400 bg-blue-950 body-font'>
        <div className='container px-3 py-11 mx-auto'>
            <div data-aos='fade-up' data-aos-delay='300' className='flex flex-col'>
                <div className='flex flex-wrap sm:flex-row flex-col py-6 mb-12'>
                    <h1 className='sm:w-2/5 text-white font-medium title-font text-3xl mb-2 sm:mb-0'>My projects</h1>
                    <p className='sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0'>
                    Explore a collection of my recent projects showcasing modern web development practices, responsive design, and innovative solutions. Each project demonstrates my expertise in frontend technologies and my passion for creating user-friendly digital experiences.
                    </p>

                </div>
            </div>
            <div data-aos='fade-up' data-aos-delay='400' className='flex flex-wrap sm:m-4 -mx-4 -mb-10 -mt-4'>
                {
                    projects.map((project, index)=>(
                        <ProjectCard key={index} {...project} />
                    ))
                }
            </div>
        </div>
    </section>
  )
}
