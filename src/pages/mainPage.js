import React, {useState} from 'react'
import Sidebar from '../components/sidebar'
import AddForm from '../components/addForm'
import '../assets/styles/themes/default/theme.scss'

const MainPage = () => {

    const [category, setCategory] = useState('Music')
    const [show, setShow] = useState(false)

    console.log(category)

    return(
        <div class='main-page'>
            <Sidebar category={category} setShow={setShow} show={show} setCategory={setCategory} />
            {
                show ? <AddForm show={show} setShow={setShow} /> : <></>
            }
        </div>
    )
}

export default MainPage