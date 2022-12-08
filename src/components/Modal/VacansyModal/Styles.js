import styled from "styled-components";

export const Container = styled.div`
	border-radius: .5rem;
	background: ${props => props.theme.colors.white.white100};
	width: 97rem;
	height: 76rem;
	padding: 6rem;
	padding-top: 6rem;
`

export const Header = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 4rem;
	svg {
		cursor: pointer;
		&:hover {
			opacity: .5;
		}
	}
`

export const Row = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
	margin-bottom: 3rem;
`

export const Text = styled.h4`
	color: ${props => props.theme.colors.darkBlue};
	font-size: 2.1875vw;
	font-weight: 600;
	line-height: 111%;
`

export const Body = styled.form`
	display: flex;
	flex-direction: column;
	/* gap: 3rem; */
`

export const Resume = styled.div`
	margin-top: 4.4rem;
	display: flex;
	align-items: center;
	gap: 5rem;
`

export const ResumeRow = styled.label`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	cursor: pointer;
`

export const Limit = styled.span`
	font-style: normal;
	font-weight: 400;
	font-size: 1.5rem;
	line-height: 2.8rem;
	color: ${props => props.theme.colors.darkBlue};
`

export const LabelFile = styled.label`
	font-weight: 500;
	cursor: pointer;
	font-size: 1.8rem;
	line-height: 2.8rem;
	text-decoration-line: underline;
	color: ${props => props.theme.colors.darkBlue};
`