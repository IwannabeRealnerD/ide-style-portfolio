import { ReactNode } from "react";

interface MenuLinkProps {
  title: string;
  link: string;
  icon: ReactNode;
}

export const MenuLink = ({ title, link, icon }: MenuLinkProps) => {
  return (
    <div>
      {title}
      {link}MenuLink{icon}
    </div>
  );
};
