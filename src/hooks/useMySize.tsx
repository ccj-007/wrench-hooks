import * as React from 'react'

type StateProps = [number, number]

const useMySize = () => {
  let ref = React.useRef<any>(window)
  let [state, setState] = React.useState<StateProps>()
  React.useEffect(() => {
    const eventSize = (e: any) => {
      setState([e.target.innerWidth, e.target.innerHeight])
    }
    let eventResize = window.addEventListener('resize', eventSize, false)

    return () => {
      window.removeEventListener(eventSize, false)
    }
  }, [])
  return state
}

export default useMySize
