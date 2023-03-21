import React from 'react'
//import "../styles/App.css";
import MyImage from '../images/1622569441093.jpg';
function Home() {
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='card'>
        <div className='col-md-6 mt-4'>
          <h1>Hello Guys <br></br>I am Rakesh kumar</h1>
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