import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

function Footer() {
  return (
    <div className='gpt3__footer section__padding'> 
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Lorem ipsum dolor sit amet.
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Contact</p>
          <p>links</p>
          <p>social</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Social Media</p>
          <p>Contact</p>
          <p>links</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Social Media</p>
          <p>Contact</p>
          <p>links</p>
          <p>social</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>All rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer