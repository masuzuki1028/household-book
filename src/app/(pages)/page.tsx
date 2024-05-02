'use client';
import type { NextPage } from 'next'
import Image from 'next/image';
import styled from "styled-components";
import { useEffect, useState } from 'react';
import Link from 'next/link';


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
  align-items: flex-start;   
  padding: 16px;
  width: 100%;
  background: white;
  color: black;
`;

const SFloat = styled.div`
  float: reft;
  width: 25%;
  padding: 16px;
`;

const SHomeFloat = styled.div`
  float: left;
  width: 75%;   // 画面の半分の幅を使用
  padding: 16px;
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
  const [showSummaryMenu, setShowSummaryMenu] = useState(false);
  const [timerId,setTimerId] = useState<number | undefined>(undefined); 
  const [timerSummryId,setTimerSummryId] = useState<number | undefined>(undefined); 

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

  const onDisplaySummrySwitch = () => {
    setShowSummaryMenu(!showSummaryMenu);
    if (!showSummaryMenu) {
      const id = setTimeout(() => {
        setShowSummaryMenu(false);
      }, 4000) as unknown as number;
      setTimerSummryId(id);
    } else {
      clearTimeout(timerSummryId);
    }
  };

  useEffect(() => {
    return () => {
      if (timerId !== null) {
        clearTimeout(timerId);
      }
    };
  }, [timerId]); 

  useEffect(() => {
    return () => {
      if (timerSummryId !== null) {
        clearTimeout(timerSummryId);
      }
    };
  }, [timerSummryId]); 

  return (
    <>
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
              <StyledAnchor href="/">
                ホーム</StyledAnchor>
          </StyledListItem>
          <StyledListItem>
              <StyledAnchor onClick={onDisplaySwitch}>家計簿</StyledAnchor>
              {showDropMenu && (
                <DropdownMenu onMouseLeave={onDisplaySwitch}>
                  <ul>
                  <DropdownItem>
                      <Link href="/cf">家計簿</Link>
                      <Link href="/cf/summary">集計</Link>
                  </DropdownItem>
                  </ul>
                </DropdownMenu>
              )}
          </StyledListItem>
          <StyledListItem>
              <StyledAnchor onClick={onDisplaySummrySwitch}>予算</StyledAnchor>
              {showSummaryMenu && (
                <DropdownMenu onMouseLeave={onDisplaySummrySwitch}>
                  <ul>
                  <DropdownItem>
                  <Link href="/summary">予算</Link>
                  <Link href="/summary/count">集計</Link>
                  </DropdownItem>
                  </ul>
                </DropdownMenu>
              )}
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
        <div>
          1000000円
        </div>
        <svg width="100" height="100" viewBox="0 0 32 32">
          <circle r="16" cx="16" cy="16" fill="#ccc" />
          <path d="M16,16 l0,-16 A16,16 0 0,1 28.97,8.14 z" fill="#4CAF50" /> 
          <path d="M16,16 l0,-16 A16,16 0 1,1 28.97,8.14 z" fill="#FFC107" />
        </svg>
        <section>
          <h2>投信</h2>
          <ul>
            <li>
              <p>テスト投信</p>
              <ul>
                <li>100001円</li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h2>銀行</h2>
          <ul>
            <li>
              <p>テスト銀行</p>
              <ul>
                <li>100001円</li>
              </ul>
            </li>
          </ul>
        </section>
      </SFloat>
      <SHomeFloat>
        <h1>家計簿</h1>
        <div>最新の入出金
        <section>
          <h2>2021年1月</h2>
          <ul>
            <li>
              <p>2021/1/1</p>
              <ul>
                <li>1000円</li>
              </ul>
            </li>
            <li>
              <p>2021/1/2</p>
              <ul>
                <li>2000円</li>
              </ul>
            </li>
          </ul>
        </section>
        </div>

      </SHomeFloat>
    </SHome>
    <div>
      <Link href="/testtest">家計簿</Link>
    </div>
    </>
  )
}

export default Home
