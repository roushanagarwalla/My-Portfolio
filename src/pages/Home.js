import React from 'react'
import Typewriter from 'typewriter-effect';
import links from '../data/MyLinks';


export default function Home() {
    const avatar = "https://ik.imagekit.io/5rvafdbx9c/portfolio/avatar_1UH88kKgM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660046769782"
    const HackerrankLogo = "https://ik.imagekit.io/5rvafdbx9c/portfolio/hackerrank_TJE_WPfN4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660048056924"
    const codechefLogo = "https://ik.imagekit.io/5rvafdbx9c/portfolio/codechef__GMYRPFNC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660048057369"
    const codeforcesLogo = "https://ik.imagekit.io/5rvafdbx9c/portfolio/codeforces_7IqFiegFY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660048056948"
    const leetcodeLogo = "https://ik.imagekit.io/5rvafdbx9c/portfolio/leetcode_Nvxn3YQtz.png?updatedAt=1695928791323"

    const typewritterText = ['I am a Web Developer', 'I am a Competitive Programmer', 'I Love to build things'];
    return (
        <>
            <div className='container mt-4 mt-md-5'>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="avatar d-flex justify-content-center">
                            <img src={avatar} className="rounded" width="200px" height="200px" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 mt-4">
                        <h3 className='h2 text-center tert-text'>Hello I'am Roushan Agarwalla</h3>
                        <h4 className="text-center q-text">
                            <Typewriter
                                options={{
                                    strings: typewritterText,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h4>
                    </div>
                    {/* * Profiles Links */}
                    <div className="col-md-11 col-lg-11 mt-5 ">
                        <div className="row justify-content-between">
                            <div className="col-md-5 col-lg-4 d-flex justify-content-center my-2 mb-4">
                                <div>
                                    <h5 className='sec-text text-center mb-3'>Connect with Me</h5>
                                    <div className='d-flex flex-wrap justify-content-center'>
                                        <div className='me-2 btn btn-bg btn-sm'>
                                            <i className="bi bi-envelope-fill"></i>
                                            <a href={`mailto: ${links.email}`} className="mx-2 mb-3 text-light">Mail</a>
                                        </div>
                                        <div className='me-2 btn btn-bg btn-sm'>
                                            <i className="bi bi-linkedin"></i>
                                            <a target="_blank" rel="noreferrer" href={links.linkedin} className="mx-2 mb-3 text-light">LinkedIn</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-4 d-flex justify-content-center my-2 mb-4">
                                <div>
                                    <h5 className='sec-text text-center mb-3'>My Profiles</h5>
                                    <div className='d-flex flex-wrap justify-content-center'>
                                        <div className="me-2 mb-3 btn btn-sm d-flex btn-bg">
                                            <img className="img-fluid" src={codechefLogo} alt="" height="20px" width="20px" />
                                            <a target="_blank" rel="noreferrer" href={links.codechef} className="mx-1 align-self-center text-light">Codechef</a>
                                        </div>
                                        <div className="me-2 mb-3 btn btn-bg btn-sm">
                                            <img className="img-fluid" src={codeforcesLogo} alt="" height="20px" width="20px" />
                                            <a target="_blank" rel="noreferrer" href={links.codeforces} className="mx-2 text-light">Codeforces</a>
                                        </div>
                                        <div className="me-2 mb-3 btn btn-bg btn-sm">
                                            <img className="img-fluid" src={HackerrankLogo} alt="" height="16px" width="16px" />
                                            <a target="_blank" rel="noreferrer" href={links.hackerrank} className="mx-1 text-light">Hackerrank</a>
                                        </div>
                                        <div className='mb-3 me-2 btn btn-bg btn-sm d-flex'>
                                            <i className="fs-6 bi bi-github"></i>
                                            <a target="_blank" rel="noreferrer" href={links.github} className="align-self-center mx-2 text-light">Github</a>
                                        </div>
                                        <div className='mb-3 me-2 btn btn-bg btn-sm d-flex'>
                                            <img className="img-fluid" src={leetcodeLogo} alt="" />
                                            <a target="_blank" rel="noreferrer" href={links.leetcode} className="align-self-center mx-2 text-light">Leetcode</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-12 d-flex justify-content-center my-2 my-md-2">
                                <div className='d-flex align-self-center'>
                                    <div className="btn btn-bg btn-sm">
                                        <i className="fs-5 bi bi-file-earmark-person-fill"></i>
                                        <a target="_blank" rel="noreferrer" href={links.resume} className="text-decoration-none fs-6 mx-2 fw-semibold text-light">View Resume</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
