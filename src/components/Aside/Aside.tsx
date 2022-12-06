import React from 'react'
import { Container, Item, Nav } from './Styles'

export default function Aside() {

	const items = [
		{ label: 'Главная', endpoint: '' },
		{ label: 'О нас', endpoint: '' },
		{ label: 'Проекты', endpoint: '' },
		{ label: 'Вакансии', endpoint: '' },
		{ label: 'Новости', endpoint: '' },
		{ label: 'Контакты', endpoint: '' },
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
