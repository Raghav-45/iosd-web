import { useEffect, useState } from 'react';
export const useIsMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }
    , [breakpoint]);
    return isMobile;
};

export const useIsTablet = (minBreakpoint = 768, maxBreakpoint = 1024) => {
    const [isTablet, setIsTablet] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsTablet(window.innerWidth >= minBreakpoint && window.innerWidth <= maxBreakpoint);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }
    , [minBreakpoint, maxBreakpoint]);
    return isTablet;
};

export const useIsDesktop = (breakpoint = 1024) => {
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > breakpoint);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }
    , [breakpoint]);
    return isDesktop;
};
