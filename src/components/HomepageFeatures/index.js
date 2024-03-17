import React from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { RichmondAllTimeline } from "@site/src/components/d3/richmond_timeline";
import styles from "./styles.module.css";

export function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <RichmondAllTimeline />
      </div>
    </section>
  );
}

export function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p>
          &quot;Between a high, solid wall and an egg that breaks it, I will
          always stand on the side of the egg.&quot;
        </p>
        <p>― Haruki Murakami</p>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons} />
      </div>
    </header>
  );
}
