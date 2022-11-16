/**
 * 关于滚动速度的计算：
 * 1. 假设一个数字从进场到离场需要3帧
 * 2. 从 24FPS / 30FPS / 60FPS 这几个常见帧率中选择一个作为平均运动速度
 * 3. 每个数字的高度 = 字体大小 * 行高
 * 4. 一帧需要运动的距离 = 数字的高度 / 从进场到离场需要的帧数
 * 5. 滚动速度 = 一帧需要运动的距离 / 一帧在指定 FPS 下对应的时间
 */
const getTime = (fps) => 1 / fps

export const getScrollSpeed = (heightPerNumber, FPS = 30) => {
  const FRAME_PER_NUMER = 3
  const heightPerFrame = heightPerNumber / FRAME_PER_NUMER
  const timePerFrame = getTime(FPS)

  return heightPerFrame / timePerFrame
}

export const getDuration = (s, v) => s / v

export const isNumber = (value) => /^\d$/g.test(value)

export const numberFormat = (number) =>
  Number(number).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
