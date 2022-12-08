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
	}
`

export const ProjectsWrapper = styled.div`
	max-width: 100%;
	transform: translate3d(0, 0, 0) !important;
`