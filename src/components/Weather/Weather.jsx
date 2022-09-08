import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
    const [content, setContent] = useState([])
    const [loading, setLoading] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState("business")

    const getWeathers = async() => {
        setLoading(true)
        // axios({
        //     url: `https://inshortsapi.vercel.app/news?category=${selectedCategory}`,
        //     method: 'patch',
        //     data: {}
        // })
        //     .then(res => {
        //         setContent(res.data.data)
        //         setLoading(false)

        //     })
        //     .catch(err => {
        //         console.log(err)
        //         setLoading(true)
        //     })
       try {
        let result = await axios({
            url: `https://inshortsapi.vercel.app/news?category=${selectedCategory}`,
            method: 'patch',
            data: {}
        });

        if(result !==null){
            
        }
       } catch (error) {
        console.log(error);
       }
    }

    useEffect(() => {
        getWeathers();
    }, [])


    return (
        <div className='row m-0 py-5'>
            {loading === true ? <>Loading.....</> :


                content.map((val) => {
                    return <div className='card h-auto col-4 p-0'>
                        <h4>{val.title}</h4>
                        <img src={val.imageUrl} alt="" />
                        <div className="card-body">

                            <h5>{val.author}</h5>
                            <p> {val.content}</p>
                            <p>{val.readMoreUrl}</p>
                            <p>{val.date}</p>
                            <p>{val.time}</p>





                        </div>
                    </div>

                })}




        </div>
    )
}


export default Weather