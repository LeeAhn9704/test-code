import React from 'react'
import './Sns.css'

const Sns = (props) => {
    return (
        <>
            <h3>{props.name}</h3>
            <h4>{props.age}</h4>
            <h4>{props.city}</h4>
            ------------------------------
        </>
    )
}

export default Sns;