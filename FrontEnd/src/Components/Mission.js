import React from 'react'
import Footer from './Footer';
import Header from './Header';

const Mission = () => {
  return (
    <div>
        <Header/>
         <div className='main container section'>
            <div className='secTitle'>
                <div className='title'>
                </div>
    <small className='mission' style={{marginTop: '30px'}}> Mission and Vision Statement</small>
      <hr/>
      </div>
      <div className="col-12 ">
        <h5 className="fw-bold- text-success" style={{marginTop: '-30px'}}>Our Purpose</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis at ipsa in corrupti provident assumenda 
            odio mollitia optio commodi porro dolorum, officia sint quo ad enim error dolore consequuntur? Dignissimos?</p>
      </div>
      <div className="col-12 ">
        <h5 className="fw-bold- text-success">Our Mission</h5>
        <p>Our Mission statement is to share our hiking expertise so that anyone, ­ novice or
             expert, ­ can have a high­ quality hiking experience, and to do business with integrity
              such that we are always able to lend a helping hand to causes and individuals in need</p>
      </div>
      <div className="col-12">
        <h5 className="fw-bold- text-success">Our Vision</h5>
        <p>Our vision is to help our customers enjoy the mountain on the best equipment we can provide, in order to suit their needs.</p>
     <hr/>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Mission;
