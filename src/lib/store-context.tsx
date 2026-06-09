import { createContext, useContext, useState, ReactNode } from "react";

interface StoreContextType {
  url: string;
  setUrl: (url: string) => void;
  storeName: string;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [url, setUrl] = useState("");

  const storeName = url
    ? url.replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0].split(".")[0] || "Your Store"
    : "Your Store";

  return (
    <StoreContext.Provider value={{ url, setUrl, storeName: storeName.charAt(0).toUpperCase() + storeName.slice(1) }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStoreContext() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStoreContext must be used within a StoreProvider");
  }
  return context;
}
