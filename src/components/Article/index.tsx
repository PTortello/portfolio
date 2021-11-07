import Bio from "../Bio";
import Section from "../Section";
import * as S from "./styles";

function Article() {
  return (
    <S.Container>
      <Section heading={'Sobre'} content={
        'Pedro é um desenvolvedor front-end morando em Sorocaba com paixão por desenvolvimento de software. ' +
        'Ele tem facilidade com raciocínio lógico, planejamento e design de soluções para problemas reais através da programação. ' +
        'Quando não está online, ele ama estar junto de seus filhos e esposa.'
      } />
      <Section heading={'Bio'}>
        <Bio />
      </Section>
      <Section heading={'Eu ❤'} content={
        'Família, Música, Séries, Boardgames, Baseball, Estudar, Programar'
      } />
    </S.Container>
  );
}

export default Article;
