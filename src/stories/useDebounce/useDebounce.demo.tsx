import { ChangeEvent, useState } from 'react'
import useDebounce from '../../hooks/useDebounce'

const Debounce = () => {
  const [a, setA] = useState('')
  const [b, setB] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e && e.target && e.target.value) {
      setA(e.target.value)
    }
  }
  const [cancel] = useDebounce(
    () => {
      setB(a)
    },
    1000,
    [a]
  )
  // 5s后关闭
  setTimeout(() => {
    cancel()
  }, 5000)
  return (
    <>
      <input type='text' onChange={handleChange} />

      <div>input: {a}</div>
      <div>debounce result: {b}</div>
    </>
  )
}

export default Debounce
