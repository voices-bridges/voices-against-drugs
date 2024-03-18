/**
 * https://react-chrono.prabhumurthy.com/introduction/getting-started.html
 * */
import React from "react";
import { Chrono } from "react-chrono";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

const DATA = [
  {
    title: "2024-01-30",
    cardTitle: "Richmond SCS Motion proposed",
    url: "https://citycouncil.richmond.ca/__shared/assets/Motion_Supervised_drug_consumption_site72161.pdf",
    cardSubtitle:
      "City Councillors Kash Heed and Laura Gillanders proposed a motion to conduct a feasibility analysis for establishing a supervised drug consumption site. ",
    cardDetailedText: `Subject: Research, examine, and develop actions to establish a supervised drug consumption site within the Richmond General Hospital Precinct to address the growing public health crisis related to drug addiction and overdose deaths.  Members of Council: Laura Gillanders and Kash Heed Meeting: General Purposes Committee`,
  },
  {
    title: "2024-02-04",
    cardTitle: "Change.org Against SCS petition started",
    url: "https://www.change.org/p/stop-the-safe-drug-consumption-site-in-richmond-bc",
    cardSubtitle: `Richmond resident Gady Tse initiated a petition against the supervised drug consumption site project on change.org.`,
    cardDetailedText: `I am a resident of Richmond, BC, and a parent to a six-year-old child. I am deeply concerned about the proposed construction of a safe drug consumption site in our community. This is not just an abstract issue for me; it's personal.
The introduction of such a facility will inevitably attract more drug addicts to our city. This could lead to an increase in crime rates and public safety issues that would directly affect us all - especially our children who are growing up here. Furthermore, there are potential health risks associated with these sites that cannot be ignored.
Our concerns are will the communities with safe consumption sites would increase in drug-related crimes and public disorder incidents. Additionally, while these sites aim at reducing harm among users, they can inadvertently contribute to increased substance abuse due to easy access.
We understand that those struggling with addiction need help and support but introducing such facilities might not be the best solution for everyone involved – especially when considering its potential negative impacts on communities like ours.
We urge you to reconsider this decision for the sake of all Richmond residents' safety and well-being. Please sign this petition if you share these concerns.
`,
  },
  {
    title: "2024-02-05",
    cardTitle: "The Motion 1st reading passed",
    cardSubtitle: "8 in favor, 1 against",
    media: {
      name: "Richmond debates supervised consumption site",
      source: {
        url: "https://www.youtube.com/embed/GoAaosM-MaY?si=rsMm3P4h5Dp4e7oJ&amp;start=25",
      },
      type: "VIDEO",
    },
    url: "https://www.youtube.com/watch?v=GoAaosM-MaY&t=24s",
    cardDetailedText: `The motion was approved by the city council (8 in favor, 1 against, with Councillor Chak Au opposing). During the hearing, 10 Richmond residents spoke (7 in favor, 3 against)`,
  },
  {
    title: "2024-02-08 17:00",
    cardTitle: "RITE Richmond slams 'scare tactics'",
    cardSubtitle:
      "Letters: Decision to open Richmond safe-consumption site depends on VCH",
    url: "https://www.richmond-news.com/opinion/letters-decision-to-open-richmond-safe-consumption-site-depends-on-vch-8225879",
    cardDetailedText: `RITE Richmond (Carol Day, Michael Wolfe, Laura Gillanders, Jerome Dickey, John Roston) slams 'scare tactics' from those sharing 'inflammatory and incorrect' information about the proposed safe drug consumption site.`,
  },
  {
    title: "2024-02-09",
    cardTitle: "Change.org Against SCS petition growing rapidly",
    media: {
      name: "Richmond debates supervised consumption site",
      source: {
        url: "https://www.youtube.com/embed/GoAaosM-MaY?si=9yE-W0LhFsZBwlMi&amp;start=39",
      },
      type: "VIDEO",
    },
    url: "https://www.richmond-news.com/local-news/petition-against-richmond-safe-consumption-site-gathers-nearly-15-000-votes-8280095",
    cardSubtitle: `Richmond resident Gady Tse's petition gathered 15,000 signatures within five days.`,
    cardDetailedText: `A petition asking the City of Richmond to stop considering a safe drug consumption site in Richmond has collected nearly 15,000 names so far.`,
  },
  {
    title: "2024-02-10",
    cardTitle: "Suspicious conflict of interests",
    cardSubtitle:
      "Potential conflict of interests between Lucy Scientific Discovery company and a city councillor",
    url: "https://www.reddit.com/r/richmondbc/comments/1anlah2/concerns_over_potential_conflict_of_interest/",
    cardDetailedText: `a Reddit forum post brought to light that one of the councilors who initiated the motion had accepted a special advisor position at Lucy Scientific Discovery company on March 29, 2023. This company primarily focuses on producing alternative experimental drugs for drug addicts.`,
  },
  {
    title: "2024-02-11",
    cardTitle: "Council adopted a Motion 7-2 to proceed with further analysis",
    cardSubtitle:
      " That interest has also resulted in a large amount of misinformation and misunderstanding of what will go before Council on Monday and what a supervised consumption site is",
    url: "https://www.richmond.ca/city-hall/news/2024/clarification11feb2024.htm",
  },
  {
    title: "2024-02-12",
    cardTitle: "1st Public hearing on the issue.",
    cardSubtitle: "36 people speaking, with 34 opposing and 2 supporting.",
    url: "https://citycouncil.richmond.ca/agendas/council/021224_minutes.htm",
    cardDetailedText: `Public hearing on the issue was reconvened with 36 people speaking, with 34 opposing and 2 supporting.`,
    media: {
      name: "Richond BC, Regular Council - February 12, 2024",
      source: {
        url: "https://www.youtube.com/embed/EaJMa4BqmF4?si=shmNUUxq_3wvCdKu",
      },
      type: "VIDEO",
    },
  },
  {
    title: "2024-02-12",
    cardTitle: "Protesters met a Radical activist",
    cardSubtitle:
      "A radical activist spews racist tirade against a Chinese man",
    url: "https://www.youtube.com/watch?v=_Y4ZiqHP5B4",
    cardDetailedText: `"Go back to hongkong!"`,
    media: {
      name: "Radical activist spews racist tirade against a Chinese man",
      source: {
        url: "https://www.youtube.com/embed/_Y4ZiqHP5B4?si=H1cGKLvZvj_ZvYDK",
      },
      type: "VIDEO",
    },
  },
  {
    title: "2024-02-13 12:05",
    cardTitle: "BC Premier David Eby comment",
    cardSubtitle: "SCS won't align with the actual needs of Richmond",
    url: "https://globalnews.ca/news/10291572/richmond-supervised-consumption-site-proposal-chaos",
    cardDetailedText: `BC Premier David Eby, in an unrelated event, expressed surprise at the timing and necessity of Richmond City Council's motion, stating it doesn't align with the actual needs of Richmond.`,
  },
  {
    title: "2024-02-13 19:00",
    cardTitle: "2nd Public hearing on the issue.",
    cardSubtitle: "45 people speaking (36 against, 9 in favor)",
    url: "https://citycouncil.richmond.ca/agendas/council/021224_minutes.htm",
    media: {
      name: "Richond BC, Regular Council - February 13, 2024",
      source: {
        url: "https://www.youtube.com/embed/Gzt_cKQKR_g?si=1QTFL4YcY9YYolLF",
      },
      type: "VIDEO",
    },
    cardDetailedText:
      "Due to an excess of registered speakers, the hearing was adjourned to the next day with 45 people speaking (36 against, 9 in favor). Allegations of potential conflicts of interest involving Councilor Kash Heed were raised. Councilor Kash Heed issued a statement disclosing that his employment contract with Lucy Scientific Discovery company had terminated in November of the same year.",
  },
  {
    title: "2024-02-13 19:00",
    cardTitle: "Protesters gathered outside",
    cardSubtitle: "Several hundreds people protested",
    url: "https://citycouncil.richmond.ca/agendas/council/021224_minutes.htm",
    media: {
      name: "Proposed drug consumption site in Richmond draws backlash",
      source: {
        url: "https://www.youtube.com/embed/b3-EfdflsFw?si=9gao3B5nQkuFv6R9",
      },
      type: "VIDEO",
    },
    cardDetailedText:
      "In the evening, approximately 400 protesters gathered outside the venue, and change.org collected 20,000 signatures opposing the motion.",
  },
  {
    title: "2024-02-13 23:10",
    cardTitle: "Motion 2nd reading passed",
    cardSubtitle: "7 in favor and 2 against",
    cardDetailedText:
      "The city council conducted a second vote on the motion, resulting in a final tally of 7 in favor and 2 against. Councilor Chak Au maintained his opposition, and Councilor Alexa Loo also voted against, expressing concerns about the motion's vague wording and suggesting it be shelved for further review. Councilor Carol Day criticized some speakers for their divisive remarks, admonishing them with 'Shame on you!' The concluding remarks of other councilors on that day are as follows:  In the evening, approximately 400 protesters gathered outside the venue, and change.org collected 20,000 signatures opposing the motion. ",
    url: "https://www.richmond.ca/city-hall/news/2024/clarification11feb2024.htm",
    media: {
      name: "Richond BC, Regular Council - February 13, 2024",
      source: {
        url: "https://www.youtube.com/embed/Gzt_cKQKR_g?si=Myq-PeOqRVRQV0bu&amp;start=11955",
      },
      type: "VIDEO",
    },
  },
  {
    title: "2024-02-14 10:00",
    cardTitle: "Vancouver Coastal Health (VCH) Reply",
    cardSubtitle:
      "Data didn't support a standalone supervised consumption site (SCS)",
    cardDetailedText:
      "Vancouver Coastal Health (VCH) publicly stated that a standalone supervised consumption site (SCS) isn't suitable for Richmond. ",
    url: "https://vancouver.citynews.ca/2024/02/14/richmond-supervised-consumption-site-vch/",
  },
  {
    title: "2024-02-14",
    cardTitle: "Richmond Mayor Malcolm Brodie CBC interview",
    cardSubtitle: "Nothing had been rushed",
    cardDetailedText:
      "Mayor Malcolm Brodie was interviewed by a CBC reporter. When asked about the concerns of some Richmond locals regarding the perceived rush in approving the motion, Brodie defended the council's process. He stated that nothing had been rushed and emphasized that the council had diligently followed the established procedure. ",
    url: "https://www.youtube.com/watch?v=EixLhBO84PI&t=179s",
    media: {
      name: "BC Today, Feb. 14: Richmond drug consumption site",
      source: {
        url: "https://www.youtube.com/embed/EixLhBO84PI?si=yBNCBbAzkHRP4Luu&amp;start=179",
      },
      type: "VIDEO",
    },
  },
  {
    title: "2024-02-16",
    cardTitle: "The radical activist's apology",
    cardSubtitle:
      "Woman says her racist rant at Richmond city hall 'incredibly wrong'",
    cardDetailedText:
      "She claimed people in the crowd were suggesting drug addicts should just die (this was not captured on video), and this “infuriated” her and caused her to react.",
    url: "https://www.richmond-news.com/local-news/woman-says-her-racist-rant-at-richmond-city-hall-incredibly-wrong-8314696",
  },
  {
    title: "2024-02-16",
    cardTitle: "Richmond Mayor Malcolm Brodie CTV interview",
    cardSubtitle:
      "Continue discussion of feasibility of implementing the supervised consumption site (SCS) project",
    cardDetailedText:
      "Mayor Malcolm Brodie confirmed during an interview with CTV's morning news that he had received Vancouver Coastal Health's response. Despite this, he stated that he would still meet with provincial health officials to discuss the feasibility of implementing the supervised consumption site (SCS) project in Richmond. ",
    url: "https://bc.ctvnews.ca/video/c2868787-the-future-of-harm-reduction-in-richmond",
  },
  {
    title: "2024-02-19 11:30",
    cardTitle: "Richmond Citizens protest",
    cardSubtitle: "No more silence",
    cardDetailedText:
      "Around 900 Richmond residents held a protest at the city library, with speeches from various individuals, including politicians. The protest lasted nearly 3 hours, with a peak attendance of 1,300. Later that afternoon, Councilor Carol Day said in an interview that the protesters had been misled by politicians trying to gain votes. She clarified that the motion was just to study the feasibility of the project, and the final decision was up to Vancouver Coastal Health. She stressed that the city's priority was to offer more services to people with drug addiction. Although VCH didn't see the need for the SCS project, they were open to other supportive programs, which was in line with the city council's goals. ",
    url: "https://www.richmond-news.com/local-news/no-drugs-in-richmond-protest-held-on-family-day-8327694 ",
  },
  {
    title: "2024-02-20",
    cardTitle: "Richmond City Government public statement",
    cardSubtitle: "The city won't do project's operation and approval",
    cardDetailedText:
      "Richmond City Government issued another public statement reiterating that the city council and government only had the authority to apply for the supervised consumption site (SCS) project. The project's operation and approval were under the jurisdiction of Vancouver Coastal Health, affiliated with the provincial government.",
    url: "https://www.richmond.ca/city-hall/news/2024/noscs20feb2024.htm",
  },
  {
    title: "2024-02-26",
    cardTitle: "Mayor Malcolm Brodie issued a public statement",
    cardSubtitle: "Supervised consumption site (SCS) project been shelved",
    cardDetailedText:
      "Mayor Malcolm Brodie issued a public statement to several news outlets, acknowledging that discussions regarding the supervised consumption site (SCS) project had been completely shelved by the provincial government. ",
    url: "https://www.richmond.ca/city-hall/news/2024/clarification26feb2024.htm",
  },
  {
    title: "2024-02-26 20:40",
    cardTitle: "Mayor Malcolm Brodie reiterating statement",
    cardSubtitle:
      "I would not characterize their action, but it doesn't generate a lot of respect from me",
    cardDetailedText:
      "Mayor Malcolm Brodie reiterated his earlier public statement during the city council meeting. He expressed his reluctance to comment on Vancouver Coastal Health's response but stated, 'I would not characterize their action, but it doesn't generate a lot of respect from me' ",
    url: "https://www.malcolmbrodie.com/2024/02/27/letters-richmond-mayor-clarifies-safe-consumption-site-motion",
  },
];

function RichmondSCSTimeline() {
  if (ExecutionEnvironment.canUseDOM) {
    return <Chrono items={DATA} mode="VERTICAL" />;
  }
}

export { RichmondSCSTimeline };
