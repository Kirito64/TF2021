import speaker1 from "./assets/speaker1.png";
import debanikRoyImage from "./assets/debanikRoy.png";
import pranavLadImage from "./assets/pranavLad.jpg";
import shantanuShubhamImage from "./assets/shantanuShubham.png"
import satishRajamaniImage from "./assets/satishRajamani.jpg"

var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

export default [
  {
    id: 1,
    speakerImage: debanikRoyImage,
    title: "Robotics and Autonomous Systems",
    speakerName: "Dr. Debanik Roy",
    speakerDesignation:
      "Scientist, Division of Remote Handling & Robotics, BARC",
    date: "16th Oct 2021",
    time: "7 pm IST",
    directTo: "debanikRoy",
    joinLink:
      "https://dare2compete.com/workshop/robotics-and-autonomous-systems-session-tantrafiesta-2021-indian-institute-of-information-technology-iiit-nagpu-224920?lb=cYJBCV0",
  },
  {
    id: 2,
    speakerImage: pranavLadImage,
    title: "ML Made Easy",
    speakerName: "Dr. Pranav Lad",
    speakerDesignation: "Engineer @MathWorks",
    date: "18th Oct 2021",
    time: "2:30 pm IST",
    directTo: "pranavLad",
    joinLink:
      "https://dare2compete.com/workshop/ml-made-easy-using-matlab-workshop-tantrafiesta-2021-indian-institute-of-information-technology-iiit-nagpur-224748",
  },
  {
    id: 3,
    speakerImage: satishRajamaniImage,
    title: "Advances in Technology and the Future of Work",
    speakerName: "Satish Rajamani",
    speakerDesignation: "CEO @Four Clover Technology Solutions",
    date: "23th Oct 2021",
    time: "8 pm IST",
    directTo: "satishRajamani",
    joinLink:
      "https://dare2compete.com/p/ai-application-in-future-session-duplicate-tantrafiesta-2021-indian-institute-of-information-technology-iiit-nagpur-228925?lb=D8BuQTU",
  },
];
