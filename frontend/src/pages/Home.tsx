import Header from "../components/Header";
import Hero from "../components/Hero";
import CitiesList from "../components/CitiesList";
import FormSection from "../components/FormSection";
import Footer from "../components/Footer";
import DownloadSection from "../components/DownloadSection";
import ImageSection from "../components/ImageSection";
import TagsSection from "../components/TagsSection";
import CardListSection from "../components/CardListSection";
import * as S from "./HomeStyles";

export default function Home() {
  return (
    <>
      <S.TopContent>
        <S.LeftSide>
          <Header />
          <Hero />
        </S.LeftSide>

        <S.RightSide>
          <S.HeroImg src="/hero/heroLogo.png" alt="Logo no hero" />
        </S.RightSide>
      </S.TopContent>
      <CitiesList />
      <ImageSection />
      <DownloadSection />
      <TagsSection />
      <CardListSection />
      <FormSection />
      <Footer />
    </>
  );
}
