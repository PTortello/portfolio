import styled, { keyframes } from 'styled-components';

const voo = keyframes`
  0%, 100% {
		transform: translateY(0);
		transform: translateX(0);
	}
	20% {
		transform: translateY(-20px) translateX(30px);
	}
	40% {
		transform: translateY(-50px) translateX(0px);
	}
	60% {
		transform: translateY(-15px) translateX(-35px);
	}
	80% {
		transform: translateY(10px) translateX(20px);
	}
`

const asaEsq = keyframes`
  0% {transform: rotate(-65deg);}
	12.5% {transform: rotate(-90deg);}
	25% {transform: rotate(-65deg);}
	50% {transform: rotate(-90deg);}
	100% {transform: rotate(-65deg);}
`

const asaDir = keyframes`
  0% {transform: rotate(65deg);}
	12.5% {transform: rotate(90deg);}
	25% {transform: rotate(65deg);}
	50% {transform: rotate(90deg);}
	100% {transform: rotate(65deg);}
`

const asaPeqEsq = keyframes`
  0% {transform: rotate(15deg);}
	12.5% {transform: rotate(30deg);}
	25% {transform: rotate(15deg);}
	50% {transform: rotate(30deg);}
	100% {transform: rotate(15deg);}
`

const asaPeqdir = keyframes`
  0% {transform: rotate(-15deg);}
	12.5% {transform: rotate(-30deg);}
	25% {transform: rotate(-15deg);}
	50% {transform: rotate(-30deg);}
	100% {transform: rotate(-15deg);}
`

const cresce = keyframes`
  50% {transform: scale(1.04);}
`

export const SizeDown = styled.div`
  transform: scale(0.4);
`

export const Container = styled.div.attrs((props: { left: string; top: string; }) => ({
	style: {
		left: props.left,
		top: props.top
	}}))`
  position: absolute;
	height: 300px;
	width: 500px;
	margin-left: -250px;
	animation: ${voo} 6s ease-in-out infinite;
`

export const AsaGrandeEsq = styled.div`
  position: absolute;
	height: 95px;
	width:65px;
	background: #fff;
	border-radius: 100% 5px 100% 10%;
	top:18px ;
	left:195px;
	transform: rotate(-45deg);
	opacity: 0.7;
	box-shadow: 0 0 40px rgba(187, 177, 230, 1);
	animation: ${asaEsq} 3s infinite;
	transform-origin: 50% 100%;
`

export const AsaGrandeDir = styled.div`
  position: absolute;
  height: 95px;
  width:65px;
  background: #fff;
  border-radius: 5px 100% 10%;
  top:18px;
  left:238px;
  opacity: 0.7;
  box-shadow: 0 0 40px rgba(187, 177, 230, 1);
  animation: ${asaDir} 3s infinite;
  transform-origin: 50% 100%;
`

export const AsaPequenaEsq = styled.div`
  position: absolute;
	height: 40px;
	width:30px;
	background: #fff;
	border-radius: 180% 30% 130% 25%;
	top:178px;
	left:202px;
	opacity: 0.7;
	box-shadow: 0 0 40px rgba(187, 177, 230, 1);
	animation: ${asaPeqEsq} 3s linear infinite;
	transform-origin: 100% 0%;
`

export const AsaPequenaDir = styled.div`
  position: absolute;
	height: 40px;
	width:30px;
	background: #fff;
	border-radius: 30% 180% 25% 130%;
	top:174px ;
	left:266px;
	opacity: 0.7;
	box-shadow: 0 0 40px rgba(187, 177, 230, 1);
	animation: ${asaPeqdir} 3s linear infinite;
	transform-origin: 50% 0%;
`

export const Corpo = styled.div`
  position: absolute;
	height: 90px;
	width: 90px;
	background: #D5EDF5;
	border-radius: 50%;
	top: 100px;
	left: 50%;
	opacity: 0.98;
	margin-left: -45px;
	box-shadow: 0 0 20px #A08BF7,
	0 0 40px rgba(187, 177, 230, 1),
	0 0 60px rgba(187, 177, 230, 0.6),
	0 0 80px rgba(187, 177, 230, 0.9),
	0 0 30px 70px rgba(250, 232, 130, 0.1);
	animation: ${cresce} 1s infinite;
`
