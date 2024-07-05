import React, { useEffect, useState } from 'react'
import '../styles/common.css'
import AddComment from './AddComment'
import GlobalComment from './GlobalComment'
import useFetch from '../customHooks/useFetch'
import Comment from '../../Comment'

function Comments({ articleId }) {
    let [comments, , sendRequest] = useFetch()
    const [triggerFetchComments, setTriggerFetchComments] = useState()


    useEffect(() => {
        let token;

        if (localStorage.getItem("data") !== 'undefined' && localStorage.getItem("data") !== null) {
            token = JSON.parse(localStorage.getItem('data')).token;

            sendRequest(`https://brieflynews.runasp.net/api/v1/CommentsArticle/GetAllCommentsArticle/${articleId}`, {
                method: 'get', name: 'GETComments', token: token,
            }, [triggerFetchComments]);

        }
    })
    return (
        <div className='commentsParent'>
            <AddComment articleId={articleId} />


            {
                comments?.data?.map((item) => {
                    return (
                        <Comment
                            setTriggerFetchComments={setTriggerFetchComments}
                            id={item.id}
                            data={item}
                        />
                    )
                })

            }



        </div>
    )
}

export default Comments