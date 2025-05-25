import Header from "../components/Header";
import Hero from "../components/Hero";
import CardSection from "../components/CardSection";
import FormSection from "../components/FormSection";
import Footer from "../components/Footer";
import DownloadSection from "../components/DownloadSection";
import ImageSection from "../components/ImageSection";
import TagsSection from "../components/TagsSection";
import CardListSection from "../components/CardListSection";
import { styled } from "styled-components";

const TopContent = styled.div`
  position: relative;
  overflow-x: hidden;

  @media (max-width: 768px) {
    overflow-x: hidden;
    background-color: #dfbbfe;
  }
`;

const HeroImg = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 4;
  height: 100%;
  width: auto;
  max-width: 31.625rem;
  object-fit: contain;

  @media (max-width: 768px) {
    position: absolute;
    right: -10rem;
    top: 0rem;
    bottom: 0;
    height: 100%;
    width: 85%;
    max-width: none;
    z-index: 0;
  }
`;

export default function Home() {
  return (
    <>
      <TopContent>
        <Header />

        <Hero />

        <HeroImg src="/hero/heroLogo.png" alt="Logo no hero" />
      </TopContent>
      {/* <Categories /> */}
      <CardSection />

      <ImageSection />
      <DownloadSection />
      {/* <AppSection /> */}
      <TagsSection />
      <CardListSection />
      <FormSection />
      <Footer />
    </>
  );
}
