import React from "react";
import {
  Container, AsaGrandeEsq, AsaGrandeDir, AsaPequenaEsq, AsaPequenaDir, Corpo
} from "./styles";

function Navi() {
  return (
    <Container>
      <AsaGrandeEsq />
      <AsaGrandeDir />
      <AsaPequenaEsq />
      <AsaPequenaDir />
      <Corpo />
    </Container>
  );
}

export default Navi;
