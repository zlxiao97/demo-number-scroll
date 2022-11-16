import { useRef } from 'react'
import gsap from 'gsap'
import useGSAP from './useGSAP'
import { getDuration, getScrollSpeed } from '../../../utils/utils'

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
        duration: getDuration(ONE_LAP, getScrollSpeed(HEIGHT_PER_NUMBER)),
        ease: 'none',
        repeat: -1, // 无限重复
        onStart() {
          // 添加模糊滤镜
          gsap.set(gimmicSelector, {
            css: {
              filter: 'blur(1px)',
            },
          })
        },
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
