import React from 'react'
import Image from 'next/image'
import { motion } from 'framer'

function Mussoorie_card(props) {
  return (
    <motion.div className='d-flex justify-content-center' initial = {{opacity: 0, y: 20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>  
        <div className="container-1140">
            <div className="row">
                <div className="col-md-6 col-12 mb-2">
                    <div className="card">
                        <Image className= "card-img-top mussoorie-card-img" src= {props.image1} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{props.heading1}</h5>
                            <div className="card-text">{props.about1}</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12 mb-2">
                    <div className="card">
                        <Image className= "card-img-top mussoorie-card-img" src= {props.image2} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{props.heading2}</h5>
                            <div className="card-text">{props.about2}</div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </motion.div>
  )
}

export default Mussoorie_card
