import * as React from 'react'
import useClickOutside from '../../hooks/useClickOutside'

const ClickOutside = () => {
  let btnRef = React.useRef<HTMLButtonElement>(null)
  useClickOutside(btnRef, (e: Event) => {
    alert('我已经点击btnRef的dom元素的外面')
  })

  return <button ref={btnRef}>点外面试试</button>
}

export default ClickOutside
