import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../customHooks/useFetch';
import { actions } from '../redux/slices/NotifySlice';
import { useDispatch } from 'react-redux';
import AddcommentComment from './AddcommentComment';
import { jwtDecode } from 'jwt-decode';

function Comment(props) {
    const [likedComments, setLikedComments] = useState([])

    const [showReplies, setShowReplies] = useState(false)
    const [addcommitViewForm, setaddcommitViewForm] = useState(0)
    const [editCommentViewForm, seteditCommentViewForm] = useState(0)
    const dispatch = useDispatch()

    const editInputRef = useRef()
    // 0 or the id of edit view
    let token
    let userName
    if (localStorage.getItem("data") !== undefined && localStorage.getItem("data") !== null) {
        token = JSON.parse(localStorage.getItem('data')).token;
    } if (localStorage.getItem("userData") !== undefined && localStorage.getItem("userData") !== null) {
        userName = JSON.parse(localStorage.getItem('userData')).UserName;
    }

    const [, , sendRequest] = useFetch()

  
    function editComment(id) {

        // #NOte_case check against token,send value schema
        if (token !== undefined && token != null && editInputRef.current.value !== '')

            sendRequest(`https://brieflynews.runasp./api/v1/CommentsArticle/EditCommentArticle?text=${editInputRef.current.value}&commentId=${id}`, {
                method: 'PUT', name: 'PUTeditComment', token: token, onSucceed: () => {
                    props.setTriggerFetchComments((old)=>!old)
                    dispatch(actions.setSuccess(`Comment Edit Successfully`))

                }
            });


        else if (editInputRef.current.value !== '') {
            dispatch(actions.setError(`Comment cannot be empty`))

        }


    }

    function deleteComment() {
        if (token !== undefined || token != null)

            sendRequest(`https://brieflynews.runasp.net/api/v1/CommentsArticle/DeleteCommentArticle/${props?.data?.id}`, {
                method: 'DELETE', name: 'deleteComment', token: token, onSucceed: () => 
                    
                    props.setTriggerFetchComments((old)=>!old)


            });
    }



    function likeComment(id) {
        if (token !== undefined || token != null)

            sendRequest(`https://brieflynews.runasp.net/api/v1/CommentsArticle/AddLikeCommentArticle/${id}`, {
                method: 'POST', name: 'likeComment', token: token, onSucceed: () => {
                    // #NOTE_case to rerender component and show dislike/like

                    props.setTriggerFetchComments((old)=>!old)
                    setLikedComments(likedComments?.push(id))
                }
            });
    }

    function dislikeComment(id) {
        if (token !== undefined || token != null) {
            sendRequest(`https://brieflynews.runasp.net/api/v1/CommentsArticle/DeleteLikeCommentArticle/${id}}`, {
                method: 'POST', name: 'dislikeComment', token: token, onSucceed: () => {
                    // #NOTE_case to rerender component and show dislike/like

                    let newLikedArr = likedComments?.map((item) => item !== id)
                    // #NOte_case dislike after like ,means empty
                    setLikedComments(newLikedArr | [])


                    props.setTriggerFetchComments((old)=>!old)
                }
            });
        }
    }
    function sendcommentComment(text,id) {
        if (token !== undefined || token != null)

            sendRequest(`https://brieflynews.runasp.net/api/v1/CommentsArticle/AddLocalCommentArticle?text=${text}&articleId=${props.articleId}&parentcommentId=${id}`, {
                method: 'POST', name: 'commentComment', token: token, onSucceed: () =>
                    props.setTriggerFetchComments((old)=>!old)

            });
    }


    function authorizedEditing(commentUserName) {
        // console.log(userName);
        // console.log(commentUserName);
        if (commentUserName === userName)
            return true
        else
            return false


    }

    useEffect(() => {
        if (localStorage.getItem("likedComments") !== 'undefined' && localStorage.getItem("likedComments") !== null) {
            setLikedComments(JSON.parse(localStorage.getItem('likedComments')))
        }
    }, [])
    return (
        <div style={{backgroundColor:'GrayText'}}className='globalComment' key={props.id}>
            {/* #NOTE_CASE edit /show comment */}
            {
                editCommentViewForm === props?.data?.id
                    ?
                    <div className='editCommentParent'>
                        <input type='text' ref={editInputRef} />
                        <button onClick={() => { editComment(props?.data?.id) }}>Submit</button>

                    </div>
                    :
                    <p>{props?.data?.text}</p>


            }


            <p>{props.data.postedDate}</p>
            <p>{props.data.likes}</p>
            <p>{props.data.userName}</p>
            {props.data.replies && <p onClick={() => setShowReplies(true)}> show replies</p>}




            <div className='globalCommentActions'>

                {authorizedEditing(props?.data?.userName) && <>

                    <br />
                    <span onClick={() => {
                        seteditCommentViewForm(props?.data?.id)
                        // #NOte_case intial comment data when edit
                        editInputRef.current.value = props?.data?.title
                    }}>edit</span>
                    <br />

                    <span onClick={() => deleteComment(props?.data?.id)}>delete</span>


                </>}

                <span onClick={() => {
                    // /* #edit */
                    if (likedComments?.findIndex((item) => item === props?.data?.id) === -1) {
                        console.log(props?.data?.id);

                        likeComment(props?.data?.id)
                    }
                    else {
                        dislikeComment(props?.data?.id)
                    }

                }

                } > like/dislike
                </span>



                <span onClick={() => {
                    setaddcommitViewForm(props?.data?.id)
                }} >comment</span>


                {/* #NOTE_Case global comment id not local comment id */}
                {/* // #NOTE_CASE show field for specific element */}


            </div>


            {addcommitViewForm === props?.data?.id && <AddcommentComment  sendcommentComment={sendcommentComment} toggleEditView={setaddcommitViewForm} type={'localComment'} id={props.id} />}





        </div>)
}

export default Comment