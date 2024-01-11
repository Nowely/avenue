import {Welcome} from "./components/Welcome";
import {AboutUs} from "./components/AboutUs";
import {Services} from "./components/Services";
import {ApartmentCards} from "./components/ApartmentCards";
import {AllApartment} from "./components/AllApartment";
import {CallRequest} from "./components/CallRequest";
import {Info} from "./components/Info";
import {Box} from "@chakra-ui/react";

export const Landing = () => (
	<Box>
		<Welcome/>
		<AboutUs/>
		<Services/>
		<ApartmentCards/>
		<AllApartment/>
		<CallRequest/>
		<Info/>
	</Box>
);

