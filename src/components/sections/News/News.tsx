import NewsCard from 'components/Cards/NewsCard'
import React from 'react'
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
	]

	return (
		<Wrapper id='news-section'>
			<Header />
			<NewsWrapper className='customScroll'>
				{items.map((item, index) =>
					<NewsCard
						key={index}
						date={item.date}
						title={item.title}
						description={item.description}
					/>
				)}
			</NewsWrapper>
		</Wrapper>
	)
}
