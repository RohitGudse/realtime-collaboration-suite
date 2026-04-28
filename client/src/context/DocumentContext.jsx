import { createContext, useState } from "react";

export const DocumentContext = createContext();

export const DocumentProvider = ({ children }) => {
  const [doc, setDoc] = useState("");

  return (
    <DocumentContext.Provider value={{ doc, setDoc }}>
      {children}
    </DocumentContext.Provider>
  );
};