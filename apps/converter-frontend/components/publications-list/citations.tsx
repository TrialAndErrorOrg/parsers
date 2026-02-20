import { Container, Text } from "@mantine/core";
// @ts-expect-error no types for cites
import Cite from "citation-js";
import { Data as CSL } from "csl-json";
import type { definitions } from "ojs-client";
import useSWR from "swr";

export const Citations = ({
	value,
	extra,
}: {
	value: definitions["Publication"]["citations"];
	extra: string;
}) => {
	const url =
		// process.env.NODE_ENV === 'production'
		//   ? '/api/style'
		// :
		process.env.NEXT_PUBLIC_STYLE_DEV_URL || "http://localhost:8000/api/style";
	const splitextra = extra
		?.replace(/\\r/g, "")
		?.replace(/\n([A-Z])/g, "\n\n\n$1")
		?.replace(/\n([^A-Z])/g, "$1");
	//console.log(splitextra)
	const { data, error } = useSWR(url, (resource: string, init: any) =>
		fetch(url, {
			method: "post",
			body: splitextra,
		}).then((response) => response.json()),
	);
	if (error || !data) {
		return (
			<Container sx={{ overflow: "scroll", maxHeight: 500 }}>
				{value?.map((cite) => (
					<Text key={cite} dangerouslySetInnerHTML={{ __html: cite }} />
				))}
			</Container>
		);
	}

	// const cite = new Cite(
	//   data.map((data: CSL) => {
	//     if (!data.type) {
	//       data.type = 'article'
	//     }
	//     return data
	//   }),
	// )
	// const biblatex = cite.format('biblatex')
	// const bibtex = cite.format('bibtex')
	// const ris = cite.format('ris')
	// const csl = data

	return (
		// <Prism.Tabs defaultValue="Rich Text">
		//   <Prism.Tab
		//     withLineNumbers
		//     language="actionscript"
		//     value="Rich Text"
		//     sx={{ whiteSpace: 'pre-wrap', maxWidth: '70vw' }}
		//   >
		//     {value?.join('\n') ?? ' '}
		//     {/* {value?.map((cite) => (
		//       <Text key={cite} dangerouslySetInnerHTML={{ __html: cite }} />
		//     ))} */}
		//   </Prism.Tab>
		//   <Prism.Tab withLineNumbers language="clike" value="biblatex">
		//     {biblatex ?? ' '}
		//   </Prism.Tab>
		//   <Prism.Tab withLineNumbers language="clike" value="bibtex">
		//     {bibtex ?? ' '}
		//   </Prism.Tab>
		//   <Prism.Tab withLineNumbers language="jsx" value="ris">
		//     {ris ?? ' '}
		//   </Prism.Tab>
		//   <Prism.Tab withLineNumbers language="json" value="csl">
		//     {JSON.stringify(csl, null, 2) ?? ' '}
		//   </Prism.Tab>
		// </Prism.Tabs>
		<div />
	);
};
