import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./AppendData.css"
import { useNavigate } from 'react-router-dom';

export default function AppendData() {
    const navigate = useNavigate()
    const [data, setData] = useState([])


    useEffect(() => {
        axios.get("https://petdata1.herokuapp.com/petData").then((res) => setData(res.data))
    }, [])



    console.log(data)
    return (
        <div>
            <button>Sort By Cost Low to High</button>
            <button>Sort By Cost High to Low</button>
            <button>Sort By Rating Low to High</button>
            <button>Sort By Rating High to Low</button>
            <button>Verified</button>
            <button>Not Verified</button>


            <div className='AppendData'>

                <table>
                    <tr>
                        <th>sr no</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Capacity</th>
                        <th>cost per day</th>
                        <th>verified</th>
                        <th>rating</th>
                    </tr>

           
        {
            data.map((e) => (
                <tr onClick={(el) => navigate(`addPet/${e.id}/edit`)}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.city}</td>
                <td>{e.address}</td>
                <td>{e.capacity}</td>
                <td>{e.cost}</td>
                <td>{e.verified}</td>
                <td>{e.rating}</td>
                </tr >
            ))
        }

                   

                </table>

            </div>
        </div>
    )
}
