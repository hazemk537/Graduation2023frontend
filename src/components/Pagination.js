import { faMinus, faPlus, faArrowAltCircleLeft, faTentArrowLeftRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/pagenation.css'
import React from 'react'

function Pagination({ setPageNumber, pageNumber }) {
    return (
        <div className="pagenation_parent">
            <div className="pagenation_parent_dec" onClick={() => {
                setPageNumber((old) => old - 1)
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8899a4" stroke-width="2" stroke-linecap="round" stroke-linejoin="arcs"><path d="M15 18l-6-6 6-6"></path></svg>            </div>
            <span className="pagenation_parent_pg_no" >Page : {pageNumber}</span>
            <div className="pagenation_parent_inc" onClick={() => {
                setPageNumber((old) => old + 1)
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8899a4" stroke-width="2" stroke-linecap="round" stroke-linejoin="arcs"><path d="M9 18l6-6-6-6"></path></svg>


            </div>
        </div>
    )
}

export default Pagination