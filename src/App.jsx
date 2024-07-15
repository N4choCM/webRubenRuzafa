import { initializeIcons } from "@fluentui/react";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import "./index.css";

import MainRoutes from "./routes/MainRoutes";
import { AppStateProvider } from "./state/AppProvider";

initializeIcons();

function App() {
	return (
		<AppStateProvider>
			<BrowserRouter>
				<MainRoutes />
			</BrowserRouter>
		</AppStateProvider>
	);
}

export default App;