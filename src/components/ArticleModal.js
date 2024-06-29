import React, { useState } from 'react';
import '../styles/SumWindow.css';
import briefimg from '../assets/Eo_circle_red_white_letter-b.svg'



function ArticleModal({ data, setArticleModalData }) {
    const [showSummary, setshowSummary] = useState(false)
    //article data in data.data
    console.log(`🖌️ ArticleModal`) // #debug 
    console.log(data) // #debug 

    return (
        <>
            <div
                style={{

                    width: '100vw',
                    height: '100vh',
                    position: 'fixed',
                    cursor: 'pointer',
                    zIndex: '800',
                    backgroundColor: 'rgb(171, 171, 171)',
                    opacity: '0.8'

                }}
                className="receive_click_div_helper"

                onClick={() => {
                    console.log('clicked wrapper');
                    setArticleModalData((old) => {
                        if (old !== '')
                            return ''



                    })//close modal

                }}
            >
            </div>

            <div className='sumwindow'>
                {/* <div className="close-button"
                    onClick={() => {
                        console.log('clicked close button');
                        setArticleModalData((old) => {
                            if (old !== '')
                                return ''


                        })//close modal

                    }}
                >
                    <FontAwesomeIcon icon={faTimes} id="X" />
                </div> */}

                {data?.data &&
                    <> <div style={{
                        borderBottom: '1px solid rgb(50, 45, 45)',
                        width: '100%'
                    }}>

                        {/* categories */}

                        <span style={{
                            position: 'absolute',
                            top: '20px',
                            left: '10px',
                            color: '#eaeaea',
                            zIndex: '153',
                            backgroundColor: '#b33434',
                            padding: '10px',
                            fontWeight: '700',
                            borderRadius: '30px',

                        }}>{data.data.category || 'No Categories'}</span>


                        {/* creation */}
                        <span style={{

                            position: 'absolute',
                            top: '20px',
                            right: '10px',
                            color: '#eaeaea',
                            zIndex: '153',
                            backgroundColor: '#b33434',
                            padding: '10px',
                            fontWeight: '700',
                            borderRadius: '30px',
                        }}>{data.data.createdAt.match(/\d+-\d+-\d+/)}</span>
                        <img style={{
                            maxHeight: '400px',
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                            opacity: '0.7'
                            , borderRadius: '20px'
                        }}
                            

                            src={data.data.image || data?.data?.thumbnail || briefimg}
                            alt={data.data.description}

                        />
                    </div>
                        <div className="content">
                            {/* link title */}
                            {/* #Note_case fallback image if err */}


                            <div style={{ display: 'flex' }}>
                                <span className={` articelTab ${showSummary ? '' : 'selectedTab'}`} onClick={() => { setshowSummary(false) }} >description</span>
                                <span className={`articelTab  ${!showSummary ? '' : 'selectedTab'}`} onClick={() => { setshowSummary(true) }}>Summary</span>
                            </div>
                            <p
                                style={{
                                    fontFamily: 'roboto,sans-serif',
                                    textDecoration: 'none',
                                    color: 'whitesmoke',
                                    fontSize: '27px',
                                    fontWeight: 'bold'
                                }}  >
                                {data.data.title
                                }                    </p>

                            {/* description */}
                            {!showSummary && <div style={{
                                color: 'beige',
                                marginLeft: '3rem',
                                fontSize: '20px',
                                fontWeight: 'lighter'
                            }} dangerouslySetInnerHTML={{ __html: data.data.description }}>



                            </div>
                            }
                            {/* summary */}
                            {showSummary &&
                                <div style={{
                                    display: 'flex',
                                    fontSize: '20px',
                                    placeContent: 'center',
                                    /* border-left: aliceblue s,lid 1px; */
                                    color: 'burlywood',
                                    fontWeight: '700',
                                }} >

                                    {/* if first not fond display second #Note_case fallback render */}
                                    <p className='p_summarization'> {data.data.summarized || 'no summarization Available'} </p>


                                </div>
                            }
                        </div></>}
                <button style={{ marginTop: '20px', marginBottom: '20px' }} className='Full-Article-button'>
                    <a target='_blank' rel="noreferrer" href={`${data.data.link}`}>
                        <svg className='Full-Article' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <g fill="currentColor">
                                <path d="M14.5 14.5v-3.25a.5.5 0 0 1 1 0V15a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h3.75a.5.5 0 0 1 0 1H5.5v9h9Z" />
                                <path d="M10.354 10.354a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708.708l-5 5Z" />
                                <path d="M15.5 8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 1 0v3.5Z" />
                                <path d="M11.5 5.5a.5.5 0 0 1 0-1H15a.5.5 0 0 1 0 1h-3.5Z" />
                            </g>
                        </svg>
                    </a>
                </button>
            </div >


        </>
    );
}

export default ArticleModal;
