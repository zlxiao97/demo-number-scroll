import { useLayoutEffect } from 'react'
import gsap from 'gsap'

const useGSAP = ({ animate, ref, dependencies = [] }) => {
  return useLayoutEffect(() => {
    let ctx = gsap.context(animate, ref)
    return () => {
      ctx.revert()
    }
  }, dependencies)
}

export default useGSAP
