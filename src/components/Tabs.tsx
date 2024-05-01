'use client';
import React, { useState, ReactElement, ReactNode } from 'react';
import styled from "styled-components";

const TabList = styled.div`
  display: flex;
  background-color: #f0f0f0;
`;

const Tab = styled.button<{ isActive: boolean }>`
  padding: 10px 20px;
  cursor: pointer;
  opacity: ${props => props.isActive ? 1 : 0.6};
  background: ${props => props.isActive ? 'orange' : 'transparent'};
  border: none;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

const Content = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-top: none;
`;

type Props = {
  children: React.ReactNode;
};

const Tabs: React.FC<Props> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  // const validChildren = React.Children.toArray(children).filter(
  //   child => React.isValidElement(child)
  // ) as ReactElement[];
  // React.Children.toArray で子要素を配列化
  const childArray = React.Children.toArray(children);

  return (
    <div>
      <TabList>
        {childArray.map((child, index) => (
          <Tab
            key={index}
            isActive={index === activeTab}
            onClick={() => handleTabClick(index)}
          >
            {typeof child === 'string' ? child : `Tab ${index + 1}`}
          </Tab>
        ))}
      </TabList>
      <Content>
        {childArray[activeTab]}
      </Content>
    </div>
  );
};

export default Tabs;
