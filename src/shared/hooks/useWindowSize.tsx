import { useState, useEffect } from 'react'

export const useWindowSize = () => {
  const [device, setDevice] = useState('desktop')

  useEffect(() => {
    const getDevice = () => {
      if (window?.innerWidth >= 1080) return 'bigdesktop'
      if (window?.innerWidth <= 1080 && window?.innerWidth > 801)
        return 'desktop'
      if (window?.innerWidth <= 800 && window?.innerWidth > 640) return 'tablet'
      return 'mobile'
    }
    const handleResize = () => setDevice(getDevice())

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return device
}
