import React from 'react'
import './LoveforHikes.css'
import img from '../assets/love.jpg'
import img1 from '../assets/love2.jpg'
import img2 from '../assets/love3.jpg'
import img3 from '../assets/love4.jpg'
import img4 from '../assets/love5.jpg'
import img5 from '../assets/love6.jpg'
import GuestHeader from './GuestHeader/GuestHeader'

const LoveforHikes = () => {
  return (
    <div>
      <GuestHeader/>
      <div className='loveforHikes'>
      <img src={img} className="img-fluid" alt="..." />
      <img src={img1} className="img-fluid" alt="..."/>
      <img src={img2} className="img-fluid" alt="..."/>
      <img src={img3} className="img-fluid" alt="..."/>
      <img src={img4} className="img-fluid" alt="..."/>
      <img src={img5} className="img-fluid" alt="..."/>
      </div>
    </div>
  )
}

export default LoveforHikes
