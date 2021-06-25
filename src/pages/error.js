import React from 'react'
import { Link } from "react-router-dom";


const UnknownPage = () => (
    <div className='UnknownPage'>
        <h1>404</h1>
        <Link className='UnknownPage__link' to='/' >Back to home</Link>
    </div>
)

export default UnknownPage