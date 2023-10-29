import React from 'react'
import Image from 'next/image'

function Meeting_and_events_card(props) {
    return (
        <div>
            <div className ="card meeting-and-events-card rounded-1">
                <Image src={props.image} className ="card-img-top meeting-image" alt="..."/>
                    <div className ="card-body">
                        <h4 className ="card-heading">{props.card_heading}</h4>
                        <div className='card-about'>{props.card_about}</div>
                    </div>
            </div>
        </div>
    )
}

export default Meeting_and_events_card
