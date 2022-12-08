import { Icons } from 'assets/icons'
import React from 'react'
import { Banner, Container, Header, ModalText, Text, Wrapper } from './Styles'

export default function SiteSupport() {
	return (
		<Container>
			<Header>
				<Text>Поддержка сайтов</Text>
				<Icons.Close />
			</Header>
			<Wrapper className='customScroll'>
				<Banner>
					<img src="/static/images/project-modal-image.png" alt="Project" />
				</Banner>
				<ModalText>
					<p>
						Разработка и запуск сайта - это не конечная точка для тех компаний, которые всегда хотят быть успешными и эффективными. <br />
						Любому сайту необходимы периодические изменения, правки, наладка. Сайт – лицо Вашего бизнеса и оно всегда должно отвечать потребностям клиентов. Наш опыт позволяет производить актуальную поддержку сайтов:
					</p>
					<ul>
						<li>наполнение информацией,</li>
						<li>актуализация данных, </li>
						<li>обновление стиля,</li>
						<li>обновление самой архитектуры представляемых данных.</li>
					</ul>
					<p>
						Специалисты компании ТИТ выполнят все поставленный задачи в срок, с наибольшей отдачей для достижения Ваших целей.
					</p>
				</ModalText>
			</Wrapper>
		</Container>
	)
}
