import React, { useRef } from 'react'
import '../styles/common.css'
import useFetch from '../customHooks/useFetch'
function AddcommentComment({ id ,sendcommentComment,toggleEditView}) {

    let addCommentRef = useRef()
    function sendAddComment() {
        sendcommentComment(addCommentRef.current.value,id)
      
        // toggleEditView(false)
        // addCommentRef.current.value = ''
            }


    return (
        <div className='addCommentComment'>


            <input
                type='text'
                ref={addCommentRef}

            />
            <button onClick={sendAddComment} >Submit</button>
        </div>
    )
}

export default AddcommentComment