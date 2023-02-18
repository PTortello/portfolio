import { MILESTONES } from "constants/milestones";
import * as S from "./styles";

function Bio() {
  return (
    <>
      {MILESTONES.map((milestone, key) => (
        <S.Container key={key}>
          <S.Year>{milestone.year}</S.Year>
          {milestone.description}
        </S.Container>
      ))}
    </>
  );
}

export default Bio;
