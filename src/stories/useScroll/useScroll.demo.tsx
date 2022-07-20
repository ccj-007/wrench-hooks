import useScroll from '../../hooks/useScroll'

const Scroll = () => {
  const { x, y } = useScroll()
  return (
    <div>
      x: {x} y: {y}
    </div>
  )
}

export default Scroll
