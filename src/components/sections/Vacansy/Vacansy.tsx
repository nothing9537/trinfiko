import VacansyCard from 'components/Cards/VacansyCard'
import Button from 'components/UI/Button'
import React, { useRef } from 'react'
import Header from './Header'
import { Container, Item, Items, TextWrapper, VacansyWrapper, Wrapper } from './Styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

export default function Vacansy() {

	const items = [
		'Front-end developer',
		'Back-end developer',
		'Android developer',
		'Developer',
		'Lead Software Engineer',
		'Front-end developer'
	]

	const pagination = useRef(null)

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
				<VacansyWrapper>
					<Swiper
						direction='vertical'
						slidesPerView={3}
						spaceBetween={30}
						pagination={{
							el: ''
						}}
						modules={[Pagination]}
						className='news-swiper'
						loop={true}
					>
						{items.map((item, index) =>
							<SwiperSlide key={index}>
								<VacansyCard job={item} />
							</SwiperSlide>
						)}
					</Swiper>
				</VacansyWrapper>
			</Container>
		</Wrapper>
	)
}
