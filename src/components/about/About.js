import React from 'react'

const About = (props) => {
  return (
    <div>
      <h1>About this shopping cart</h1>
      <p className='lead'>
        This is somewhat less usefull app demonstrating following technologies
        <li>Rendering UI with react</li>
        <li>Managing state with redux</li>
        <li>Client side routing with react router</li>
        <li>Mongo, mongoose for data munging at the server side</li>
        <li>Helper libraries: axios, lodash, faker.js ...</li>
      </p>
    </div>
  )
}

export default About
