import AboutCard from 'components/Cards/AboutCard/'
import React from 'react'
import { CardWrapper, Description, Text, Title, Wrapper } from './Styles'

export default function About() {
	return (
		<Wrapper id='about-section'>
			<Text>
				<Title>
					ТРИНФИКО
				</Title>
				<Description>
					Мы предлагаем передовые разработки систем автоматизации, увеличивая эффективность вашего бизнеса. Наши программы позволят оптимизировать ваши привычные процессы, значительно ускоряя их.
				</Description>
			</Text>
			<CardWrapper>
				<AboutCard
					title='Высокое качество работы'
					description='Специалисты компании - сертифицированные профессионалы с большим опытом работы.'
					url='/static/images/card/about1.png'
				/>
				<AboutCard
					title='Индивидуальный подход'
					description='Команда разработчиков подберет для вас оптимальное решение.'
					url='/static/images/card/about2.png'
				/>
				<AboutCard
					title='Решения по автоматизации бизнеса и сокращению непрямых издержек'
					description='Автоматизируя бизнес-процессы компаний, мы снижаем затраты на рутинные операции.'
					url='/static/images/card/about3.png'
				/>
			</CardWrapper>
		</Wrapper>
	)
}
