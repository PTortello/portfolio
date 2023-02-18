import * as S from "./styles";

interface ICard {
  title: string;
  description: string;
  link: string;
  button: string;
  img: string;
  icons: string[];
}

function Card(data: ICard) {
  const imagePath = require(`images/${data.img}`).default;

  return (
    <S.Container img={imagePath}>
      <S.Content>
        <S.Title>{data.title}</S.Title>
        <S.Description>{data.description}</S.Description>
        <S.Bottom>
          <S.Link to={{ pathname: data.link }} target="_blank">
            {data.button}
          </S.Link>
          {data.icons.map((value, key) => {
            return (
              <S.Image
                src={require(`images/${value}`).default}
                alt={value}
                key={key}
              />
            );
          })}
        </S.Bottom>
      </S.Content>
    </S.Container>
  );
}

export default Card;
