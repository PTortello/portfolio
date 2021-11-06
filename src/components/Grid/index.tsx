import * as S from "./styles";
import projects from "../../pages/Projects/projects";
import Card from "../../components/Card";

function Grid() {
  return (
    <S.Container>
      {projects.map((value, key) => {
        return (
          <Card
            title={value.title}
            description={value.description}
            link={value.link}
            button={value.button}
            img={value.img}
            icons={value.icons}
            key={key}
          />
        )
      })}
    </S.Container>
  );
}

export default Grid;
