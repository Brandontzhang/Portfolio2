import { useEffect, useState } from "react"

export const useInView = (options : any) => {
    const [isInView, setIsInView] = useState(false);
    const { root, ref } = options;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setIsInView(entry.isIntersecting);
            },
            { root: root ? root : null, rootMargin: '0px', threshold: .5}
        )

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        }
    }, []);

    return { ref, isInView };
}