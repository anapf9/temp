import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/layout";
import Logo from "../Logo";
import Turmas from "../turmas/turmas";
import { ConferenciaTurmas } from "../conferencia/conferencia";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Logo />,
      },
      {
        path: "turmas",
        element: <Turmas />,
      },
      {
        path: "conferencia-turmas",
        element: <ConferenciaTurmas />,
      },
      {
        path: "*",
        element: <> Nada </>,
      },
    ],
  },
]);
