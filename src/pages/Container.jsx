import React, { useState } from 'react'
import Formpage from '../components/Formpage'
import Intropage from '../components/Intropage'


const Container = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick=(c)=>{
setClicked(c)
  }
  return (
    <div >
        {clicked === false?
            (
            
        <Intropage isClicked={()=>setClicked(true)}/>
        )
        :
    
        (   <Formpage/>)
        }
   
    </div>
  )
}

export default Container
