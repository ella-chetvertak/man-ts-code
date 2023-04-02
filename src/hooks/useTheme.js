import { useLayoutEffect, useState } from "react";

export const useTheme = () => {
    let themeLocal = localStorage.getItem('theme') 
    const [theme, setTheme] = useState(themeLocal === 'light' ? 'light' : 'dark')

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return { theme, setTheme }
}

