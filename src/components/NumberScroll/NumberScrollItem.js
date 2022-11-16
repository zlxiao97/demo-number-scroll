import React from 'react'
import { v4 as uuidV4 } from 'uuid'
import useNumberScroll from './hooks/useNumberScroll'

const NumberScrollItem = (props) => {
  const ref = useNumberScroll({
    duration: 5,
  })
  const numbers = new Array(10)
    .fill(null)
    .map((_, index) => index)
    .concat(0)
  return (
    <div className='number-scroll__stage' ref={ref}>
      <div className='number-scroll__gimmick' data-value={0}>
        {numbers.map((number) => (
          <div key={uuidV4()}>{number}</div>
        ))}
      </div>
    </div>
  )
}

export default NumberScrollItem
