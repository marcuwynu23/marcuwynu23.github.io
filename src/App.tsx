import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import DashboardPage from "./pages/app/dashboard/Dashboard";
import ProfilePage from "./pages/app/profile/Profile";
import ProjectPage from "./pages/app/project/Project";
import SnippetPage from "./pages/app/snippet/Snippet";

function App() {
  const routes = [
    {
      path: "/",
      layout: Layout,
      children: [
        {
          path: "",
          component: <DashboardPage />,
        },
        {
          path: "/profile",
          component: <ProfilePage />,
        },
        {
          path: "/projects",
          component: <ProjectPage />,
        },
        {
          path: "/snippets",
          component: <SnippetPage />,
        },
      ],
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((item, index) => {
          const Layout = item.layout;
          return (
            <Route key={index} path={item.path} element={<Layout />}>
              {item.children.map((i, j) => (
                <Route key={j} index={i.path === ""} path={i.path !== "" ? i.path : undefined} element={i.component} />
              ))}
            </Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
