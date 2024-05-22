'use client';
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // インタラクションプラグインをインポート
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CalendarContainer = styled.div`
  max-width: 664px;
  height: 526px;
  margin: auto;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  background: #fff;

  .fc {
    max-height: 526px; // FullCalendar自体の高さ制限
  }
`;


const DetailsContainer = styled.div`
  padding: 20px;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
`;

const DetailsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border: 1px solid #dee2e6;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f0f0f0;
  }
`;

const TransactionDetails = ({ transactions }) => (
  <DetailsContainer>
    <h2>月間取引詳細</h2>
    <DetailsTable>
      <thead>
        <tr>
          <th>日付</th>
          <th>説明</th>
          <th>金額 (¥)</th>
          <th>カテゴリ</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.category}</td>
          </tr>
        ))}
      </tbody>
    </DetailsTable>
  </DetailsContainer>
);

const TransactionsCalendar = () => {
  const transactions = [
    { title: '+￥1,000', date: '2024-05-01', amount: 1000,description: '給料', category: '給与' },
    { title: '-￥500', date: '2024-05-01', amount: -500 ,description: '日用品', category: '生活費' },
    { title: '+￥2,000', date: '2024-05-02', amount: 2000,description: '収入', category: '事業所得'  },
    { title: '-￥1,200', date: '2024-05-02', amount: -1200 ,description: '水道代', category: '光熱費'  }
  ];

  const events = transactions.map(transaction => ({
    title: transaction.title,
    date: transaction.date,
    color: transaction.amount >= 0 ? 'black' : 'red'
  }));

  return (
    <Container>
      <CalendarContainer>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          height="auto"
          contentHeight="auto"
          events={events}
        />
      </CalendarContainer>
      <TransactionDetails transactions={transactions} />
    </Container>
  );
};

export default TransactionsCalendar;
