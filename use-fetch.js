import { useState, useEffect } from 'react'

export default function useFetch(url) {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  async function getData() {
    const response = await fetch(url)
    const data = await response.json()
    setData(data)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [url])

  return { loading, data }
}
