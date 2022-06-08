import Head from 'next/head';
import ContactUs from '../components/ContactUs';
import LandingSection from '../components/LandingSection';
import OurTeam from '../components/OurTeam';
import OurWork from '../components/OurWork';
import PriceTable from '../components/PriceTable';
import MobileHeader from '../components/mobile/MobileHeader';

export default function Home() {
  return (
    <div className="relative">
      <Head>
        <title>American lll barbershop</title>
      </Head>
      <MobileHeader />
      <LandingSection />
      <OurWork />
      <OurTeam />
      <PriceTable />
      <ContactUs />
    </div>
  );
}
