import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development'

function Protected({children,showLoginPopupfn}) {
    let token=localStorage.getItem('token')
    // #todo_2 token validation
    
    if (token)
      return children

      else {
        showLoginPopupfn(true);
         return <Navigate to="/"/>;
}}

export default Protected