import { Icons } from 'assets/icons';
import NavigationButton from 'components/NavigationButton';
import PaginationBlock from 'components/PaginationBlock';
import React, { useState } from 'react'
import { Controller, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperTypes } from 'swiper/types';
import Modal from '../Modal';
import { Container, Wrapper } from './Styles';

interface Props {
	isActive: boolean;
	setActive: React.SetStateAction<any>;
	items: { title: string, subTitle: string, description: string, component: React.ReactElement }[];
	setController?: React.SetStateAction<any>;
	controller?: SwiperTypes
}

export default function ProjectsModal({ isActive, setActive, items }: Props) {

	const [currentSlide, setCurrentSlide] = useState(1)

	const [controller, setController] = useState<SwiperTypes>()

	return (
		<Modal isActive={isActive} setActive={setActive} isContentChildren={false}>
			<Container>
				<NavigationButton
					className='modal-prev'
					onClick={e => {
						e.stopPropagation()
						controller?.slidePrev()
					}}
				>
					<Icons.ArrowLeft />
				</NavigationButton>
				<Swiper
					onActiveIndexChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
					onSwiper={setController}
					slidesPerView={1}
					modules={[Pagination, Controller]}
					controller={{ control: controller }}
					spaceBetween={400}
					loop={true}
					className="mySwiper"
					pagination={{
						type: 'fraction',
						el: '.modal-projects-pagination'
					}}
				>
					{items.map((item, index) =>
						<SwiperSlide
							key={index}
						>
							<Wrapper onClick={e => e.stopPropagation()}>
								{item.component}
							</Wrapper>
						</SwiperSlide>
					)}
				</Swiper>
				<NavigationButton
					className='modal-next'
					onClick={e => {
						e.stopPropagation()
						controller?.slideNext()
					}}
				>
					<Icons.ArrowRight />
				</NavigationButton>
				<PaginationBlock 
					paginationClassName='modal-projects-pagination'
					items={items}
					currentSlide={currentSlide}
				/>
			</Container>
		</Modal>
	)
}