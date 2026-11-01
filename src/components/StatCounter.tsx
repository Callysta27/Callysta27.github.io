import React, { useEffect, useState, useRef } from 'react';

interface StatCounterProps {
  value: string;
  label: string;
  sublabel?: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({ value, label, sublabel }) => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayValue(value);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Parse numeric part and suffix
          // Examples: "3,82", "8+", "4×", "11M+"
          const cleanVal = value.trim();
          
          if (cleanVal === '3,82') {
            const start = 0;
            const end = 3.82;
            const duration = 1200;
            const startTime = performance.now();

            const step = (now: number) => {
              const progress = Math.min((now - startTime) / duration, 1);
              const current = start + (end - start) * easeOutExpo(progress);
              setDisplayValue(current.toFixed(2).replace('.', ','));
              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setDisplayValue('3,82');
              }
            };
            requestAnimationFrame(step);
          } else if (cleanVal === '8+') {
            animateInteger(8, '+', 1000);
          } else if (cleanVal === '4×') {
            animateInteger(4, '×', 1000);
          } else if (cleanVal === '11M+') {
            animateInteger(11, 'M+', 1400);
          } else {
            setDisplayValue(value);
          }
        }
      },
      { threshold: 0.3 }
    );

    function animateInteger(target: number, suffix: string, duration: number) {
      const startTime = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const current = Math.floor(target * easeOutExpo(progress));
        setDisplayValue(`${current}${suffix}`);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setDisplayValue(`${target}${suffix}`);
        }
      };
      requestAnimationFrame(step);
    }

    function easeOutExpo(x: number): number {
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    }

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
    };
  }, [value, hasAnimated]);

  return (
    <div
      ref={elementRef}
      className="group relative p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 transition-all duration-300 hover:shadow-lg hover:shadow-[#58A6FF]/5 hover:border-[#58A6FF]/40"
    >
      <div className="flex flex-col">
        <span className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white tabular-nums group-hover:text-[#58A6FF] transition-colors">
          {displayValue}
        </span>
        <span className="mt-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
          {label}
        </span>
        {sublabel && (
          <span className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            {sublabel}
          </span>
        )}
      </div>
    </div>
  );
};
