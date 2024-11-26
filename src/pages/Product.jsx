import React from 'react'
import { Container } from 'reactstrap'

const product = () => {
  return (
    <div>
       <div className="container" style={{ backgroundColor: '#F0EEEF',margin:"0px" , width:"100%"}}>
        <div className='Info' style={{paddingTop:"70px" , paddingLeft:"50px"}}>
            <h1 style={{font:"20px", fontWeight:"bold", fontFamily: 'Arial, sans-serif'}}>HABER-ENGINEERING AND TECHNOLOGY</h1>
            <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button type="button" class="btn btn-dark" style={{width:"250px" , borderRadius:"20px", height:"50px"}}>Shop Now</button>

        </div>

      </div>
    </div>
  )
}

export default product
