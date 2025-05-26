import { useContext } from "react";
import * as S from "./styles";
import { GlobalContext } from "../../context/GlobalContext";
import Skeleton from "../Skeleton";

export default function TagSection() {
  const { tags, loading } = useContext(GlobalContext);

  function decodeString(input: string) {
    try {
      return decodeURIComponent(escape(input));
    } catch (e) {
      return input;
    }
  }

  return (
    <S.Container>
      <S.Title>Lorem ipsum dolor sit amet consectetur</S.Title>
      <S.Grid>
        {loading ? (
          <S.Grid>
            {Array.from({ length: 8 }).map((_, index) => (
              <Skeleton
                key={index}
                width="80px"
                height="32px"
                borderRadius="16px"
              />
            ))}
          </S.Grid>
        ) : (
          tags?.map((tag, index) => (
            <S.Tag key={index}>{decodeString(tag.name)}</S.Tag>
          ))
        )}
      </S.Grid>
    </S.Container>
  );
}
