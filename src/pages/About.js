import React from 'react'
import "./About.css"
import AchivementCard from '../components/AchivementCard'
import activities from '../data/MyAchivements'

export default function About() {
  return (
    <div className='mt-4 mt-md-5 container'>
        <div className="row justify-content-between">
            <div className="col-lg-6">
                <h4 className="q-text">About Me</h4>
                <div className='mt-4 mb-5'>
                    Passionate about writing efficient code, adept at
                    problem-solving and time management. Developed a
                    full-stack website for Flipr's hackathon in just three
                    days. Enthusiastic about competitive programming. Motivated to learn something new and interesting everyday.
                    <div className='mt-4'>
                        <h5 className='q-text'>Education</h5>
                        <p className='mb-1 sec-text'>BMS Institute of Technology and Management, Bengaluru <span className='sec-text'>(2020-2024)</span></p>
                        <p className='mb-1 fs-6 sec-text'><em>B.E (Information Science Engineering)</em></p>
                        <p className='q-text text-muted'><em>CGPA-8.61</em></p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <h4 className="q-text mb-4">Achievements/Certifications</h4>
                {activities.map((activity, index) => {
                    return <AchivementCard key={index} icon={activity.icon} title={activity.title} url={activity.certificate_url}/>
                })}
            </div>
        </div>
    </div>
  )
}
