import * as S from "./styles";

function Section(props: any) {
  return (
    <S.Container>
      <S.Heading>{props.heading}</S.Heading>
      {props.content && <S.Paragraph>{props.content}</S.Paragraph>}
      {props.children}
    </S.Container>
  );
}

export default Section;
