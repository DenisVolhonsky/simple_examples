import React from "react";

type Props = {
  text: string;
  color: string;
};

const Header: React.FC<Props> = ({ text, color }) => {
  return <div style={{ color }}>{text}</div>;
};

export default Header;
