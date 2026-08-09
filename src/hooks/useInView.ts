import { useEffect, useState, useRef, type RefObject } from 'react';

export interface UseInViewOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export const useInView = (
  options: UseInViewOptions = {}
): [RefObject<HTMLDivElement | null>, boolean] => {
  const { triggerOnce = true, threshold = 0.1, root = null, rootMargin = '0px' } = options;
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);

        if (entry.isIntersecting && triggerOnce) {
          observer.unobserve(currentRef);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef && !triggerOnce) {
        observer.unobserve(currentRef);
      }
    };
  }, [triggerOnce, threshold, root, rootMargin]);

  return [ref, isInView];
};
