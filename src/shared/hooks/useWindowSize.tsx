import { useState, useEffect } from 'react'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  const getDevice = () => {
    if (windowSize.width >= 1080) return 'bigdesktop'
    if (windowSize.width <= 1080 && windowSize.width > 768) return 'desktop'
    if (windowSize.width <= 768 && windowSize.width > 640) return 'tablet'
    return 'mobile'
  }

  const device = getDevice()

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({
        width: window?.innerWidth,
        height: window?.innerHeight,
      })

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return device
}
