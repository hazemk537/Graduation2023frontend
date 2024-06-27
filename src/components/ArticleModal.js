import React from 'react';
import '../styles/SumWindow.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import briefimg from '../assets/Eo_circle_red_white_letter-b.svg'


function ArticleModal({ data, setArticleModalData }) {
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
                    opacity:'0.8'

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
                <div className="close-button"
                    onClick={() => {
                        console.log('clicked close button');
                        setArticleModalData((old) => {
                            if (old !== '')
                                return ''


                        })//close modal

                    }}
                >
                    <FontAwesomeIcon icon={faTimes} id="X" />
                </div>

                {data?.data &&
                    <div className="content">
                        {/* link title */}
                        <a rel="noreferrer"
                            style={{
                                fontFamily: 'roboto,sans-serif',
                                textDecoration: 'none',
                                color: 'rgb(202, 196, 196)',
                                fontSize: '27px',
                                fontWeight: 'bold'
                            }} href={`${data.data.link}`} target='_blank' >
                            {data.data.title
                            }                    </a>
                        {/* creation */}


                        <span>{data.data.createdAt}</span>
                        {/* img */}


                        {/* #Note_case fallback image if err */}
                        <img style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                            opacity: '0.7'
                        }}

                            src={data.data.image || data?.data?.thumbnail || briefimg}
                            alt={data.data.description}

                        />

                        {/* summary */}

                        <div style={{
                            display: 'flex',
                            justifyContent: 'center', alignContent: 'center'
                        }} >

                            <p style={{
                                fontFamily: 'fantasy',
                                fontSize: '15px',
                                fontWeight: 'bold'
                            }}>Summary </p>
                        </div>
                        <p> {data.data.summarized && 'no summarization Available'} </p>

                        {/* categories */}

                        <div style={{
                            display: 'flex', flexDirection: 'row', gap: '3px',
                            maxWidth: '100%', justifyContent: 'center', alignContent: 'center'
                        }}>
                            <span style={{
                                padding: '3px',
                                backgroundColor: 'rgb(148, 91, 91)'
                            }}>{data.data.category}</span>

                        </div>



                        <button className='Full-Article-button'>
                            <a target='_blank' rel="noreferrer" href={`${data.link}`}>
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
                    </div>}
            </div >

        </>
    );
}

export default ArticleModal;
