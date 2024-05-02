import TabPanel from '@/components/TabPanel'
import Tabs from '@/components/Tabs'
import type { NextPage } from 'next'

const profile: NextPage = () => {
  return (
    <div>
      <h1>Profile</h1>
      <Tabs>
        <TabPanel label="今月の予算">今月の予算の内容</TabPanel>
        <TabPanel label="予算の設定">予算の設定の内容</TabPanel>
        <TabPanel label="大項目の設定">大項目の設定の内容</TabPanel>
      </Tabs>
    </div>
  )
}

export default profile
