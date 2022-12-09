import VacansyCard from 'components/Cards/VacansyCard'
import Button from 'components/UI/Button'
import React, { useState } from 'react'
import Header from './Header'
import { Container, Item, Items, PaginationItem, PaginationWrapper, Tabs, TextWrapper, VacansyWrapper, Wrapper } from './Styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Controller, Pagination, Swiper as SwiperTypes } from 'swiper'
import { Icons } from 'assets/icons'
import NavigationButton from 'components/NavigationButton'
import VacansyModal from 'components/Modal/VacansyModal'
import JobModal from 'components/Modal/JobModal'

export default function Vacansy() {

	const items = [
		{
			title: 'Front-end developer',
			description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).'
		},
		{
			title: 'Back-end developer',
			description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).'
		},
		{
			title: 'Android developer',
			description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).'
		},
		{
			title: 'Developer',
			description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).'
		},
		{
			title: 'Lead Software Engineer',
			description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).'
		},
	]

	const [currentSlide, setCurrentSlide] = useState(1)
	const [controller, setController] = useState<SwiperTypes>()
	const [isModal, setModal] = useState(false)
	const [jobModal, setJobModal] = useState(false)

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
					<Button height='6.6rem' padding='2.3rem 7rem' onClick={() => setModal(true)} variant='transparent'>
						Присоединиться к команде
					</Button>
				</TextWrapper>
				<VacansyWrapper>
					<Swiper
						onSwiper={setController}
						controller={{ control: controller }}
						onActiveIndexChange={(swiper) => setCurrentSlide(swiper.activeIndex - 2)}
						direction='vertical'
						slidesPerView={3}
						spaceBetween={30}
						pagination={{
							type: 'fraction',
							el: '.pag'
						}}
						modules={[Pagination, Controller]}
						className='news-swiper'
						loop={true}
					>
						{items.map((item, index) =>
							<SwiperSlide key={index} onClick={() => setJobModal(true)}>
								<VacansyCard job={item.title} />
							</SwiperSlide>
						)}
					</Swiper>
					<PaginationWrapper>
						<Tabs className='pag' />
						{items.map((_, index) =>
							<PaginationItem key={index} className={currentSlide === index + 1 ? 'active' : ''} />
						)}
					</PaginationWrapper>
					<NavigationButton onClick={() => controller?.slideNext()}>
						<Icons.ArrowLeft />
					</NavigationButton>
				</VacansyWrapper>
			</Container>
			<VacansyModal isActive={isModal} setActive={setModal} />
			<JobModal isActive={jobModal} setActive={setJobModal} items={items} setVacansyModal={setModal} />
		</Wrapper>
	)
}
