import TabPanel from '@/components/TabPanel'
import Tabs from '@/components/Tabs'
import type { NextPage } from 'next'

const Summary: NextPage = () => {
  return (
    <>
      <Tabs>
      <TabPanel label="今月の予算">今月の予算</TabPanel>
        <TabPanel label="予算の設定">予算の設定</TabPanel>
      </Tabs>
    </>
  )
}

export default Summary
