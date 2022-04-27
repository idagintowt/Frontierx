import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ImagesSection from '../components/Sections/ImagesSection/ImagesSection'
import DescriptionSection from '../components/Sections/DescriptionSection/DescriptionSection'
import AccordionsSection from '../components/Sections/AccordionsSection/AccordionsSection'

export default function Home() {
  return (<div className="lg:w-[75%] md:w-[90%] sm:w-full xs:w-full mx-auto my-0">
    <Head className="h-[1307px]">
      <title>Frontierx test app</title>
    </Head>
    <Header/>
    <main className="min-h-[81.688rem] w-full relative before:absolute before:w-full before:bg-main-gradient before:h-full before:-rotate-180">
      <ImagesSection/>
      <DescriptionSection/>
      <AccordionsSection/>
    </main>
    <Footer/>
  </div>)
}
