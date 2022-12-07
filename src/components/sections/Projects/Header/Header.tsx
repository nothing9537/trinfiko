import { Icons } from 'assets/icons'
import React from 'react'
import { useSwiper } from 'swiper/react'
import { Container, NavigationButton, NavigationButtonWrapper, Title } from './Styles'

export default function Header() {

	const swiper = useSwiper()

	return (
		<Container>
			<Title>Наши проекты</Title>
			<NavigationButtonWrapper className='projects-pagination'>
				<NavigationButton className='projects-prev' onClick={() => swiper.slidePrev()}>
					<Icons.ArrowLeft />
				</NavigationButton>
				<NavigationButton className='projects-next' onClick={() => swiper.slideNext()}>
					<Icons.ArrowRight />
				</NavigationButton>
			</NavigationButtonWrapper>
		</Container>
	)
}
