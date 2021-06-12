import React, {useState} from 'react'
import Sidebar from '../components/sidebar'
import AddForm from '../components/addForm'
import CategoryThing from '../layouts/categoryThing'
import '../assets/styles/themes/default/theme.scss'

const MainPage = () => {

    const [category, setCategory] = useState('music')
    const [show, setShow] = useState(false)

    return(
        <div class='main-page'>
            <Sidebar category={category} setShow={setShow} show={show} setCategory={setCategory} />
            {
                show ? <AddForm category={category} show={show} setShow={setShow} /> : <></>
            }
           <CategoryThing category={category} />
        </div>
    )
}

export default MainPage