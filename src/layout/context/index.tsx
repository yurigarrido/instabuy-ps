import constate from 'constate'
import { useMemo, useState, useCallback } from 'react'

function useLayout() {
  const [isLoading, setIsLoading] = useState(false)

  const loading = useCallback(() => {
    setIsLoading(true)
  }, [])

  const loaded = useCallback(() => {
    setIsLoading(false)
  }, [])

  return useMemo(
    () => ({
      isLoading,
      loaded,
      loading,
    }),
    [isLoading, loaded, loading],
  )
}
export const [LayoutProvider, useLayoutContext] = constate(useLayout)
