import { useState, useEffect } from "react";

function TouchCursor() {
  const [touchPosition, setTouchPosition] = useState({ x: -100, y: -100 });
  const [isTouching, setIsTouching] = useState(false);

  const handleTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0];
    setTouchPosition({ x: touch.clientX, y: touch.clientY });
    setIsTouching(true);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isTouching) {
      const touch = e.touches[0];
      setTouchPosition({ x: touch.clientX, y: touch.clientY });
    }
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
    // Move the cursor off-screen when not touching
    setTouchPosition({ x: -100, y: -100 });
  };

  useEffect(() => {
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isTouching]);

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-transform duration-50 ease-out ${
        isTouching ? "block" : "hidden"
      }`}
      style={{
        left: touchPosition.x - 16, // We still need these in style
        top: touchPosition.y - 16, // as they're dynamic values
      }}
    >
      <img src="/cursor-bag.png" width="32" height="32" />
    </div>
  );
}

export default TouchCursor;
