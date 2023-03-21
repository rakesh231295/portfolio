import React from 'react'
//import "../styles/App.css";
import MyImage from '../images/1.png';
function Home() {
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='card'>
        <div className='col-md-6 mt'>
          <h1 className='fw700 fs50'>Say hi to time tracking made easy with automation</h1>
          <p className='p1'>A powerful tool for managing your team's time and productivity, with advanced workforce management capabilities to boost performance and results</p>
          <button className='btn btn-danger'>Know More</button>
        </div>
        <div className='col-md-6'>
          <img src={MyImage} alt="horse" />
        </div>
        </div>
      </div>
    </div>
    </>
  )
}


export default Home;