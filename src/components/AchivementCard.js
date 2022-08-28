import React from 'react'
import "./AchivementCard.css"

export default function AchivementCard(props) {
    return (
        <div>
            <a href={props.url} target="_blank" rel="noreferrer">
                <div className="d-flex mt-3 achievements-card p-2 shadow-lg rounded-1">
                    <img className="p-1" src={props.icon} alt="" srcset="" width={32} height={32} />
                    <span className="mx-2 align-self-center">{props.title}</span>
                </div>
            </a>
        </div>
    )
}
