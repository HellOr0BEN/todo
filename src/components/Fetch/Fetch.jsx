import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './fetch.scss'


const Fetch = () => {

    const [hello, setHello] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('https://electronic-ecommerce.herokuapp.com/api/v1/product')
            .then(res => {
                setHello(res.data.data.product)
                setLoading(false);

            })
            .catch(err => {
                console.log(err)
                setLoading(true);
            })
    },[])
    return (
        <div className='row m-0 py-5 gx-2'>

            {loading === true ? <>Loading.....</> :
                hello.map((itemvla) => {
                    return <>
                        <div className='card h-auto col-4 p-0'>
                            <img src={`https://electronic-ecommerce.herokuapp.com/${itemvla.image}`} alt="" className='card-img-top'  />
                           <div className='card-body'>
                           <p>{itemvla.name}</p>
                            <p>Price:{itemvla.price}</p>
                            <p>Stock:{itemvla.stock}</p>

                            {itemvla.category.map((val) => {
                                return <span>#{val}</span>
                            })}
                           </div>
                            <div className='card-footer'>
                                <button className='btn btn-success addToCartBtn'>add to card</button>
                            </div>
                        </div>

                        
                    </>
                })
            }



        </div>
    )
}

export default Fetch
