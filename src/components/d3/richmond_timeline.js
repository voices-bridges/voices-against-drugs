/* https://walterra.github.io/d3-milestones/?path=/story/d3-milestones-readme-md--page
 */
import React, { useEffect, useRef } from "react";
import milestones from "d3-milestones";

const preMotionData = [
  {
    day: "2024-01-30 00:00",
    text: "City Councillors Kash Heed and Laura Gillanders proposed a motion to conduct a feasibility analysis for establishing a drug injection site. ",
    url: "https://citycouncil.richmond.ca/__shared/assets/Motion_Supervised_drug_consumption_site72161.pdf",
  },
  {
    day: "2024-02-04 00:00",
    text: "Richmond resident Gady Tse initiated a petition against the injection site project on change.org, garnering 12,000 signatures within a day.",
    url: "https://www.change.org/p/stop-the-safe-drug-consumption-site-in-richmond-bc",
  },
  {
    day: "2024-02-05 00:00",
    text: "The motion was approved by the city council (8 in favor, 1 against, with Councillor Chak Au opposing). During the hearing, 10 Richmond residents spoke (7 in favor, 3 against).",
    url: "https://www.youtube.com/watch?v=GoAaosM-MaY&t=24s",
  },
  {
    day: "2024-02-10 00:00",
    text: "a Reddit forum post brought to light that one of the councilors who initiated the motion had accepted a special advisor position at Lucy Scientific Discovery company on March 29, 2023. This company primarily focuses on producing alternative experimental drugs for drug addicts.",
    url: "https://www.reddit.com/r/richmondbc/comments/1anlah2/concerns_over_potential_conflict_of_interest/",
  },
  {
    day: "2024-02-12 00:00",
    text: "Public hearing on the issue was reconvened with 36 people speaking, with 34 opposing and 2 supporting. ",
    url: "https://citycouncil.richmond.ca/agendas/council/021224_minutes.htm",
  },
  {
    day: "2024-02-13 12:05",
    text: "BC Premier David Eby, in an unrelated event, expressed surprise at the timing and necessity of Richmond City Council's motion, stating it doesn't align with the actual needs of Richmond.",
    url: "https://globalnews.ca/news/10291572/richmond-supervised-consumption-site-proposal-chaos",
  },
  {
    day: "2024-02-13 19:00",
    text: "Due to an excess of registered speakers, the hearing was adjourned to the next day with 45 people speaking (36 against, 9 in favor). Allegations of potential conflicts of interest involving Councilor Kash Heed were raised. Councilor Kash Heed issued a statement disclosing that his employment contract with Lucy Scientific Discovery company had terminated in November of the same year.",
    url: "https://citycouncil.richmond.ca/agendas/council/021224_minutes.htm",
  },
  {
    day: "2024-02-13 23:10",
    text: "the city council conducted a second vote on the motion, resulting in a final tally of 7 in favor and 2 against. Councilor Chak Au maintained his opposition, and Councilor Alexa Loo also voted against, expressing concerns about the motion's vague wording and suggesting it be shelved for further review. Councilor Carol Day criticized some speakers for their divisive remarks, admonishing them with 'Shame on you!' The concluding remarks of other councilors on that day are as follows:  In the evening, approximately 400 protesters gathered outside the venue, and change.org collected 20,000 signatures opposing the motion. ",
    url: "https://www.richmond.ca/city-hall/news/2024/clarification11feb2024.htm",
  },
];

const postMotionData = [
  {
    day: "2024-02-14 10:00",
    text: "Vancouver Coastal Health (VCH) publicly stated that a standalone supervised consumption site (SCS) isn't suitable for Richmond. ",
    url: "https://vancouver.citynews.ca/2024/02/14/richmond-supervised-consumption-site-vch/",
  },
  {
    day: "2024-02-14 00:00",
    text: "Mayor Malcolm Brodie was interviewed by a CBC reporter. When asked about the concerns of some Richmond locals regarding the perceived rush in approving the motion, Brodie defended the council's process. He stated that nothing had been rushed and emphasized that the council had diligently followed the established procedure. ",
    url: "https://www.youtube.com/watch?v=EixLhBO84PI&t=179s",
  },
  {
    day: "2024-02-16 00:00",
    text: "Mayor Malcolm Brodie confirmed during an interview with CTV's morning news that he had received Vancouver Coastal Health's response. Despite this, he stated that he would still meet with provincial health officials to discuss the feasibility of implementing the supervised consumption site (SCS) project in Richmond. ",
    url: "https://bc.ctvnews.ca/video/c2868787-the-future-of-harm-reduction-in-richmond",
  },
  {
    day: "2024-02-19 11:30",
    text: "Around 900 Richmond residents held a protest at the city library, with speeches from various individuals, including politicians. The protest lasted nearly 3 hours, with a peak attendance of 1,300. Later that afternoon, Councilor Carol Day said in an interview that the protesters had been misled by politicians trying to gain votes. She clarified that the motion was just to study the feasibility of the project, and the final decision was up to Vancouver Coastal Health. She stressed that the city's priority was to offer more services to people with drug addiction. Although VCH didn't see the need for the SCS project, they were open to other supportive programs, which was in line with the city council's goals. ",
    url: "https://www.richmond-news.com/local-news/no-drugs-in-richmond-protest-held-on-family-day-8327694 ",
  },
  {
    day: "2024-02-20 00:00",
    text: "Richmond City Government issued another public statement reiterating that the city council and government only had the authority to apply for the supervised consumption site (SCS) project. The project's operation and approval were under the jurisdiction of Vancouver Coastal Health, affiliated with the provincial government.",
    url: "https://www.richmond.ca/city-hall/news/2024/noscs20feb2024.htm",
  },
  {
    day: "2024-02-26 00:00",
    text: "Mayor Malcolm Brodie issued a public statement to several news outlets, acknowledging that discussions regarding the supervised consumption site (SCS) project had been completely shelved by the provincial government. ",
    url: "https://www.richmond.ca/city-hall/news/2024/clarification26feb2024.htm",
  },
  {
    day: "2024-02-26 20:40",
    text: "Mayor Malcolm Brodie reiterated his earlier public statement during the city council meeting. He expressed his reluctance to comment on Vancouver Coastal Health's response but stated, 'I would not characterize their action, but it doesn't generate a lot of respect from me' ",
    url: "https://www.malcolmbrodie.com/2024/02/27/letters-richmond-mayor-clarifies-safe-consumption-site-motion",
  },
];

function GenerateTimelines(data, divID) {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      // Adjust height of the div here
      //   divRef.current.style.height = "1200px"; // Example: set height to 300px
    }
    // Load CSS
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href =
      "https://unpkg.com/d3-milestones/build/d3-milestones.css";
    document.head.appendChild(linkElement);
    // Load JS
    const scriptElement = document.createElement("script");
    scriptElement.src =
      "https://unpkg.com/d3-milestones/build/d3-milestones.min.js";
    scriptElement.async = true;
    scriptElement.onload = () => {
      // Initialize milestones and render timeline
      milestones(`#${divID}`)
        .orientation("horizontal") // horizontal or vertical
        .mapping({
          timestamp: "day",
        })
        .optimize(true)
        .parseTime("%Y-%m-%d %H:%M")
        .aggregateBy("hour")
        .render(data);
    };
    document.body.appendChild(scriptElement);

    // Clean up
    return () => {
      document.head.removeChild(linkElement);
      document.body.removeChild(scriptElement);
    };
  }, []);

  return <div id={divID} ref={divRef} />;
}

function RichmondTimeline() {
  return GenerateTimelines(preMotionData, "premotion");
}

function RichmondPostMotionTimeline() {
  return GenerateTimelines(postMotionData, "postmotion");
}

function RichmondAllTimeline() {
  return GenerateTimelines(
    preMotionData.concat(postMotionData),
    "motiontimeline",
  );
}

export { RichmondTimeline, RichmondPostMotionTimeline, RichmondAllTimeline };
