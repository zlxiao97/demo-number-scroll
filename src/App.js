import React, { useState } from 'react'
import { SyncOutlined } from '@ant-design/icons'
import { Button, Radio, Statistic } from 'antd'
import { numberFormat } from './utils/utils'
import NumberScroll from './components/NumberScroll'
import './App.css'

const { Countdown } = Statistic

function App() {
  const [number, setNumber] = useState(1231232)
  const [duration, setDuration] = useState(5)
  const deadline = Date.now() + duration * 1000

  const random = () => {
    setNumber(Math.random() * 1000000)
  }

  const changeDuration = (e) => {
    setDuration(e.target.value)
  }

  return (
    <div className='App'>
      <div>
        <Radio.Group
          options={[
            { label: '3s', value: 3 },
            { label: '5s', value: 5 },
            { label: '10s', value: 10 },
          ]}
          onChange={changeDuration}
          value={duration}
          optionType='button'
          buttonStyle='solid'
        />
      </div>
      <Button type='primary' icon={<SyncOutlined />} onClick={random}>
        random
      </Button>
      <div>
        <Statistic title='The latest number is:' value={numberFormat(number)} />
      </div>
      <div>
        <Countdown title='Countdown' value={deadline} format='HH:mm:ss:SSS' />
      </div>
      <NumberScroll number={numberFormat(number)} duration={duration} />
    </div>
  )
}

export default App
