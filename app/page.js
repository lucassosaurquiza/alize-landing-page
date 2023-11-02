import HeaderComponent from '@/app/components/HeaderComponent'
import Layout from './layout'
import MainComponent from './components/MainComponent'
import FooterComponent from './components/FooterComponent'

export default function Home() {
  return (
    <>
      <Layout>
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
       
      </Layout>
    </>

  )
}
