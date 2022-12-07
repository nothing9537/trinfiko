import VacansyCard from 'components/Cards/VacansyCard'
import Button from 'components/UI/Button'
import React from 'react'
import Header from './Header'
import { Container, Item, Items, TextWrapper, VacansyWrapper, Wrapper } from './Styles'

export default function Vacansy() {
	return (
		<Wrapper id='vacansy-section'>
			<Header />
			<Container>
				<TextWrapper>
					<Items>
						<Item>
							Мы проводим тщательный отбор будущих сотрудников, оценивая не только технические знания, но и человеческие, психологические и социальные качества.
						</Item>
						<Item>
							Мы верим, что качество наших услуг зависит от квалификации и сплоченности команды. Развиваем нашу команду и профессионализм.
						</Item>
						<Item>
							Мы заинтересованы в профессиональном и карьерном развитии наших сотрудников: предоставляем возможность для обучения, проводим объективную оценку достижений.
						</Item>
						<Item>
							Наши специалисты регулярно проходят обучение в сертификационных центрах.
						</Item>
					</Items>
					<Button height='6.6rem' padding='2.3rem 7rem'>
						Присоединиться к команде
					</Button>
				</TextWrapper>
				<VacansyWrapper className='customScroll'>
					<VacansyCard job='Front-end developer' />
					<VacansyCard job='Back-end developer' />
					<VacansyCard job='Android developer' />
					<VacansyCard job='Developer' />
					<VacansyCard job='Lead Software Engineer' />
					<VacansyCard job='Front-end developer' />
				</VacansyWrapper>
			</Container>
		</Wrapper>
	)
}
