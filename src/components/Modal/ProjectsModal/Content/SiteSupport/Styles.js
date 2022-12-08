import styled from "styled-components";

export const Header = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 4.2rem;
	svg {
		cursor: pointer;
		&:hover {
			opacity: .5;
		}
	}
`

export const Text = styled.h4`
	color: ${props => props.theme.colors.darkBlue};
	font-size: 2.1875vw;
	font-weight: 600;
	line-height: 111%;
`

export const Container = styled.div`
	width: 100%;
`

export const Banner = styled.section`
	height: 27rem;
	width: 100%;
	margin-bottom: 4.2rem;
	img {
		object-fit: cover;
	}
`

export const Wrapper = styled.div`
	max-height: 56rem;
	padding-right: 2.4rem;
	height: 100%;
`

export const ModalText = styled.div`
	p {
		color: ${props => props.theme.colors.darkBlue};
		font-size: 0.83vw;
		font-weight: 500;
		text-overflow: ellipsis;
		overflow: hidden;
		line-height: 155%;
		margin-bottom: 1rem;
	}
	ul {
		margin-left: 3.5rem;
		margin-bottom: 1rem;
		list-style-type: disc;
		li {
			list-style-type: disc;
			color: ${props => props.theme.colors.darkBlue};
			font-weight: 500;
			line-height: 155%;
			font-size: 0.83vw;
		}
	}
`