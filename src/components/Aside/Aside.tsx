import React from 'react'
import { Container, Item, Nav } from './Styles'

export default function Aside() {

	const items = [
		{ label: 'Главная', endpoint: '#main-section' },
		{ label: 'О нас', endpoint: '#about-section' },
		{ label: 'Проекты', endpoint: '#projects-section' },
		{ label: 'Вакансии', endpoint: '#vacansy-section' },
		{ label: 'Новости', endpoint: '#news-section' },
		{ label: 'Контакты', endpoint: '#contact-section' },
	]

	return (
		<Container>
			<Nav>
				{items.map((item, index) =>
					<Item key={index}>
						<a href={item.endpoint}>{item.label}</a>
					</Item>
				)}
			</Nav>
		</Container>
	)
}
