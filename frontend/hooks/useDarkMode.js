import { useState } from 'react'
import useLocalStorage from './useLocalStorge';

const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode",initialValue)
    return [darkMode, setDarkMode];
    }

    export default useDarkMode;