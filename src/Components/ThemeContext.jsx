import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [isDarkMode, setDarkMode] = useState(false);

  
  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = 'var(--black)';
    } else {
      document.body.style.backgroundColor = 'var(--white)';
    }
  }, [isDarkMode]);

  
  
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
