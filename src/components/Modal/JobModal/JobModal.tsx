import NavigationButton from 'components/NavigationButton';
import React, { useState } from 'react'
import Modal from '../Modal'
import { Controller, Pagination, Swiper as SwiperTypes } from 'swiper'
import { Container, Description, Header, Text, TitleDescription, Wrapper } from './Styles';
import { Icons } from 'assets/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import PaginationBlock from 'components/PaginationBlock';
import Button from 'components/UI/Button';

interface Props {
	isActive: boolean;
	setActive: React.SetStateAction<any>;
	items: { title: string, description: string }[],
	setVacansyModal: React.SetStateAction<any>
}

export default function JobModal({ isActive, setActive, items, setVacansyModal }: Props) {

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
						el: '.vacansy-projects-pagination'
					}}
				>
					{items.map((item, index) =>
						<SwiperSlide
							key={index}
						>
							<Wrapper onClick={e => e.stopPropagation()}>
								<Header>
									<Text>{item.title}</Text>
									<Icons.Close onClick={() => setActive(false)} />
								</Header>
								<TitleDescription>Описание вакансии</TitleDescription>
								<Description>{item.description}</Description>
								<Button
									height='6.6rem'
									variant='solid'
									padding='2.3rem 4rem'
									onClick={() => setVacansyModal(true)}
								>
									Присоединиться к команде
								</Button>
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
					paginationClassName='vacansy-projects-pagination'
					items={items}
					currentSlide={currentSlide}
				/>
			</Container>
		</Modal>
	)
}
