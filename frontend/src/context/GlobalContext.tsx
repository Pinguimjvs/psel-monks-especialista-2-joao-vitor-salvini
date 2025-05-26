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
  loading: boolean;
}

export const GlobalContext = createContext<GlobalContextType>({
  cards: [],
  tags: [],
  loading: false,
});

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [cards, setCards] = useState<Card[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [cardsRes, tagsRes] = await Promise.all([
          api.get<Card[]>("/cards"),
          api.get<Tag[]>("/tags"),
        ]);
        setCards(cardsRes.data);
        setTags(tagsRes.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <GlobalContext.Provider value={{ cards, tags, loading }}>
      {children}
    </GlobalContext.Provider>
  );
}
