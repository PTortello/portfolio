import { PROJECTS } from "constants/projects";
import Card from "components/Card";
import * as S from "./styles";

function Grid() {
  return (
    <S.Container>
      {PROJECTS.map((project, key) => (
        <Card
          title={project.title}
          description={project.description}
          link={project.link}
          button={project.button}
          img={project.img}
          icons={project.icons}
          key={key}
        />
      ))}
    </S.Container>
  );
}

export default Grid;
