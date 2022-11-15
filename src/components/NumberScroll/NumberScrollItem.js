import { v4 as uuidV4 } from 'uuid'

const NumberScrollItem = (props) => {
  const numbers = new Array(10)
    .fill(null)
    .map((_, index) => index)
    .concat(0)
  return (
    <div className='number-scroll__stage'>
      <div className='number-scroll__gimmick '>
        {numbers.map((number) => (
          <div key={uuidV4()}>{number}</div>
        ))}
      </div>
    </div>
  )
}

export default NumberScrollItem
