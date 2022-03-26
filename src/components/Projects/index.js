import './styles.css'
import data from './data'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Projects() {

    useEffect(() => {
        AOS.init({ mirror: true, duration: 2000 });
    }, []);

    return (
        <div className="projects" id='projects'>
            <h1>Projetos</h1>
            <div className="list-projects">
                {data.map(({ name, description, image, link }) => (
                    <a className='link-projects' href={link} target="_blank" rel="noopener noreferrer">
                        <div data-aos="zoom-in"  className="item-projects">
                            <h2>{name}</h2>
                            <p>{description}</p>
                            <img src={image} alt={name} className="image-projects"/>
                        </div>
                    </a>
                ))}
            </div>
                    
        </div>
    )
}

export default Projects;