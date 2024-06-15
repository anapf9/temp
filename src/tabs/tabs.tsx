import React from "react";
import { Nav } from "rsuite";
import Turmas from "../turmas/turmas";
import { Link } from "react-router-dom";

const Navbar = ({ active, onSelect, ...props }) => {
  interface NavLinkProps {
    href: string; // Explicitly define the type for href
    children: React.ReactNode;
    [key: string]: any; // Allow any other props for flexibility
  }

  const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
    ({ href, children, ...rest }, ref) => (
      <Link ref={ref} to={href} {...rest}>
        {children}
      </Link>
    )
  );

  return (
    <Nav
      {...props}
      activeKey={active}
      onSelect={onSelect}
      style={{ marginBottom: 50 }}
    >
      <Nav.Item as={NavLink} href="teste1" eventKey="home">
        Semana 1
      </Nav.Item>
      <Nav.Item eventKey="news">Semana 2</Nav.Item>
    </Nav>
  );
};

export const Semana = () => {
  const [active, setActive] = React.useState("home");

  return (
    <>
      <Navbar appearance="tabs" reversed active={active} onSelect={setActive} />
    </>
  );
};
