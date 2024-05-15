import type { NextPage } from 'next'
import Tabs from '@/components/Tabs'
import TabPanel from '@/components/TabPanel'

const Accounts: NextPage = () => {
  return (
    <>
      <Tabs>
        <TabPanel label="登録済み金融機関">登録済み金融機関の内容</TabPanel>
        <TabPanel label="金融機関の追加">金融機関の追加の内容</TabPanel>
      </Tabs>
    </>
  )
}

export default Accounts
