import React from 'react';
import '../styles/SumWindow.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


function ArticleModal({ data, setArticleModalData }) {
    console.log(`🖌️ ArticleModal`) // #debug 
    // console.log(data)

    return (
        <>
            <div
                style={{

                    width: '100vw',
                    height: '100vh',
                    position: 'fixed',
                    cursor: 'pointer',
                    zIndex: '800',
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
                        setArticleData(''); 
                    }}
                >
                    <FontAwesomeIcon icon={faTimes} id="X" />
                </div>
                
                <div className="content">
                    <p className='sum_p'>
                        {data.description}
                    </p>
                    
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
                </div>
            </div> 

        </>
    );
}

export default ArticleModal;
