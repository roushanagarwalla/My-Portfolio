import React from 'react'
import './Project.css'

export default function Project(props) {
    return (
        <div className="col-md-6 col-xl-4">
            <a href={props.Projecturl} target="_blank" rel="noreferrer" className="text-decoration-none d-block project-card-container overflow-hidden rounded-4">
                <div className="d-flex justify-content-center project-card rounded-4" style={{ background: `url(${props.image}) center center/cover` }}>
                    <div href="/" className='align-self-center project-card-btn d-none d-flex'><i className="text-light fs-3 bi bi-box-arrow-up-right"></i></div>
                    <div className="project-description p-1">
                        <p className='fs-4 fw-bold my-2 text-light text-left ms-3'>{props.title}</p>
                        <p className='fs-6 fw-normal fst-italic text-light my-2 text-left mx-3'>{props.description}</p>
                        <ul className="project-tags mx-3 mt-3">
                            {props.tags.map((tag, index) => {
                                return <li key={index} className='rounded-2'>{tag}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </a>
        </div>
    )
}
