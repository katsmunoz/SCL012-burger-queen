import React from 'react'

import "./Layout.css"

const Layout = (props) => (<div className="layout">

  <div className="content">
    {/* eslint-disable-next-line react/prop-types */}
    {props.children}
  </div>
</div>)

export default Layout
