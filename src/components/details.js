import React from "react";
import { useState, useEffect } from "react";
const Details = () => {
    const [detail, setDetail] = useState([])
    useEffect(() => {
        fetch("https://fake-movie-database-api.herokuapp.com/").then((res) => res.json()).then((data) => {
            setDetail(data)
            // console.log(data)
        })
    }, [])
    return (
        <div className="container">
            {detail.map((item, i) => {
                return (
                    <div key={i}>
                        <div>{item}</div>
                    </div>
                )
            })}
        </div>
    )
}
export default Details;