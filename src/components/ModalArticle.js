import React from 'react'


function ModalArticle({ data }) {
    console.log(data)
    return (
        <div
            style={
                {
                    backgroundColor: 'rgb(74, 67, 67)',
                    width: '50vw'

                    ,
                    height: '50vh'
                    ,
                    position: 'fixed',
                    zIndex: 100,
                    top: '20%',
                    left: '20%',

                    borderRadius: '20px'


                }
            }

        >

            <p style={{
                 position: 'absolute', 
                 margin:'10%',
                 fontSize:'20px'
                 ,lineHeight:1.5


            }}>
                {data.content}

            </p>
            <a target='_blank' href={`${data.url}`}><svg style={{
                position: 'absolute',
                top: 0,
                width: '10%',
                height: '10%',

            }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><g fill="currentColor"><path d="M14.5 14.5v-3.25a.5.5 0 0 1 1 0V15a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h3.75a.5.5 0 0 1 0 1H5.5v9h9Z" /><path d="M10.354 10.354a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708.708l-5 5Z" /><path d="M15.5 8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 1 0v3.5Z" /><path d="M11.5 5.5a.5.5 0 0 1 0-1H15a.5.5 0 0 1 0 1h-3.5Z" /></g></svg></a>
        </div >
    )
}

export default ModalArticle