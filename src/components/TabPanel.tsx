import React from "react";

type Props = {
  label: string;
  children: React.ReactNode;
};

const TabPanel = ({ children, label }: Props) => {
  return (
    <>{children}</>
  );
}

export default TabPanel;
