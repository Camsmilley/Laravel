import React, { useState } from 'react'
import './Discount.css'
import video from '../../../assets/video.mp4'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Discount = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return
    }

    // Simulate a successful subscription
    setTimeout(() => {
      toast.success(`Thank you for subscribing! We've sent a short newsletter to ${email}.`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setEmail('')
    }, 1000)
  }

  return (
    <div className='discount'>
      <ToastContainer />
      <div className="secContainer">
        <video src={video} autoPlay loop muted typeof='mp4'></video>
        <div className="textDiv">
          <span data-aos='fade-up' data-aos-duration='2000' className="title">
            Sign Up for newsletters
          </span>
          <p data-aos='fade-up' data-aos-duration='2500'>
            Want to get an instant discount for your next hiking to any of your favorite mountains.
          </p>

          <form onSubmit={handleSubscribe} data-aos='fade-up' data-aos-duration='3000' className="input_btn flex">
            <input 
              type="email" 
              placeholder='Enter Your Email' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className='btn'>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Discount