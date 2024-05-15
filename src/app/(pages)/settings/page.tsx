import type { NextPage } from 'next'
import Tabs from '@/components/Tabs'
import TabPanel from '@/components/TabPanel'

const Settings: NextPage = () => {
  return (
    <>
      <Tabs>
        <TabPanel label="アカウントの設定">アカウントの設定の内容</TabPanel>
      </Tabs>
    </>
  )
}

export default Settings
