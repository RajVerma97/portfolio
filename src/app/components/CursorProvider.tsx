"use client";

import { createContext, useState, Dispatch, SetStateAction } from "react";

// Define a type for the cursor setter function
type CursorSetter = Dispatch<SetStateAction<string>>;

// Create the context with the appropriate types
export const CursorContext = createContext<[string, CursorSetter] | []>([]);

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [cursorType, setCursorType] = useState<string>("default");

  return (
    <CursorContext.Provider value={[cursorType, setCursorType]}>
      {children}
    </CursorContext.Provider>
  );
};
