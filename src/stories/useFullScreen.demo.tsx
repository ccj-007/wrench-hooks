import { useRef, useState } from 'react'
import useFullscreen from '../hooks/useFullScreen'

const FullScreen = () => {
  const ref = useRef(null)
  const [show, setShow] = useState(false)
  const isFullscreen = useFullscreen(ref, show, () => setShow(false))

  return (
    <div ref={ref} style={{ backgroundColor: 'white' }}>
      <div>
        <button onClick={() => setShow(!show)}>Toggle</button>
      </div>
      <div>{isFullscreen ? 'Fullscreen' : 'Not fullscreen'}</div>

      <video src='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' autoPlay />
    </div>
  )
}

export default FullScreen
