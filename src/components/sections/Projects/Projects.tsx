import ProjectCard from 'components/Cards/ProjectCard'
import Header from './Header'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperTypes } from 'swiper/types';
import { ProjectsWrapper, Wrapper } from './Styles'
import { Controller, Pagination } from 'swiper'
import ProjectsModal from 'components/Modal/ProjectsModal'
import SiteSupport from 'components/Modal/ProjectsModal/Content/SiteSupport'
import XBRL from 'components/Modal/ProjectsModal/Content/XBRL'
import Alef from 'components/Modal/ProjectsModal/Content/Alef'
import Jupyter from 'components/Modal/ProjectsModal/Content/Jupyter'
import PaginationBlock from 'components/PaginationBlock';
import { CloseProjectModalContext } from 'context/closeProjectModal';

export default function Projects() {

	const items: { title: string, subTitle: string, description: string, component: React.ReactElement }[] = [
		{
			title: 'Web-решения',
			subTitle: 'Поддержка сайтов',
			description: 'Занимайтесь бизнесом - о Вашем сайте позаботимся мы.',
			component: <SiteSupport />
		},
		{
			title: 'Отчетность',
			subTitle: 'XBRL',
			description: 'Мы предлагаем комфортный способ улучшить процесс создания, распространения и использования данных в бизнес-отчетах.',
			component: <XBRL />
		},
		{
			title: 'АЛЕФ',
			subTitle: 'Автоматизация',
			description: 'Алеф - система для автоматизации хозяйственной деятельности предприятий различных отраслей. ',
			component: <Alef />
		},
		// {
		// 	title: 'Деловой центр «Юпитер»',
		// 	subTitle: 'Web-решения',
		// 	description: 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.',
		// 	component: <Jupyter />
		// },
	]

	const [isActive, setActive] = useState(false)

	const [controller, setController] = useState<SwiperTypes>()

	const [currentSlide, setCurrentSlide] = useState(1)

	return (
		<CloseProjectModalContext.Provider value={{ isActive, setActive }}>
			<Wrapper id='projects-section'>
				<ProjectsWrapper>
					<Swiper
						onSwiper={setController}
						onActiveIndexChange={(swiper) => setCurrentSlide(swiper.activeIndex - 2)}
						slidesPerView={3}
						spaceBetween={35}
						controller={{ control: controller }}
						modules={[Pagination, Controller]}
						loop={true}
						className="mySwiper"
						pagination={{
							type: 'fraction',
							el: '.projects-block-pagination'
						}}
					>
						<Header />
						{items.map((item, index) =>
							<SwiperSlide
								key={index}
								onClick={() => {
									setActive(true)
								}}
							>
								<ProjectCard
									key={index}
									title={item.title}
									subtitle={item.subTitle}
									description={item.description}
								/>
							</SwiperSlide>
						)}
					</Swiper>
					<PaginationBlock
						paginationClassName='projects-block-pagination'
						items={items}
						currentSlide={currentSlide}
					/>
				</ProjectsWrapper>
				<ProjectsModal
					controller={controller}
					setController={setController}
					items={items}
					isActive={isActive}
					setActive={setActive}
				/>
			</Wrapper>
		</CloseProjectModalContext.Provider>
	)
}