import { useEffect, useState } from "react";
import * as S from "./styles";
import { api } from "../../services/api";

interface TagData {
  name: string;
}

export default function TagSection() {
  const [tags, setTags] = useState<TagData[]>([]);

  useEffect(() => {
    async function fetchTags() {
      try {
        const response = await api.get<TagData[]>("/tags");
        setTags(response.data);
      } catch (error) {
        console.error("Erro ao buscar as tags:", error);
      }
    }

    fetchTags();
  }, []);

  return (
    <S.Container>
      <S.Title>Lorem ipsum dolor sit amet consectetur</S.Title>
      <S.Grid>
        {tags.map((tag, index) => (
          <S.Tag key={index}>{tag.name}</S.Tag>
        ))}
      </S.Grid>
    </S.Container>
  );
}
