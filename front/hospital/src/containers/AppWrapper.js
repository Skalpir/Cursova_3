import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'

function AppWrapper({ children }) {
  return (
    <div className="app">
      <Header />
      <main>{children}</main>
    </div>
  )
}

AppWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default AppWrapper