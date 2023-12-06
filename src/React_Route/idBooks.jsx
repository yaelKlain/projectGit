import React from 'react'
import {useLocation} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Drow } from './booksSlice'

const idBooks = () =>{

    const dispatch = useDispatch()
    const sliceBook=useSelector((myStore)=>myStore.booksSlice.booksArr)
    return (
        <>
        {            
            dispatch(Drow())
        }
        </>
    )
}

export default idBooks