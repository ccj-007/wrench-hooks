import useCallbackState from '../hooks/useCallbackState'

export default function CallbackState() {
  const [state, setState] = useCallbackState<number>(0)
  const addCount = () => {
    setState(
      (pre: number) => {
        return pre + 1
      },
      (v: number) => {
        console.log('new', v)
      }
    )
  }
  return <button onClick={addCount}>score + 1, current: {state}</button>
}
