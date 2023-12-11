import React from 'react'
import NavBar from './NavBar'
import projectsData from '../projectsData'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Projects() {
    return (
        <div>
            <NavBar />
            <div className='projectMain'>
                <div className='projects project_cards'>
                    <h1>Projects</h1>
                    {projectsData.map((data) => (
                        <div class=" project-card" >
                            <img class="card-img-top" src={require(`../assets/${data.img}`)} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">{data.name}</h5>
                                <p class="card-text">{data.description}</p>
                                <Link class="btn" to={data.buttonLink}>View Project</Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='aboveFooterInfo'>
                    <h3>Let's build something together</h3>
                    <button className='contactMe'><Link to="/ContactMe" className="homeLink">Contact Me</Link></button>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Projects