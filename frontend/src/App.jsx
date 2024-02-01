import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/404";
import Layout from "./Layout";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
const router = createBrowserRouter([
  {
    element: <Layout />,
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
