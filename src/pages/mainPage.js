import React, {useState} from 'react'
import Sidebar from '../components/sidebar'
import AddForm from '../components/addForm'
import CategoryThing from '../layouts/categoryThing'
import { connect } from 'react-redux'
import '../assets/styles/themes/default/theme.scss'


const MainPage = ({category, userID}) => {

 const [show, setShow] = useState(false)


    return(
        userID ? (
        <div class='main-page'>
            <Sidebar category={category} setShow={setShow} show={show}/>
            {
                show ? <AddForm category={category} show={show} setShow={setShow} /> : <></>
            }
           <CategoryThing category={category} />
        </div>
        ) : (
        <div>
            <h1>Login first</h1>
        </div>
        )
    )
}

const mapStateToProps = ({category = 'music', userID = null}) => ({category, userID}) 

export default connect(mapStateToProps)(MainPage)