import React from 'react'
import { useState, useEffect } from 'react'
import Project from '../components/Project'
import Spinner from '../components/Spinner'
import projects from '../data/Projects'

export default function ProjectList() {
  const [loading, setLoading] = useState(true)
  const [Projects, setProjects] = useState([])
  useEffect(() => {
    setTimeout(() => {
      setProjects(projects)
      setLoading(false);
    }, 200);
  }, Projects);

  return (
    <div className='mt-4 mt-md-5 container'>
        <div className="row justify-content-left">
          {loading?<Spinner />:""}
          {!loading && Projects.map((p, index) => {
            return <Project key={index} title={p.title} description={p.description} tags={p.tags} image={p.ImageUrl} url={p.url} />
          })}
        </div>
    </div>
  )
}
