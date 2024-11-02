import { useEffect, useState } from "react"

export const useFetch = <T = null>(fetchFunction: (params: any)=> void, params?: any) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null)

  const stringParams = params ? new URLSearchParams(params).toString() : ''

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        const result: any = await fetchFunction(params)
        setData(result)
      } catch (error: any) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    })();
  }, [fetchFunction, stringParams])

  return {data, isLoading, error}
}