import { useEffect, useState, useRef, useCallback } from 'react';

export const useCountdown = (initialValue: number, interval = 1000) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [countdown, setCountdown] = useState(initialValue);

  const startCountdown = useCallback(() => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev > 0) {
          return prev - interval;
        }
        clearInterval(intervalRef.current!);
        return prev;
      });
    }, interval);
  }, [interval]);

  const resetCountdown = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setCountdown(initialValue);
  }, [initialValue]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [interval]);

  return { countdown, startCountdown, resetCountdown };
};
