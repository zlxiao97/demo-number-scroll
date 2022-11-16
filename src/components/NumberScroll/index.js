import React from 'react'
import PropTypes from "prop-types";
import NumberScrollItem from './NumberScrollItem'
import './number-scroll.css'

const NumberScroll = () => {
  return (
    <div className='number-scroll'>
      <NumberScrollItem />
    </div>
  )
}

NumberScroll.propTypes = {
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  duration: PropTypes.number,
}

NumberScroll.defaultProps = {
  number: 0,
  duration: 5,
}

export default NumberScroll
