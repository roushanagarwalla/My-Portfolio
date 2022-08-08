import React from 'react'
import Project from '../components/Project'

export default function ProjectList() {
  const projectTags = ["HTML", "CSS", "JAVASCRIPT", "PYTHON", "BOOTSTRAP"]
  return (
    <div className='mt-5 container'>
        <div className="row">
            <Project url="/" title="BMSIT Bookshare" description="A website for sharing old unused books among BMSIT students" tags={projectTags} image="https://www.mmppicture.co.in/wp-content/uploads/2019/04/Book-and-Flying-Paper-Free-Stock-Background-Image.jpg" Projecturl="https://github.com/roushanagarwalla/Bmsit-Bookshare" />
        </div>
    </div>
  )
}
