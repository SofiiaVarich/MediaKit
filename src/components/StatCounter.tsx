"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  motion,
  useInView,
} from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatCounter({
  value,
  suffix = "",
  label,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;

    const duration = 1600;

    const animate = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      setCount(
        Math.floor(progress * value)
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      className="stat-counter"
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="stat-counter__number">
        {count}
        {suffix}
      </div>

      <div className="stat-counter__label">
        {label}
      </div>
    </motion.div>
  );
}
