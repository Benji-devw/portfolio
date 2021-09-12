import { useEffect, useState } from 'react';
export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light')
  };

  useEffect(() => {
    if (window.localStorage.getItem('theme') === null) {
      window.localStorage.setItem('theme', 'light')
    }
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme)
  }, []);
  return [theme, themeToggler]
};
