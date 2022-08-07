import React from 'react'
import avatar from "../images/avatar3.png"

export default function Home() {
  return (
    <div className='container mt-5'>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div class="avatar d-flex justify-content-center">
                    <img src={avatar} className="rounded" width="200px" height="200px" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
