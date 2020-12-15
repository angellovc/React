import {useEffect, useState} from 'react'

function Message() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const {x, y} = mousePosition;

  useEffect(() => {
    const mouseMove = (event) => {
      setMousePosition({
        x: event.x,
        y: event.y
      });
      console.log(`x ${event.x} y ${event.y}`);
    }
    window.addEventListener('mousemove', mouseMove);
    return () => {
      console.log('mouse event dismounted')
      window.removeEventListener('mousemove', mouseMove);
    }
  }, [])
  return (
    <div>
      <h3>Mouse Coordinates</h3>
      <h4>x: {x} y: {y}</h4>
    </div>
  )
}

export default Message
