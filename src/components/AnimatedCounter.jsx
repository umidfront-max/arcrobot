// components/AnimatedCounter.jsx
import { useEffect, useRef } from "react";
import { useInView } from "../hooks/useInView"; // bu siz yozgan custom hook
import { useMotionValue, animate } from "framer-motion";

export default function AnimatedCounter({ value, suffix = "", duration = 2 }) {
  const [ref, inView] = useInView();
  const count = useMotionValue(0);
  const spanRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration,
        onUpdate: (latest) => {
          if (spanRef.current) {
            spanRef.current.textContent =
              Math.round(latest).toLocaleString() + suffix;
          }
        },
      });

      return () => controls.stop();
    }
  }, [inView, value, suffix, duration]);

  return <span ref={(el) => {
    ref.current = el;
    spanRef.current = el;
  }} className="inline-block" />;
}
