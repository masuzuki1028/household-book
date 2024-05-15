import type { NextPage } from 'next'
import Tabs from '@/components/Tabs'
import TabPanel from '@/components/TabPanel'

export const Portfolio: NextPage = () => {
  return (
    <>
      <Tabs>
        <TabPanel label="資産内訳">資産内訳の内容</TabPanel>
        <TabPanel label="資産推移">資産推移の内容</TabPanel>
        <TabPanel label="バランスシート">バランスシートの内容</TabPanel>
      </Tabs>
    </>
  )
}

export default Portfolio
