import React from 'react'
import useClip from '../hooks/useClip'

const Clip = () => {
  const [text, setText] = React.useState<string>('')
  const [read, copy] = useClip()

  const handleCopy = async () => {
    await copy(text)
  }
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button type='button' onClick={handleCopy}>
        copy text
      </button>
      <div>{read}</div>
    </div>
  )
}

export default Clip
