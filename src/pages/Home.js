import React from 'react'
import avatar from "../images/avatar3.png"
import Typewriter from 'typewriter-effect';


export default function Home() {
    return (
        <div className='container mt-4 mt-md-5'>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="avatar d-flex justify-content-center">
                        <img src={avatar} className="rounded" width="200px" height="200px" alt="" />
                    </div>
                </div>
                <div className="col-md-6 mt-4">
                    <h2 className='text-center tert-text'>Hello I'am Roushan Agarwalla</h2>
                    <h4 className="text-center q-text">
                        <Typewriter
                            options={{
                                strings: ['I am a Web Developer', 'I am a Competitive Programmer', 'I Love to build things'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h4>
                </div>
            </div>
        </div>
    )
}
