import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import Layout from "./editor/layout/index.tsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

createRoot(document.getElementById("root")!).render(
	<DndProvider backend={HTML5Backend}>
		<Layout />
	</DndProvider>
);
