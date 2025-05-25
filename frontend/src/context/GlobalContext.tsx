import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "../services/api";

interface Card {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
}

interface Tag {
  name: string;
}

interface GlobalContextType {
  cards: Card[];
  tags: Tag[];
}

export const GlobalContext = createContext<GlobalContextType>({
  cards: [],
  tags: [],
});

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [cards, setCards] = useState<Card[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    api.get<Card[]>("/cards").then((res) => setCards(res.data));
    api.get<Tag[]>("/tags").then((res) => setTags(res.data));
  }, []);

  return (
    <GlobalContext.Provider value={{ cards, tags }}>
      {children}
    </GlobalContext.Provider>
  );
}
