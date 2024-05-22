'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
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

const SHomeContainer = styled.div`
  display: flex;
  padding: 0px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: white;
  color: white;
`;

const SLogo = styled.div`
  a {
    color: white;
    text-decoration: none; 
  }
`;

const SNavi = styled.ul`
  display: flex;
  width: 1200px;
  padding: 0px 32px;
  list-style: none;
`;

const SDropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0;
  width: 100%;
  border-radius: 2px;
  padding: 8px 0px;
  background: white;
  color: black;
  box-shadow: 1px 1px 4px 1px #33333326;
  z-index: 1000;
`;

const SDropdownItem = styled.div`
  a {
    display: block; 
    padding: 8px 16px;
    color: black;
    text-decoration: none; 
    font-size: 16px;
    &:hover {
      background-color: #e1e1e1;
    }
  }
`;

const StyledListItem = styled.li`
  position: relative;
  margin-right: 10px;
  width: 100%;
  &:hover ${SDropdownMenu} {
    display: block; 
  }

  a {
    text-decoration: none;
  }
`;

const StyledLink = styled.span`
  text-decoration: none;
  color: black;
  display: block;
  padding: 10px 20px;
  width: 100%; 
  box-sizing: border-box;
  font-weight: 600;
  &:hover {
    background-color: #f0f0f0;
`;

const Header = () => {
  const [showDropMenu, setShowDropMenu] = useState(false);
  const [showSummaryMenu, setShowSummaryMenu] = useState(false);
  const [showPortfolioMenu, setshowPortfolioMenu] = useState(false);
  const [showAccountsMenu, setshowAccountsMenu] = useState(false);
  const [showSettingsMenu, setshowSettingsMenu] = useState(false);

  const toggleDropdown = (toggle: string) => () => {
    if (toggle === 'household') {
      setShowDropMenu(!showDropMenu);
      setShowSummaryMenu(false);
    } else {
      setShowSummaryMenu(!showSummaryMenu);
      setShowDropMenu(false);
    }
  };

  return (
    <>
      <SContainer>
        <SLogo>
          <Link href="/">
            <Image src="/logo.png" width={300} height={100} alt="Logo"/>
          </Link>
        </SLogo>
      </SContainer>
      <SHomeContainer>
        <SNavi>
          <StyledListItem>
            <Link href="/" passHref>
              <StyledLink>ホーム</StyledLink>
            </Link>
          </StyledListItem>
          <StyledListItem onMouseOver={toggleDropdown('household')} onMouseLeave={toggleDropdown('household')}>
            <Link href="/cf" passHref>
              <StyledLink>家計簿</StyledLink>
            </Link>
            {showDropMenu && (
              <SDropdownMenu>
                <SDropdownItem>
                <Link href="/cf">入出金</Link>
                </SDropdownItem>
                <SDropdownItem>
                <Link href="/cf/summary">収支内訳</Link>
                </SDropdownItem>
                <SDropdownItem>
                <Link href="/cf/monthly">月次推移</Link>
                </SDropdownItem>
              </SDropdownMenu>
            )}
          </StyledListItem>
          <StyledListItem onMouseOver={toggleDropdown('budget')} onMouseLeave={toggleDropdown('budget')}>
            <Link href="/summary" passHref>
              <StyledLink>予算</StyledLink>
            </Link>
            {showSummaryMenu && (
              <SDropdownMenu>
                <SDropdownItem>
                <Link href="/summary">予算</Link>
                </SDropdownItem>
                <SDropdownItem>
                <Link href="/summary/count">集計</Link>
                </SDropdownItem>
              </SDropdownMenu>
            )}
          </StyledListItem>
          <StyledListItem>
            <Link href="/bs/portfolio" passHref>
              <StyledLink>資産</StyledLink>
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link href="/accounts" passHref>
              <StyledLink>口座</StyledLink>
            </Link>
          </StyledListItem>
          <StyledListItem>
          <Link href="/settings" passHref>
              <StyledLink>設定</StyledLink>
          </Link>
          </StyledListItem>
        </SNavi>
      </SHomeContainer>
    </>
  );
}

export default Header;


