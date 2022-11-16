import { useRef } from 'react'
import gsap from 'gsap'
import { min } from 'lodash'
import useGSAP from './useGSAP'
import { getDuration, getScrollSpeed } from '../../../utils/utils'

const COUNT_OF_NUMBERS = 10 // 隐藏在舞台外的数字个数
export const HEIGHT_PER_NUMBER = 32 // 每个数字所占高度
const ONE_LAP = HEIGHT_PER_NUMBER * COUNT_OF_NUMBERS // 列表滚动一圈的位移
const ENDING_ANIMATION_PERCENT = 0.25 // 收尾动画的时间占比

const useNumberScroll = ({ duration }, dependencies = []) => {
  const ref = useRef()
  const startTime = useRef()
  const endingDuration = min([duration * ENDING_ANIMATION_PERCENT, 2]) // 结束动画最多播放 2 秒
  const loopDuration = duration - endingDuration

  const endAnimate = (ctx) => {
    startTime.current = Number.POSITIVE_INFINITY
    ctx.pause()
    ctx.targets().forEach((ele) => {
      const value = +ele.dataset.value
      const valueOffset = value === 0 ? 10 : value
      gsap.set(ele, {
        css: {
          filter: '',
        },
      })
      gsap.fromTo(
        ele,
        {
          y: -((valueOffset - 1) * HEIGHT_PER_NUMBER), // 目标数字的上一个数字
        },
        {
          y: -(valueOffset * HEIGHT_PER_NUMBER),
          duration: endingDuration,
          ease: 'elastic.out(1, 0.3)',
        }
      )
    })
  }

  const animate = () => {
    const gimmicSelector = '.number-scroll__gimmick--scroll'
    gsap.fromTo(
      gimmicSelector,
      { y: 0 },
      {
        y: -ONE_LAP,
        duration: getDuration(ONE_LAP, getScrollSpeed(HEIGHT_PER_NUMBER)),
        ease: 'none',
        repeat: -1, // 无限重复
        onStart() {
          startTime.current = Date.now()
          // 添加模糊滤镜
          gsap.set(gimmicSelector, {
            css: {
              filter: 'blur(1px)',
            },
          })
        },
        onUpdate() {
          const isEnd = Date.now() - startTime.current >= loopDuration * 1000
          if (isEnd) endAnimate(this)
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
