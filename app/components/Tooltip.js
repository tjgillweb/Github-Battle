import React from 'react'
import PropTypes from 'prop-types'
import Hover from './Hover'

const styles = {
  container: {
    position: 'relative',
    display: 'flex'
  },
  tooltip: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '160px',
    bottom: '100%',
    left: '50%',
    marginLeft: '-80px',
    borderRadius: '3px',
    backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
    padding: '7px',
    marginBottom: '5px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px',
  }
}

export default function Tooltip({ text, children }) {
    return (
      //Render props using children prop
      <Hover>
        {(hover) => (
          <div style={styles.container}>
            {hover === true && <div style={styles.tooltip}>{text}</div>}
            {children}
          </div>
        )}
      </Hover>

      //Render props using render prop
      // <Hover render={(hover) => {
      //   return (
      //     <div style={styles.container}>
      //        {hover === true && <div style={styles.tooltip}>{text}</div>}
      //        {children}
      //      </div>
      //   )
      // }}>
    )
}

Tooltip.propTypes = {
    text: PropTypes.string.isRequired,
    hover: PropTypes.bool.isRequired
}
