// importing images
import hackathonImg from "./assets/hackathon.png";
import designathonImg from "./assets/designathon.png";
import codingContestImg from "./assets/codingcontest.png";

import designathonPdf from "./assets/pdfs/designathon.pdf";
import hackofiestaPdf from "./assets/pdfs/hackofiesta.pdf";
// import codefiestaPdf from "./assets/pdfs/designathon.pdf";

// Testing data
export default [
  {
    id: 1,
    competitionImage: hackathonImg,
    competitionTitle: "Hack-o-Futurista",
    competitionDeadline: "16th Oct 12:00am IST",
    competitionLink:
      "https://dare2compete.com/competition/hack-o-futurista-tantrafiesta-2021-indian-institute-of-information-technology-iiit-nagpur-223255/",
    rulebookPdf: hackofiestaPdf,
  },
  {
    id: 2,
    competitionImage: designathonImg,
    competitionTitle: "CodeFiesta",
    competitionDeadline: "17th Oct 06:00pm IST",
    competitionLink:
      "https://dare2compete.com/hackathon/code-fiesta-tantrafiesta-2021-indian-institute-of-information-technology-iiit-nagpur-223495/",
    rulebookPdf: "",
  },
  {
    id: 3,
    competitionImage: codingContestImg,
    competitionTitle: "Designathon",
    competitionDeadline: "16th Oct 12:00am IST",
    competitionLink:
      "https://dare2compete.com/competition/design-a-thon-tantrafiesta-2021-indian-institute-of-information-technology-iiit-nagpur-223462/",
    rulebookPdf: designathonPdf,
  },
];
