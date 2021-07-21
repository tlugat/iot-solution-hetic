import { useState, useEffect, useContext, createContext } from "react";

export const breakpoints = {
  sm:   580,   // small
  m:    768,   // medium
  l:    1024,  // large
  xl:   1200,  // xlarge
  xxl:  1400,  // xxlarge
  xxxl: 1900,  // xxxlarge
}

const viewportContext = createContext({});

export const ViewportProvider = ({ children }) => {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  /* Now we are dealing with a context so we store the values in the
     value of the Provider */
  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

export const useViewport = () => {
  /* We can use the "useContext" Hook to acccess a context from within
     another Hook, remember, Hooks are composable! */
  const { width, height } = useContext(viewportContext);
  return { width, height, breakpoints };
}
