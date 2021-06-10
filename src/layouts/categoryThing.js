import React from 'react'
import { connect } from 'react-redux'
import Cards from '../components/cards'

const CategoryThing = ({category, music, ideas, film}) => {


    return(
        <div className='category-thing'>
        {
            category === 'Music' ? (
                <Cards info={music} />
            ) 
            : category === 'Ideas' ? (
                <Cards info={ideas} />
            )
            : (
                <Cards info={film} />
            )
        }
        </div>
    )
}

const mapStateToProps = state => {
    const { music, ideas, film } = state
    return {music, ideas, film};
}



export default connect(mapStateToProps)(CategoryThing)