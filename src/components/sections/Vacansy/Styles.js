import styled from "styled-components";

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
	grid-template-columns: repeat(2, minmax(10rem, 32.5rem));
	gap: 5rem;
	transform: translate3d(0, 0, 0) !important;
	position: relative;
`

export const Item = styled.p`
	${props => props.theme.fonts.MullerRegular18};
	color: ${props => props.theme.colors.white.white100};
	font-weight: 400;
	font-size: .83vw;
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

export const NavigationButton = styled.button`
	border-radius: 50%;
	background: transparent;
	position: fixed;
	z-index: 20;
	bottom: -10rem;
	right: 0;
	width: 6.5rem;
	height: 6.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border: .1rem solid ${props => props.theme.colors.white.white100};
	svg {
		path {
			fill: ${props => props.theme.colors.white.white100};
		}
	}
`