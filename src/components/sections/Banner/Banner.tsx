import React from 'react'
import { Container, SubTitle, Title, Video, Wrapper } from './Styles'

export default function Banner() {
	return (
		<Container id='main-section'>
			<Video src='/static/videos/video_2022-12-06_17-27-35.mp4' autoPlay muted playsInline loop />
			<Wrapper>
				<Title>ТРИНФИКО</Title>
				<SubTitle>
					Информационные <br />
					технологии
				</SubTitle>
			</Wrapper>
		</Container>
	)
}
