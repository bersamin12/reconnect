import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>page - ServeQuest</title>
        <meta property="og:title" content="page - ServeQuest" />
      </Helmet>
      <div className="page-signup">
        <span className="page-text">Error 404</span>
        <span className="page-text1">ServeQuest</span>
        <img src="/toast1-500w.png" alt="image" className="page-image" />
      </div>
    </div>
  )
}

export default Page
