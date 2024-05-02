'use client';
import Image from 'next/image';
import React, { useState, ReactElement, ReactNode } from 'react';

import styled from "styled-components";


const SContainer = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: white;
  color: white;
`;

const SLogo = styled.div`
  a {
    color: white;
  }
`;

const Header = () => {
  return (
    <SContainer>
    <SLogo>
      <a href="/">
        <Image src="/logo.png" width={300} height={100} alt="Logo"/>
      </a>
    </SLogo>
  </SContainer>    
  )
}

export default Header;
