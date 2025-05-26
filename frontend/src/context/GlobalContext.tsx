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

interface SecurityNumbers {
  num1: number;
  num2: number;
}

interface GlobalContextType {
  cards: Card[];
  tags: Tag[];
  securityNumbers: SecurityNumbers | null;
  loading: boolean;
}

export const GlobalContext = createContext<GlobalContextType>({
  cards: [],
  tags: [],
  securityNumbers: null,
  loading: false,
});

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [cards, setCards] = useState<Card[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [securityNumbers, setSecurityNumbers] =
    useState<SecurityNumbers | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [cardsRes, tagsRes, securityRes] = await Promise.all([
          api.get<Card[]>("/cards"),
          api.get<Tag[]>("/tags"),
          api.get<SecurityNumbers>("/security"),
        ]);

        setCards(cardsRes.data);
        setTags(tagsRes.data);
        setSecurityNumbers(securityRes.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <GlobalContext.Provider value={{ cards, tags, securityNumbers, loading }}>
      {children}
    </GlobalContext.Provider>
  );
}
