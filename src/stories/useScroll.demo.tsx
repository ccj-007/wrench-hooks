import useScroll from '../hooks/useScroll';

const Scroll = () => {
  let { x, y } = useScroll()
  return (
    <div>
      x: {x}  y: {y}
    </div>
  );
};

export default Scroll