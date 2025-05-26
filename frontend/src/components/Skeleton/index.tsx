import * as S from "./styles";

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  style?: React.CSSProperties;
}

export default function Skeleton({
  width = "100%",
  height = "1rem",
  borderRadius = "4px",
  style,
}: SkeletonProps) {
  return <S.Skeleton style={{ width, height, borderRadius, ...style }} />;
}
