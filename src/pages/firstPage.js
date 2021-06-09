import React, { useEffect } from 'react'
import axios from 'axios'

const FirstPage = () => {

useEffect(()=>{
   axios.get('/lol')
   .then(res=>{
       console.log(res)
   })
})

    return(
        <div>
            <h1>First Page</h1>
        </div>
    )
}

export default FirstPage