import React from 'react'


function ChannelModal({ data, setModalData }) {
    // console.log(data)
    return (
        <>
            <div
                style={{

                    width: '100vw',
                    height: '100vh',
                    position: 'fixed',
                    zIndex: '10'
                }}
                className="receive_click_div_helper"
                onClick={() => {
                    console.log('clicked wrapper');
                    setModalData('')//close modal

                }}
            >

            </div>

            <div
                style={
                    {
                        backgroundColor: 'rgb(74, 67, 67)',
                        width: '600px',
                        height: '300px'
                        , position: 'fixed',
                        //-half width

                        left: 'calc(50% - 300px )',
                        //-half height

                        top: 'calc(50% - 150px )',
                        borderRadius: '20px'

                    }
                }

            >

                <p style={{


                    fontSize: '20px'
                    , lineHeight: '1.5',
                    paddingLeft: '10rem',
                    paddingTop: '2rem'


                }}>
                    {data.description}

                </p>
                <a style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '40%'
                }} target='_blank' rel="noreferrer" href={`${data.link}`}><svg style={{
                    width: '4rem',
                    height: '4rem',

                }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><g fill="currentColor"><path d="M14.5 14.5v-3.25a.5.5 0 0 1 1 0V15a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h3.75a.5.5 0 0 1 0 1H5.5v9h9Z" /><path d="M10.354 10.354a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708.708l-5 5Z" /><path d="M15.5 8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 1 0v3.5Z" /><path d="M11.5 5.5a.5.5 0 0 1 0-1H15a.5.5 0 0 1 0 1h-3.5Z" /></g></svg></a>
            </div >
        </>
    )
}

export default ChannelModal