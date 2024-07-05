import React, { useRef, useState } from 'react'
import useFetch from './src/customHooks/useFetch';

import { actions } from '../redux/slices/NotifySlice';

import { useDispatch } from 'react-redux';

function Comment(props) {
    const [showReplies, setShowReplies] = useState(false)
    const [editCommentView, setEditCommentView] = useState(0)
    const dispatch = useDispatch()

    const editInputRef = useRef()
    // 0 or the id of edit view
    let token
    if (localStorage.getItem("data") !== 'undefined' && localStorage.getItem("data") !== null) {
        token = JSON.parse(localStorage.getItem('data')).token;
    }
    const [, , sendRequest] = useFetch()

    function triggerFetchComments(){
        props.setTriggerFetchComments()
    }
    function editComment() {

        // #NOte_case check against token,send value schema
        if (token !== undefined && token != null && editInputRef.current.value !== '')

            sendRequest(`https://brieflynews.runasp./api/v1/CommentsArticle/EditCommentArticle?text=${editInputRef.current.value}&commentId=${props?.data?.id}`, {
                method: 'PUT', name: 'PUTeditComment', token: token,onSucceed:()=>triggerFetchComments()
            });


        else if (editInputRef.current.value !== '') {
            dispatch(actions.setError(`Comment cannot be empty`))

        }


    }
    function showEditView(intialText) {
        // #NOte_case intial comment data
        setEditCommentView(props?.data?.id)

        editInputRef.current.value = intialText

    }
    function deleteComment() {
        if (token !== undefined || token != null)

            sendRequest(`https://brieflynews.runasp.net/api/v1/CommentsArticle/DeleteCommentArticle/${props?.data?.id}`, {
                method: 'DELETE', name: 'deleteComment', token: token,onSucceed:()=>triggerFetchComments()
            });
    }


    // like comment
    // comment a comment
    // comment a comment

    return (
        <div className='globalComment'>
            {/* #NOTE_CASE edit /show comment */}
            {
                editCommentView === props?.data?.id
                    ?
                    <div className='editCommentParent'>
                        <input type='text' ref={editInputRef} />
                        <button onClick={() => { editComment(props?.data?.id) }}>Submit</button>

                    </div>
                    :
                    <p>{props.data.text}</p>

            }
            <p>{props.data.postedDate}</p>
            <p>{props.data.likes}</p>
            <p>{props.data.userName}</p>
            {props.data.replies && <p onClick={() => setShowReplies(true)}> show replies</p>}


            {showReplies && <div className='localComment'>
                {
                    props.replies.map((item, idx) => {
                        return (
                            <div className='localComment'>
                                {
                                    editCommentView === props?.data?.id
                                        ?
                                        <div className='editCommentParent'>
                                            <input type='text' ref={editInputRef} />
                                            <button onClick={() => { editComment(item?.id) }}>Submit</button>

                                        </div>
                                        :
                                        <p>{typeof (item) === 'string' ? item : 'objectComment'}</p>
                                    //  #edit


                                }
                                <div className='globalCommentActions'>

                                    <span onClick={() => showEditView('test text')}>edit</span>
                                    {/* #edit */}
                                    <span onClick={() => deleteComment(item?.id)}>delete</span>
                                    <span>like it </span>
                                    <span>comment </span>


                                </div>

                            </div>

                        )
                    })
                }


            </div>}


            <div className='globalCommentActions'>

                <span onClick={() => showEditView('test text')}>edit</span>
                <span onClick={() => deleteComment(props?.data?.id)}>delete</span>
                <span>like it </span>
                <span>comment </span>

            </div>

        </div>)
}

export default Comment