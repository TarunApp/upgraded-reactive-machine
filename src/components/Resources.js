import { Column, Row, Projects, Select } from "../Styles";
import ResLink from "./ResLink";
import { Links } from "./Links";
import { useState , useEffect} from "react";

// Component for showing links to resources


const Resources = (props) => {


useEffect(() => {
	document.title = "Resources"
}, [])


	const [topic, SetTopic] = useState("all");

	const onSelect = (e) => {
		console.log(e.target.value);
		SetTopic(e.target.value);
	};

	return (
		<Column>
			<Projects id="projects">
				<h2>Resources</h2>
				<p style={{ fontSize: "18px", textAlign: "center" }}>
					A Collection of useful links, tutorials, and articles for web
					development and more.
				</p>
				<br />
					<h4 style={{textAlign: "center"}}>Sort: {topic}</h4>
				<Row>
					<Select onChange={onSelect}>
						<option value="all">All</option>
						<option value="dev">Development</option>
						<option value="website">Website</option>
						<option value="article">Article</option>
					</Select>
				</Row>
				<br />
				<Row center>
					{topic === "all"
						? Links.map((item) => (
								<ResLink
									title={item.title}
									content={item.content}
									link={item.link}
									type={item.type}
								/>
						  ))
						: Links.filter((item) => item.type === topic).map((item) => (
								<ResLink
									title={item.title}
									content={item.content}
									link={item.link}
									type={item.type}
								/>
						  ))}
				</Row>
			</Projects>
		</Column>
	);
};

export default Resources;
