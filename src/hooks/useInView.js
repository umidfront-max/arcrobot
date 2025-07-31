// hooks/useInView.js
import { useEffect, useState, useRef } from "react";

export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // faqat bir marta ishlaydi
        }
      },
      { threshold: 0.2, ...options }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}
