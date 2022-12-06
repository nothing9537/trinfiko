import { Icons } from 'assets/icons'
import React from 'react'
import { Container, NavigationButton, NavigationButtonWrapper, Title } from './Styles'

export default function Header() {
	return (
		<Container>
			<Title>Наши проекты</Title>
			<NavigationButtonWrapper>
				<NavigationButton>
					<Icons.ArrowLeft />
				</NavigationButton>
				<NavigationButton>
					<Icons.ArrowRight />
				</NavigationButton>
			</NavigationButtonWrapper>
		</Container>
	)
}
