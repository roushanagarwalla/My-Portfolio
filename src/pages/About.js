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
                    Passionate about building efficient web application. Developed a full stack web application for Flipr's Hackathon in a period of 3 days. Good at program solving, and achieved the tag of 4⭐ coder in Codechef within the span of just 5 months. Worked in many small web development projects using technologies like HTML, CSS, Javascript, Bootstrap, Django, FastAPI, etc. Motivated to learn something new and interesting everyday.
                    <div className='mt-4'>
                        <h5 className='q-text'>Education</h5>
                        <p className='mb-1 sec-text'>BMS Institute of Technology and Management, Bengaluru <span className='sec-text'>(2020-2024)</span></p>
                        <p className='mb-1 fs-6 sec-text'><em>B.E (Information Science Engineering)</em></p>
                        <p className='q-text text-muted'><em>CGPA-8.65</em></p>
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
