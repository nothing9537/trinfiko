import { Icons } from 'assets/icons'
import { CloseProjectModalContext } from 'context/closeProjectModal'
import React, { useContext } from 'react'
import { Banner, Container, Header, ModalText, Text, Wrapper } from './Styles'

export default function Alef() {

	const { setActive } = useContext(CloseProjectModalContext)

	return (
		<Container>
			<Header>
				<Text>АЛЕФ</Text>
				<Icons.Close onClick={() => setActive(false)} />
			</Header>
			<Wrapper className='customScroll'>
				<Banner>
					<img src="/static/images/project-modal-image.png" alt="Project" />
				</Banner>
				<ModalText>
					<p>
						Принцип конструктора - это ключевое уникальное отличие продукта от рыночных аналогов. <br />
						Главное преимущество - продуманная простота. Программа представляет собой конструктор финансовых приложений, с помощью которого на предприятиях осуществляется построение финансово учетной системы, соответствующей специфике предприятия. <br />
						Система Алеф – это «all inclusive» бизнес процессов. Мы настраиваем ПО, способное решить многие ключевые задачи бизнеса:
					</p>
					<ul>
						<li>ведение оперативного, бухгалтерского и управленческого учета </li>
						<li>управление персоналом</li>
						<li>оперативного планирования и контроля исполнения бюджетов</li>
						<li>составление различного рода отчетности для всех групп пользователей: бухгалтеров, управляющих, внешних заинтересованных сторон и др.</li>
					</ul>
					<p>
						Программа может быть настроена для ведения учета как в РСБУ, так и в МСФО, таких как GAAP, IAS. <br />
						Использование технологии .net позволяет нашим специалистам развернуть систему не только в локальной сети предприятия и в интернете, но и взаимодействовать с практически любыми внешними системами для синхронизации данных. <br />
						Специалисты компании ТИТ всегда готовы оказать информационную и техническую поддержку.
					</p>
				</ModalText>
			</Wrapper>
		</Container>
	)
}
