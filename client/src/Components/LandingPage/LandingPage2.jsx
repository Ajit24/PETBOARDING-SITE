import React from 'react'
import "./LandingPage.css"

export default function LandingPage2() {
  return (
    <div>
      <div className='divFlex'>
          <div className='InputLandDiv'>
              <h1>Yay, We</h1>
              <h1>Love Your Pets!</h1>
              <p>Please give us basic information. Thanks!</p>
 
              <div className='inputTagsInfo'>
              <input type="text" placeholder='Check in' /><br /><br />
              <input type="text" placeholder='Check out' /><br /><br />
              <div className='inputFlex'>
              <input type="text" placeholder='Kind of pet' />
              <input type="text" placeholder='Number' />
              </div><br />
              <button>Check Avaliablity</button>
              </div>
              

          </div>
          <div><img src="https://www.kindpng.com/picc/m/456-4566786_german-shepherd-white-background-hd-png-download.png" alt=""/></div>
      </div>
    </div>
  )
}
