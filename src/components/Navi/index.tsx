import { useEffect, useState } from "react";
import * as S from "./styles";

function Navi() {

  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const {x, y} = mousePosition;
  
  useEffect(() => {
    const mouseMoveHandler = (event: any) => {
      const { clientX, clientY } = (window.innerWidth < 800) ? {clientX: 0, clientY: 0} : event;
      setMousePosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <S.SizeDown>
      <S.Container left={`${x}px`} top={`${y}px`}>
        <S.AsaGrandeEsq />
        <S.AsaGrandeDir />
        <S.AsaPequenaEsq />
        <S.AsaPequenaDir />
        <S.Corpo />
      </S.Container>
    </S.SizeDown>
  );
}

export default Navi;
