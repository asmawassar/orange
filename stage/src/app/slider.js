import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 10000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div style={{ overflow: "hidden", position: "relative", }}>
      <div
        style={{
          display: "flex",
          transition: "transform 0.5s ease-out",
          transform: `translateX(-${curr * 100}%)`,
          
        }}
      >
        {slides}
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "4px",
        }}
      >
        <button
          onClick={prev}
          style={{
            padding: "1px",
            borderRadius: "50%",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            color: "#333",
            cursor: "pointer",
          }}
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          style={{
            padding: "1px",
            borderRadius: "50%",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            color: "#333",
            cursor: "pointer",
          }}
        >
          <ChevronRight size={40} />
        </button>
      </div>
      <div style={{ position: "absolute", bottom: "4px", right: 0, left: 0 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2px" }}>
          {slides.map((_, i) => (
            <div
              key={i}
              style={{
                transition: "all 0.5s",
                width: curr === i ? "16px" : "12px",
                height: curr === i ? "16px" : "12px",
                backgroundColor: "#fff",
                borderRadius: "50%",
                
                opacity: curr === i ? 1 : 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
