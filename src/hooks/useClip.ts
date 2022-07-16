/**
 * @description 剪贴板
 */
import { useState } from 'react'

export default function useClip(): [string, (str: string) => void] {
  const [text, setText] = useState('')

  async function copy(str: string) {
    await navigator.clipboard.writeText(str)
    let res = await navigator.clipboard.readText()
    setText(res)
  }

  return [text, copy]
}
