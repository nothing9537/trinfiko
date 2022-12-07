import ProjectCard from 'components/Cards/ProjectCard'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Header from './Header'
import { Item, ProgressBar, ProjectsWrapper, Wrapper } from './Styles'
import { Pagination } from 'swiper'

export default function Projects() {

	const items = [
		{
			title: 'Web-решения',
			subTitle: 'Деловой центр «Юпитер» 1',
			description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.'
		},
		{
			title: 'Web-решения',
			subTitle: 'Деловой центр «Юпитер» 2',
			description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.'
		},
		{
			title: 'Web-решения',
			subTitle: 'Деловой центр «Юпитер» 3',
			description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.'
		},
		{
			title: 'Web-решения',
			subTitle: 'Деловой центр «Юпитер» 4',
			description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.'
		},
		{
			title: 'Web-решения',
			subTitle: 'Деловой центр «Юпитер» 4',
			description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.'
		},
		{
			title: 'Web-решения',
			subTitle: 'Деловой центр «Юпитер» 5',
			description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.'
		},
	]

	const [currentSlide, setCurrentSlide] = useState(1)

	return (
		<Wrapper id='projects-section'>
			<ProjectsWrapper>
				<Swiper
					onActiveIndexChange={(swiper) => setCurrentSlide(swiper.activeIndex - 2)}
					slidesPerView={3}
					spaceBetween={50}
					modules={[Pagination]}
					loop={true}
					className="mySwiper"
					pagination={{
						type: 'fraction',
					}}
				>
					<Header />
					{items.map((item, index) =>
						<SwiperSlide key={index}>
							<ProjectCard
								key={index}
								title={item.title}
								subtitle={item.subTitle}
								description={item.description}
							/>
						</SwiperSlide>
					)}
				</Swiper>
				<ProgressBar>
					{items.map((_, index) =>
						<Item className={currentSlide === index + 1 ? 'active' : ''} />
					)}
				</ProgressBar>
			</ProjectsWrapper>
		</Wrapper>
	)
}