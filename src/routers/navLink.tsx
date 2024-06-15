import React from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  href: string; // Explicitly define the type for href
  children: React.ReactNode;
  [key: string]: any; // Allow any other props for flexibility
}

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href, children, ...rest }, ref) => (
    <Link ref={ref} to={href} {...rest}>
      {children}
    </Link>
  )
);
