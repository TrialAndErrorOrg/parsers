import { Title } from "@mantine/core";
import React from "react";
import Conversion from "../components/conversion/conversion";
import Settings from "../components/settings/settings";

export default function Index() {
	return (
		<>
			<Title> Convert with OJS help</Title>

			<Settings />

			<Conversion />
		</>
	);
}
