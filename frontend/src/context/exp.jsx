import { createContext, useContext, useState } from "react";

const ExpLevelContext = createContext();

export const ExpLevelProvider = ({ children }) => {
  const [exp, setExp] = useState(0);
  const [level, setLevel] = useState(1);

  const addExp = (amount) => {
    setExp((prevExp) => {
      const newExp = prevExp + amount;
      const newLevel = Math.floor(newExp / 100) + 1; // Level up every 100 exp
      setLevel(newLevel);
      return newExp;
    });
  };

  return (
    <ExpLevelContext.Provider value={{ exp, level, addExp }}>
      {children}
    </ExpLevelContext.Provider>
  );
};

export const useExpLevel = () => {
  return useContext(ExpLevelContext);
};
