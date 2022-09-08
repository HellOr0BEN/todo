import React , {useState} from 'react';

import './tab.scss';
import Weather from '../Weather/Weather'
import Fetch from '../Fetch/Fetch'

const Tab = () => {
    const [render, setRender] = useState('')

  return (
    <>
    <div className='tab'> 
    <button onClick={()=>{
        setRender('Weather')
    }}>Weather</button>
    <button onClick={()=>
    setRender('Electronic Shop')}>Electronic Shop</button>
    </div>
    <div>
        {
            render === 'Weather'? <Weather/>: render === 'Electronic Shop'? <Fetch/> : <></>
        }
    </div>


    </>

  )
}

export default Tab