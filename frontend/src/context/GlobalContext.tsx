import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "../services/api";

interface Card {
  id: number;
  title: string;
  imageUrl: string;
}

interface GlobalContextType {
  cards: Card[];
}

export const GlobalContext = createContext<GlobalContextType>({ cards: [] });

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    api.get<Card[]>("/cards").then((res) => setCards(res.data));
  }, []);

  return (
    <GlobalContext.Provider value={{ cards }}>
      {children}
    </GlobalContext.Provider>
  );
}
