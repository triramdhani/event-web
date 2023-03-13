import Navbar5 from '@/components/Navbar/NavSecondary'
import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout'
import { NextPageWithLayout } from './page'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <section>
        <p>next js starter by tri</p>
      </section>
    </>
  )
}

export default Home

Home.getLayout = (page) => {
  return (
    <>
      <Navbar5 />
      {page}
    </>
  )
}
