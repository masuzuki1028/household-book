import type { NextPage } from 'next'
import Image from 'next/image';
import styled from "styled-components";
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { clear } from 'console';


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

const SNavi = styled.ul`
  display: flex;
  width: 1200px;
  padding: 0px 32px;
`;

const StyledListItem = styled.li`
  position: relative;
  margin-right: 10px;
  width: 100%;
`;

const StyledAnchor = styled.a`
  text-decoration: none; 
  color: black;
  height: 50px;
  dsplay: block;
  font-weight: 600;
  font-size: 16px;
`;

const SHome = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: white;
  color: black;
`;

const SFloat = styled.div`
  float: reft;
  width: 226px;
`;

const DropdownMenu = styled.div`
position: absolute;
top: 100%;
left: 0;
margin-top: 2px;
width: 200px;
border-radius: 2px;
padding: 8px 0px;
background: white;
color: black;
box-shadow: 1px 1px 4px 1px #33333326;
`;

const DropdownItem = styled.li`
padding: 0;
margin: 0;

a {
  display: block;
  color: black;
  padding: 8px;
  font-size: 1rem;
}

a:hover {
  background: #c6dae6;
  color: white;
}
`;



const Home: NextPage = () => {
  const [showDropMenu, setShowDropMenu] = useState(false);
  const [timerId,setTimerId] = useState<number | undefined>(undefined); 

  const onDisplaySwitch = () => {
    setShowDropMenu(!showDropMenu);
    if (!showDropMenu) {
      const id = setTimeout(() => {
        setShowDropMenu(false);
      }, 4000) as unknown as number;
      setTimerId(id);
    } else {
      clearTimeout(timerId);
    }
  };

  useEffect(() => {
    return () => {
      if (timerId !== null) {
        clearTimeout(timerId);
      }
    };
  }, [timerId]); 
  return (
    <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <SContainer>
      <SLogo>
        <a href="/">
          <Image src="/logo.png" width={300} height={100} alt="Logo"/>
        </a>
      </SLogo>
    </SContainer>
    <SContainer>
    <SNavi>
    <StyledListItem>
              <StyledAnchor href="/">ホーム</StyledAnchor>
          </StyledListItem>
          <StyledListItem>
              <StyledAnchor href="/cf" onClick={onDisplaySwitch}>家計簿</StyledAnchor>
              {showDropMenu && (
                <DropdownMenu onMouseLeave={onDisplaySwitch}>
                  <DropdownItem>
                    <li>
                      <a href="/cf">家計簿</a>
                    </li>
                    <li>
                      <a href="/cf/summary">集計</a>
                    </li>
                  </DropdownItem>
                </DropdownMenu>
              )}
          </StyledListItem>
          <StyledListItem>
              <StyledAnchor href="/summary">予算</StyledAnchor>
          </StyledListItem>
          <StyledListItem>
              <StyledAnchor href="/bs/portfolio">資産</StyledAnchor>
          </StyledListItem>
          <StyledListItem>
              <StyledAnchor href="/accounts">口座</StyledAnchor>
          </StyledListItem>
          <StyledListItem>
              <StyledAnchor href="/profile">設定</StyledAnchor>
          </StyledListItem>
          </SNavi>
    </SContainer>
    <SHome>
      <SFloat>
        <h1>総資産</h1>
        <h2>手元の現金を登録</h2>
        <ul>
          <li>投信</li>
        </ul>
      </SFloat>
    </SHome>

    </>
  )
}

export default Home
