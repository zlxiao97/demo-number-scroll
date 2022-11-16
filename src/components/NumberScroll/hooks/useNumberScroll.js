import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const COUNT_OF_NUMBERS = 10 // 隐藏在舞台外的数字个数
const HEIGHT_PER_NUMBER = 32 // 每个数字所占高度
const ONE_LAP = HEIGHT_PER_NUMBER * COUNT_OF_NUMBERS // 列表滚动一圈的位移

const useNumberScroll = (dependencies = []) => {
  const ref = useRef()

  const animate = () => {
    let ctx = gsap.context(() => {
      const gimmicSelector = '.number-scroll__gimmick'
      gsap.fromTo(
        gimmicSelector,
        { y: 0 },
        {
          y: -ONE_LAP,
          duration: 3,
          ease: 'none',
        }
      )
    }, ref)
    return () => {
      ctx.revert()
    }
  }

  useLayoutEffect(animate, dependencies)
  
  return ref
}

export default useNumberScroll
