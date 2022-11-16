import React from 'react'
import { v4 as uuidV4 } from 'uuid'
import { HEIGHT_PER_NUMBER } from './hooks/useNumberScroll'

const NumberScrollItem = (props) => {
  const numbers = new Array(10)
    .fill(null)
    .map((_, index) => index)
    .concat(0)
  return (
    <div className='number-scroll__stage'>
      <div
        className='number-scroll__gimmick number-scroll__gimmick--scroll'
        data-value={props.value}
        style={{
          transform: `translateY(-${props.value * HEIGHT_PER_NUMBER}px)`,
        }}
      >
        {numbers.map((number) => (
          <div key={uuidV4()}>{number}</div>
        ))}
      </div>
    </div>
  )
}

export default NumberScrollItem
