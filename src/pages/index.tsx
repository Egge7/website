/* module imports */
import type { NextPage } from "next";
import Head from "next/head";

/* component imports */
import Hero from "./../components/hero";
import { Background } from "../components/home";
import { TitleBanner, PrimaryContentCard } from "../components/banners";
import { BitcoinApps } from "../components/general";
import MonetizationCards from "../components/general/monetizationCards/MonetizationCards";

/* style imports */
import styles from "./index.module.css";

/* util imports */
import { staticData } from "./../utils/staticData";
const { index: PAGE_DATA } = staticData.pages;

const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{PAGE_DATA.headers.title}</title>
        <meta name="description" content={PAGE_DATA.headers.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero
          title={PAGE_DATA.hero.title}
          subtitle={PAGE_DATA.hero.subtitle}
          buttonText={PAGE_DATA.hero.button.text}
          buttonLink={PAGE_DATA.hero.button.link}
          background={Background}
        />
        <TitleBanner
          title={PAGE_DATA.benefits.title}
          subtitle={PAGE_DATA.benefits.subtitle}
        />
        {PAGE_DATA.benefits.cards.map((card, index) => (
          <PrimaryContentCard
            key={index}
            {...card}
            isReversed={index % 2 === 1}
          />
        ))}
        <BitcoinApps />
        <TitleBanner
          title={PAGE_DATA.monetization.title}
          subtitle={PAGE_DATA.monetization.subtitle}
        />
        <MonetizationCards />
      </main>
    </div>
  );
};

export default HomePage;
