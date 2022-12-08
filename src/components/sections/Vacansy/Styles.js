import styled from "styled-components";
import { Container as NavButtonContainer } from 'components/NavigationButton/Styles'

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	gap: 7rem;
	transform: translate3d(0, 0, 0) !important;
	position: relative;
`

export const Container = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 2rem;
	transform: translate3d(0, 0, 0) !important;
	position: relative;
`

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8rem;
`

export const Items = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(10rem, 34rem));
	gap: 3rem;
	transform: translate3d(0, 0, 0) !important;
	position: relative;
`

export const Item = styled.p`
	${props => props.theme.fonts.MullerRegular18};
	color: ${props => props.theme.colors.white.white100};
	font-weight: 500;
	font-size: 1.55rem;
	line-height: 155%;
`

export const VacansyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 60rem;
	width: 100%;
	max-height: 40rem;
	transform: translate3d(0, 0, 0) !important;
	position: relative;
	height: 100%;
	.news-swiper {
		margin: 0;
		transform: translate3d(0, 0, 0) !important;
		position: relative;
	}
	${NavButtonContainer} {
		position: absolute;
		left: 35%;
		bottom: -15rem;
		transform: rotate(-90deg);
	}
`

export const PaginationWrapper = styled.div`
	height: 100%;
	width: 2rem;
	position: absolute;
	right: 5rem;
	z-index: 20;
	display: flex;
	flex-direction: column;
	transform: translate3d(0, 0, 0) !important;
`

export const Tabs = styled.div`
	color: ${props => props.theme.colors.white.white100};
	position: absolute;
	top: 0;
	left: 4rem;
	width: 4rem;
	height: 1rem;
	z-index: 20;
	transform: translate3d(0, 0, 0) !important;
`

export const PaginationItem = styled.button`
	position: relative;
	background: rgba(255, 255, 255, .2);
	height: 100%;
	width: .2rem;
	&.active {
		background: white;
	}
`