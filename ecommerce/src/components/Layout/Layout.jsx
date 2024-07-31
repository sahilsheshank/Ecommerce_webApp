import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Layout({children ,userName}) {
  return (
    <>
        <Header userName={userName} />
            {children}
        <Footer/>
    </>
  )
}

export default Layout
