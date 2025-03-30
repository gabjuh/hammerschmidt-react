import { useEffect, useState } from 'react';

const PASSWORD_KEY = "sitePassword"; // LocalStorage key
const CORRECT_PASSWORD = "LikeSchützOnSpeed";

const PasswordProtectedApp = ({ children }: { children: React.ReactNode }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedPassword = localStorage.getItem(PASSWORD_KEY);

    if (storedPassword === CORRECT_PASSWORD) {
      setIsAuthenticated(true); 
      return;
    }

    const userPassword = window.prompt("Password:");

    if (userPassword === CORRECT_PASSWORD) {
      localStorage.setItem(PASSWORD_KEY, CORRECT_PASSWORD);
      setIsAuthenticated(true);
    } else {
      window.location.href = "https://www.google.com";
    }
  }, []);

  return isAuthenticated ? <>{children}</> : null;
};

export default PasswordProtectedApp;
