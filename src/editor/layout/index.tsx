import React from "react";
import { Allotment } from "allotment";
import "allotment/dist/style.css";

import Header from "./header";
import Material from "./material";
import Stage from "./stage";
import Setting from "./setting";

const Layout: React.FC = () => {
	return (
		<div className="h-[100vh] w-[100vw] flex flex-col">
			<Header />

			<Allotment>
				<Allotment.Pane preferredSize={200} maxSize={400} minSize={100}>
					<Material />
				</Allotment.Pane>
				<Allotment.Pane>
					<Stage />
				</Allotment.Pane>
				<Allotment.Pane preferredSize={200} maxSize={400} minSize={100}>
					<Setting />
				</Allotment.Pane>
			</Allotment>
		</div>
	);
};

export default Layout;
