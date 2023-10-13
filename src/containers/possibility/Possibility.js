import React from 'react'
import './possibility.css'

import  possibility  from "../../assets/possibility.png";
function Possibility() {
  return (
    <div className="gpt3__possibility section__padding" id='possibility'>
      <div className="gpt3__possibility-img">
        <img src={possibility} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Lorem ipsum dolor sit amet.</h4>
        <h1 className="gradient__text">Lorem ipsum dolor sit amet consectetur.</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, debitis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit obcaecati magni accusamus deleniti perspiciatis suscipit ipsam sint mollitia rerum architecto!</p>
        <h4>Lorem ipsum dolor sit amet.</h4>
      </div>
    </div>
  )
}

export default Possibility  