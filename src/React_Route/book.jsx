import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Drow } from './booksSlice'
import idBooks from './idBooks'

const Books = (props) => {

    const dispatch = useDispatch()
    const sliceBook=useSelector((myStore)=>myStore.booksSlice.booksArr)
    return (
        <>
        {            
            <button onClick={()=>dispatch(Drow())}></button>
          
        }
          <idBooks/>
        </>
    )
}

export default Books














