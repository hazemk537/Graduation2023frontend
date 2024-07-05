import React, { useRef } from 'react'
import '../styles/common.css'
import useFetch from '../customHooks/useFetch'
function AddComment({ articleId }) {

    let addCommentRef = useRef()
    let [, , sendRequest] = useFetch()
    function sendAddComment() {
        let token;

        if (localStorage.getItem("data") !== 'undefined' && localStorage.getItem("data") !== null) {
            token = JSON.parse(localStorage.getItem('data')).token;
        }

        if (addCommentRef.current?.value && articleId) {
            sendRequest(`https://brieflynews.runasp.net/api/v1/CommentsArticle/AddGeneralCommentArticle?text=${addCommentRef.current.value}&articleId=${articleId}`, {
                method: 'POST', name: 'POSTGlobalComment', token: token, jsonFailProp: 'message', jsonSuccessProp: 'message', onSucceed: () => {
                    // clear field
                    // #NOte_case commend succeed
                    addCommentRef.current.value = ''
                }
            });
        }
    }


    return (
        <div className='addComment'>


            <input
                type='text'
                ref={addCommentRef}

            />
            <button onClick={sendAddComment} >Submit</button>
        </div>
    )
}

export default AddComment