import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import "./index.scss"


const DetailPage = () => {

    const [service, setService] = useState([])
    const { id } = useParams()

    const getData = () => {
        const apiUrl = `http://localhost:8081/services/${id}`
        axios.get(`${apiUrl}`).then((q) => setService(q.data))
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    <div id='detail'>
        <div className="detail-data">
            <div className="icon">
                <i className={service.imgUrl}></i>
            </div>
            <div className="text-data">
                <h1>{service.name}</h1>
                <p>{service.description}</p>
                <h2>{service.price}$</h2>
            </div>
        </div>
    </div>
  )
}

export default DetailPage