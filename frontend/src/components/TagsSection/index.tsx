import { useContext } from "react";
import * as S from "./styles";
import { GlobalContext } from "../../context/GlobalContext";

export default function TagSection() {
  const { tags } = useContext(GlobalContext);

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
