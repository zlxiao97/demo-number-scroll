import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import useGSAP from './useGSAP'

const COUNT_OF_NUMBERS = 10 // 隐藏在舞台外的数字个数
const HEIGHT_PER_NUMBER = 32 // 每个数字所占高度
const ONE_LAP = HEIGHT_PER_NUMBER * COUNT_OF_NUMBERS // 列表滚动一圈的位移

const useNumberScroll = (dependencies = []) => {
  const ref = useRef()

  const animate = () => {
    const gimmicSelector = '.number-scroll__gimmick'
    gsap.fromTo(
      gimmicSelector,
      { y: 0 },
      {
        y: -ONE_LAP,
        duration: 3,
        ease: 'none',
        repeat: -1, // 无限重复
      }
    )
  }

  useGSAP({
    animate,
    ref,
    dependencies,
  })

  return ref
}

export default useNumberScroll
