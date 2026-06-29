import withoutWarning from '$lib/assets/WithoutWarning.gif';
import reparations from '$lib/assets/Reparations.png';
import priceTracker from '$lib/assets/PT_MAIN1.png';
import voterGuide from '$lib/assets/voterguide2024.png';

export const projects = [
    {
    slug: "price-tracker",
    title: "ABC Price Tracker",
    subtitle: "Data Visualization Tool",
    description: "Built using R and Svelte 5 to track cost of living across the top 100 U.S. metros, streamlining inflation reporting currently and historically.",
    tags: ["Svelte 5", "R", "Github","Layercake", "Layerchart"],
    image: priceTracker,
    link: "https://price-tracker.data.abcotv.com/",
    year: "2025"
  },
  {
    slug: "voter-guide",
    title: "ABC Voter Guide 2024",
    subtitle: "Helping Voters Make Sense of Their Local Elections",
    description: "Built using Javascript, HTML and CSS as well as Bootstrap to help voters find information in a more streamlined manner about important dates, candidates, polling places, bills and more.",
    tags: ["Javascript", "CSS", "HTML", "Illustrator", "Bootstrap"],
    image: voterGuide,
    link: "https://abc7chicago.com/feature/post/voter-guide-2024-illinois-indiana-wisconsin/15435667/",
    year: "2024"
  },
  {
    slug: "reparations-doc",
    title: "California's Case for Reparations",
    subtitle: "Emmy-Winning Documentary",
    description: "Created explainer and data visuals for an Emmy-winning documentary on the nation's first state-level reparations task force and California's approach to reparations.",
    tags: ["Adobe After Effects", "Adobe Illustrator", "Post-Production"],
    image: reparations,
    link: "https://www.youtube.com/watch?v=oTLXrT_ncw8",
    award: "Emmy Winner",
    year: "2025"
  },
    {
    slug: "without-warning",
    title: "Without Warning",
    subtitle: "Interactive Scrolly-Telling Investigation and National Broadcast Reporting",
    description: "Visualized the investigation that exposed smoke alarm failures in thousands of HUD housing complexes, prompting a federal overhaul of the inspection system.",
    tags: ["After Effects", "Illustrator", "Scrollytelling"],
    image: withoutWarning,
    link: "https://dig.abclocal.go.com/wls/without-warning-chicago/index.html",
    award: "RTDNA Edward R. Murrow Award",
    year: "2022"
  }
];