import NavbarBox from "@/components/Navbar/Navbar";
import Container from "@/components/Section/Container";
import SecondSection from "@/components/Section/SecondSection";
import FirstSection from "@/components/Section/FirstSection";
import Third from "@/components/Section/ThirdSection";
import PlacesSection from "@/components/Section/PlacesSection";
import PubSection from "@/components/Section/PubSection";
import Payment from "@/components/Section/Payment"
import Contact from "@/components/Section/Contact";

export default function Home() {
  return (
    <main className="w-full">
      <NavbarBox />
      <Container />
      <FirstSection />
      <SecondSection />
      <Third />
      <PlacesSection />
      <PubSection />
      <Payment />
      <Contact />
    </main>
  )
}
