import styled from "styled-components";

export const Wrapper = styled.section`
	width: 100%;
	display: flex;
	position: relative;
	z-index: 20;
	flex-direction: column;
	gap: 8rem;
	.mySwiper {
		display: flex;
		flex-direction: column-reverse;
		gap: 7rem;
		.swiper-pagination-fraction {
			width: fit-content;
			position: fixed;
			bottom: -4rem;
			color: ${props => props.theme.colors.white.white100};
		}
	}
`

export const ProjectsWrapper = styled.div`
	max-width: 100%;
	transform: translate3d(0, 0, 0) !important;
`

export const ProgressBar = styled.div`
	width: 100%;
	position: absolute;
	bottom: -6rem;
	display: flex;
	align-items: center;
`

export const Item = styled.button`
	width: 100%;
	background: rgba(255, 255, 255, .2);
	height: .2rem;
	&.active {
		background: white;
	}
`