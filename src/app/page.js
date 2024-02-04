"use client";
import Header from "@/components/Header";
import styled from "styled-components";
import SectionLayout from "@/components/SectionLayout";
import Card from "@/components/Card";
import { cards } from "../data/cards";
import Fullpage from "@/components/Fullpage";
import TextSection from "@/components/TextSection";
import Footer from "@/components/Footer";
import HorizontalWrapper from "@/components/HorizontalWrapper";

export default function Home() {
  return (
    <>
      <Header />
      <MainStyled>
        <SectionLayout>
          <HorizontalWrapper height="40rem" direction={-1400}>
            <div className="cards">
              {cards.map((card, index) => {
                return (
                  <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
        </SectionLayout>
        <Fullpage />
        <HorizontalWrapper height="40rem" direction={1400}>
          <div className="cards" style={{ right: 0 }}>
            {cards.map((card, index) => {
              return (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              );
            })}
          </div>
        </HorizontalWrapper>

        <SectionLayout>
          <TextSection />
        </SectionLayout>
      </MainStyled>
      <Footer />
    </>
  );
}

const MainStyled = styled.main`
  min-height: 100vh;
  width: 100%;

  .cards {
    display: grid;
    grid-template-columns: repeat(5, 30rem);
    gap: 4rem;
    position: absolute;
  }

  .video {
    padding: 2rem;
    background-color: #161616;
    border-radius: 1rem;
    iframe {
      border: none;
      width: 100%;
      height: 52rem;
    }
  }
`;
