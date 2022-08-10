import React from 'react'
import './skills.css'
import skillsList from '../data/skillsList'

export default function Skills() {
  return (
    <div className='container mt-4'>
        <div className="row justify-content-center">
        <div className="languages mt-1">
                <h4 className='text-center skills-heading '>Programming/Scripting Languages</h4>
                <div className='d-flex my-4 justify-content-center flex-wrap'>
                    {skillsList.languages.map((lang, index) => {
                        return <div key={index} className='my-3 my-md-0 mx-3'>
                            <div className='hand skills-icons-container d-flex justify-content-center'>
                                <i className={`skills-icons devicon-${lang.deviconCode}-plain colored ${lang.color}`}></i>
                            </div>
                            <h6 className='skills-text text-center mt-2 fw-bolder'>{lang.title}</h6>
                        </div>
                    })}
                </div>
            </div>
        <div className="frameworks mt-3">
                <h4 className='skills-heading text-center'>Libraries and Frameworks</h4>
                <div className='d-flex my-4 justify-content-center flex-wrap'>
                    {skillsList.frameworks.map((lang, index) => {
                        return <div key={index} className='my-3 my-md-0 mx-3'>
                            <div className='hand skills-icons-container d-flex justify-content-center'>
                                <i className={`skills-icons devicon-${lang.deviconCode}-plain colored ${lang.color}`}></i>
                            </div>
                            <h6 className='skills-text text-center mt-2 fw-bolder'>{lang.title}</h6>
                        </div>
                    })}
                </div>
            </div>

            <div className="tools mt-3">
                <h4 className='text-center skills-heading'>Tools</h4>
                <div className='d-flex my-4 justify-content-center flex-wrap'>
                    {skillsList.tools.map((lang, index) => {
                        return <div key={index} className='my-3 my-md-0 mx-3'>
                            <div className='hand skills-icons-container d-flex justify-content-center'>
                                <i className={`skills-icons devicon-${lang.deviconCode}-plain colored ${lang.color}`}></i>
                            </div>
                            <h6 className='skills-text text-center mt-2 fw-bolder'>{lang.title}</h6>
                        </div>
                    })}
                </div>
            </div>
            <div className="other-skills mt-3">
                <h4 className='text-center skills-heading'>Other Skills</h4>
                <div className='d-flex my-4 justify-content-center flex-wrap'>
                        <div className='rounded-2 other-skills-text my-2 my-md-0 mx-2'>Competitive Programming</div>
                        <div className='rounded-2 other-skills-text my-2 my-md-0 mx-2'>Web Development</div>
                        <div className='rounded-2 other-skills-text my-2 my-md-0 mx-2'>Web Scraping</div>
                </div>
            </div>
        </div>
    </div>
  )
}
