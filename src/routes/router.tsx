import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About.tsx";
import BankMain from "../pages/BankMain.tsx";
import Welcome from "../pages/Welcome.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <BankMain /> },
            { path: "about", element: <About /> },
            { path: "welcome", element: <Welcome /> },
        ],
    },
]);

export default router;
