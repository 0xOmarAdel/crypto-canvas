import { useCallback, useEffect, useState } from "react";

const use3DHover = (ref, { x = 0, y = 0, z = 0 }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback(
    (e) => {
      const { offsetWidth: width, offsetHeight: height } = ref.current;
      const { clientX, clientY } = e;

      const x = (clientX - width / 2) / width;
      const y = (clientY - height / 2) / height;

      setCoords({ x, y });
    },
    [ref]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  useEffect(() => {
    const { current } = ref;

    current.addEventListener("mousemove", handleMouseMove);
    current.addEventListener("mouseenter", handleMouseEnter);
    current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      current.removeEventListener("mousemove", handleMouseMove);
      current.removeEventListener("mouseenter", handleMouseEnter);
      current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseEnter, handleMouseLeave, handleMouseMove, ref]);

  const { x: xCoord, y: yCoord } = coords;

  const xTransform = isHovering ? xCoord * x : 0;
  const yTransform = isHovering ? yCoord * y : 0;
  const zTransform = isHovering ? z : 0;

  const transform = `perspective(1000px) rotateX(${yTransform}deg) rotateY(${-xTransform}deg) translateZ(${zTransform}px)`;
  const transition = isHovering ? "all 0.1s ease" : "all 0.2s ease";

  return { transform, transition };
};

export default use3DHover;
