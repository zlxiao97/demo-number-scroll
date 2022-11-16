import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidV4 } from 'uuid'
import NumberScrollItem from './NumberScrollItem'
import SymbolItem from './SymbolItem'
import { isNumber } from '../../utils/utils'
import useNumberScroll from './hooks/useNumberScroll'
import './number-scroll.css'

const NumberScroll = (props) => {
  const numbers = String(props.number).split('')

  const ref = useNumberScroll(
    {
      duration: props.duration,
    },
    [props.number]
  )

  return (
    <div className='number-scroll' ref={ref}>
      {numbers.map((item) =>
        isNumber(item) ? (
          <NumberScrollItem key={uuidV4()} value={+item} />
        ) : (
          <SymbolItem key={uuidV4()} value={item} />
        )
      )}
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
