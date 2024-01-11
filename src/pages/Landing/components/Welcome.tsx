'use client'

import {Box, Stack, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import logo from '../../../../public/logo.png'
import Image from "next/image";

export const Welcome = () => (
	<Box height={500}>
		<Stack direction='row' spacing={250} whiteSpace='normal'>
			<Image
				alt={'Avenue logo'}
				src={logo}
				height={60}
			/>

			<Tabs>
				<TabList>
					<Tab>Главная</Tab>
					<Tab>Услуги</Tab>
					<Tab>Актуальное</Tab>
					<Tab>Варианты</Tab>
					<Tab>Контакты</Tab>
					<Tab>Свяжитесь с нами</Tab>
				</TabList>
			</Tabs>
		</Stack>
	</Box>
)