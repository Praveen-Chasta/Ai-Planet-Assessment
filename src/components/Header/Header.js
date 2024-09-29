import React from 'react'
import companyLogo from '../../images/company-logo.png';  
import '../../App.css'


function Header() {
  return (
    <header className='container d-flex flex-start'>
        <img src={companyLogo} alt="Company Logo" className='company-logo img-fluid'/>     
    </header>
  )
}


export default Header