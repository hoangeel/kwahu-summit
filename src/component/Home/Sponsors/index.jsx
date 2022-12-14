import React from 'react'
import "./index.scss"

import One from "assets/img/image 269.png"
import Platinum1 from "assets/img/image 270.png"
import Platinum2 from "assets/img/image 271.png"
import Platinum3 from "assets/img/Group 1000004478.png"
import Diamond1 from "assets/img/SPONSORS LOGOS 2.png"
import Diamond2 from "assets/img/SPONSORS LOGOS 3.png"
import Diamond3 from "assets/img/SPONSORS LOGOS 4.png"
import Diamond4 from "assets/img/Group 1000004476.png"
import Diamond5 from "assets/img/Group 1000004477.png"



export default function Sponsors() {
  return ( 
    <div className='Sponsors'>
      <h1 className='titleSponsors'>Sponsors</h1>
      <p className='Lead'>Lead SponsorS</p>
      <div className='One'>
        <img className='one' src={One} alt="" />
      </div>
      <p className='Lead Platinum'>Platinum Sponsor:</p>
      <div className='imgPlatinum'>
        <img className='Platinum1' src={Platinum1} alt="" />
        <img className='Platinum2' src={Platinum2} alt="" />
        <img className='Platinum3' src={Platinum3} alt="" />
      </div>
      <p className='Lead Diamond'>Diamond Sponsor:</p>
      <div className='imgPlatinum'>
        <img className='Diamond1' src={Diamond1} alt="" />
        <img className='Diamond2' src={Diamond2} alt="" />
        <img className='Diamond3' src={Diamond3} alt="" />
        <img className='Diamond4' src={Diamond4} alt="" />
        <img className='Diamond5' src={Diamond5} alt="" />
      </div>
    </div>
  )
}
