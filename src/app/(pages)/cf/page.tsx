import type { NextPage } from 'next'
import Tabs from '@/components/Tabs'
import TabPanel from '@/components/TabPanel'
import React from 'react'
import TransactionsCalendar from '@/components/TransactionsCalendar'


const Cf: NextPage = () => {
  return (
    <>
      <Tabs>
        <TabPanel label="入出金">入出金の内容</TabPanel>
        <TabPanel label="収支内訳">収支内訳の内容</TabPanel>
        <TabPanel label="月次推移">月次推移の内容</TabPanel>
      </Tabs>
      <TransactionsCalendar />

    </>
  )
}

export default Cf
