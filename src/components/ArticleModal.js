import React from 'react'


function ArticleModal({ data, resetArticleData }) {
    console.log('ArticleModal .... ')
    console.log(data)
    return (
        <>
            <div
                style={{

                    width: '100vw',
                    height: '100vh',
                    position: 'fixed',
                    zIndex: '400',
            }}
                className="receive_click_div_helper"
                onClick={() => {
                    console.log('clicked wrapper');
                    resetArticleData('')//close modal

                }}
            >

            </div>

            <div
                style={
                    {
                        backgroundColor: 'rgb(74, 67, 67)',
                        width: '600px',
                        height: '300px',
                        zIndex:'500'
                        , position: 'fixed',
                        //-half width
                       
                        left: 'calc(50% - 300px )',
                        //-half height
                       
                        top: 'calc(50% - 150px )',
                        borderRadius: '20px'

                    }
                }

            >

                <p>id:{data.id}</p>
                <p>title:{data.title}</p>
                <p>description: {data.description}</p>
                <p>category:{data.category}</p>
                <p>summary:{data.summary}</p>
                <p>image:{data.link}</p>
                <p>image:{data.image}</p>
                
 
             </div >
        </>
    )
}

export default ArticleModal