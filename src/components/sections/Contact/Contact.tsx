import React from 'react'
import { Contacts, Description, Info, InfoDescription, InfoTitle, MapWrapper, Title, Wrapper } from './Styles'
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function Contact() {
	return (
		<Wrapper id='contact-section'>
			<Contacts>
				<Title>КОНТАКТЫ</Title>
				<Description>
					Общество с ограниченной <br />
					ответственностью «ТРИНФИКО <br />
					Информационные Технологии».
				</Description>
				<Info>
					<InfoTitle>Адрес</InfoTitle>
					<InfoDescription>
						Ботанический пер. 5, Москва, <br />
						129090
					</InfoDescription>
				</Info>
				<Info>
					<InfoTitle>Телефон</InfoTitle>
					<InfoDescription>
						+7 (495) 725 25 00»
					</InfoDescription>
				</Info>
				<Info>
					<InfoTitle>E-Mail</InfoTitle>
					<InfoDescription>
						trf-it@trinfico.com
					</InfoDescription>
				</Info>
			</Contacts>
			<MapWrapper>
				<YMaps query={{ load: "package.full" }}>
					<Map
						state={{
							center: [55.77788906897397, 37.637640499999996],
							zoom: 17,
							controls: [],
							// behaviors: ['scrollZoom']
						}}
						defaultOptions={{
							// minZoom: 17
						}}
						width='100%'
						height='100%'
					>
						<Placemark
							options={{
								iconLayout: "default#image",
								iconImageHref: "/static/images/icons/map.svg",
								iconImageSize: [40, 50],
								iconImageOffset: [-15, -30]
							}}
							geometry={[55.77788906897397, 37.637640499999996]}
						/>
					</Map>
				</YMaps>
			</MapWrapper>
		</Wrapper>
	)
}
