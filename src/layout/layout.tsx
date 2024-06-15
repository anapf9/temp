import {
  Container,
  Header,
  Sidebar,
  Sidenav,
  Content,
  Navbar,
  Nav,
  Steps,
  Button,
} from "rsuite";
import CogIcon from "@rsuite/icons/legacy/Cog";
import AngleLeftIcon from "@rsuite/icons/legacy/AngleLeft";
import AngleRightIcon from "@rsuite/icons/legacy/AngleRight";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import DashboardIcon from "@rsuite/icons/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import React, { ReactNode } from "react";
import Turmas from "../turmas/turmas";
import { Semana } from "../tabs/tabs";
import { Outlet } from "react-router-dom";
import { NavLink } from "../routers/navLink";

const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: "#34c3ff",
  color: " #fff",
  whiteSpace: "nowrap",
  overflow: "hidden",
};

export const Layout = (children) => {
  const [expand, setExpand] = React.useState(true);
  return (
    <div className="show-fake-browser sidebar-page">
      <Container>
        <Sidebar
          style={{ display: "flex", flexDirection: "column" }}
          width={expand ? 260 : 56}
          collapsible
        >
          <Sidenav.Header>
            <div style={headerStyles}>
              <span style={{ marginLeft: 12 }}> HAIR</span>
            </div>
          </Sidenav.Header>
          <Sidenav
            expanded={expand}
            defaultOpenKeys={["3"]}
            appearance="subtle"
          >
            <Sidenav.Body>
              <Nav>
                <Nav.Item
                  eventKey="1"
                  icon={<DashboardIcon />}
                  as={NavLink}
                  href="turmas"
                >
                  📋 Selecione as Turmas
                </Nav.Item>
                <Nav.Item
                  eventKey="2"
                  icon={<GroupIcon />}
                  as={NavLink}
                  href="conferencia-turmas"
                >
                  👀 Confira os dados
                </Nav.Item>
                <Nav.Item eventKey="3" icon={<MagicIcon />}>
                  ✍️ Finalize sua matricula
                </Nav.Item>
                <Nav.Item
                  eventKey="4"
                  icon={<GearCircleIcon />}
                  as={NavLink}
                  href="comprovante"
                >
                  💃 Comprovante
                </Nav.Item>

                <Button>Default</Button>
              </Nav>
              {/* <Steps current={1} vertical style={styles}>
                <Steps.Item title="Finished" />
                <Steps.Item title="In progress" />
                <Steps.Item title="Waiting" />
                <Steps.Item title="Waiting" />
              </Steps> */}
            </Sidenav.Body>
          </Sidenav>
          <Nav>
            <Nav.Item
              onClick={() => {
                setExpand(!expand);
                console.log("expandido", expand);
              }}
              style={{ width: 56, textAlign: "center" }}
            >
              {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
            </Nav.Item>
          </Nav>
        </Sidebar>

        <Container>
          <Header>
            <h4>Test</h4>
          </Header>
          <Content>
            <Outlet />
          </Content>
        </Container>
      </Container>
    </div>
  );
};
