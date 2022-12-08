import NewsCard from 'components/Cards/NewsCard'
import PaginationBlock from 'components/PaginationBlock'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Controller, Pagination, Swiper as SwiperTypes } from 'swiper'
import Header from './Header'
import { NewsWrapper, Wrapper } from './Styles'

export default function News() {

	const items = [
		{
			date: '16/08/2022',
			title: 'ТРИНФИКО IT сообщает о начале формирования нового фонда «Мировые акции»',
			description: 'Офисы класса «А» в непосредственной близости от международного терминала аэропорта Пулково и развязки КАД-Аэропорт...'
		},
		{
			date: '16/08/2022',
			title: 'Семинар по устойчивому развитию для сотрудников Инвестиционной группы ТРИНФИКО  IT',
			description: 'Офисы класса «А» в непосредственной близости от международного терминала аэропорта Пулково и развязки КАД-Аэропорт...'
		},
		{
			date: '16/08/2022',
			title: 'Фонд «Мировые доходные облигации» под управлением УК ТРИНФИКО  IT занял 1 место по доходности',
			description: 'Офисы класса «А» в непосредственной близости от международного терминала аэропорта Пулково и развязки КАД-Аэропорт...'
		},
		{
			date: '16/08/2022',
			title: 'Фонд «Мировые доходные облигации» под управлением УК ТРИНФИКО  IT занял 1 место по доходности',
			description: 'Офисы класса «А» в непосредственной близости от международного терминала аэропорта Пулково и развязки КАД-Аэропорт...'
		},
		{
			date: '16/08/2022',
			title: 'Фонд «Мировые доходные облигации» под управлением УК ТРИНФИКО  IT занял 2 место по доходности',
			description: 'Офисы класса «А» в непосредственной близости от международного терминала аэропорта Пулково и развязки КАД-Аэропорт...'
		},
		{
			date: '16/08/2022',
			title: 'Фонд «Мировые доходные облигации» под управлением УК ТРИНФИКО  IT занял 3 место по доходности',
			description: 'Офисы класса «А» в непосредственной близости от международного терминала аэропорта Пулково и развязки КАД-Аэропорт...'
		},
	]

	const [currentSlide, setCurrentSlide] = useState(1)
	const [controller, setController] = useState<SwiperTypes>()

	return (
		<Wrapper id='news-section'>
			<Header />
			<NewsWrapper>
				<Swiper
					onSwiper={setController}
					onActiveIndexChange={(swiper) => setCurrentSlide(swiper.activeIndex - 2)}
					slidesPerView={3}
					spaceBetween={30}
					controller={{ control: controller }}
					modules={[Pagination, Controller]}
					loop={true}
					className="mySwiper"
					pagination={{
						type: 'fraction',
						el: '.news-pagination'
					}}
				>
					{items.map((item, index) =>
						<SwiperSlide
							key={index}
							onClick={() => {
								// setActive(true)
							}}
						>
							<NewsCard
								key={index}
								date={item.date}
								title={item.title}
								description={item.description}
							/>
						</SwiperSlide>
					)}
				</Swiper>
				<PaginationBlock
					paginationClassName='news-pagination'
					items={items}
					currentSlide={currentSlide}
				/>
			</NewsWrapper>
		</Wrapper>
	)
}
