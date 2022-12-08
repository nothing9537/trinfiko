import { Icons } from 'assets/icons'
import { CloseProjectModalContext } from 'context/closeProjectModal'
import React, { useContext } from 'react'
import { Banner, Container, Header, ModalText, Text, Wrapper } from './Styles'

export default function Jupyter() {

	const { setActive } = useContext(CloseProjectModalContext)

	return (
		<Container>
			<Header>
				<Text>Деловой центр «Юпитер»</Text>
				<Icons.Close onClick={() => setActive(false)} />
			</Header>
			<Wrapper className='customScroll'>
				<Banner>
					<img src="/static/images/project-modal-image.png" alt="Project" />
				</Banner>
				<ModalText>
					<p>
						Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий.
					</p>
				</ModalText>
			</Wrapper>
		</Container>
	)
}
