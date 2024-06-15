import { createContext, useContext } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const number = 7878;

  return <MyContext.Provider value={{ number }}>{children}</MyContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(MyContext);
};
