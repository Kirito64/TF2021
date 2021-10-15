import speaker1 from "./assets/speaker1.png";

var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

export default [
  {
    id: 1,
    speakerImage: speaker1,
    title: "Robotics and Autonomous Systems",
    speakerName: "Dr. Debanik Roy",
    speakerDesignation:
      "Scientist, Division of Remote Handling & Robotics, BARC",
    date: "16th Oct 2021",
    time: "7 pm IST",
    hasButton:
      date === "2021-10-14" && time >= "07:0:0" && time <= "08:0:0"
        ? true
        : false,
    joinLink:
      "https://dare2compete.com/workshop/robotics-and-autonomous-systems-session-tantrafiesta-2021-indian-institute-of-information-technology-iiit-nagpu-224920?lb=cYJBCV0",
  },
  {
    id: 2,
    speakerImage: speaker1,
    title: "Artificial Intelligence and its Applications",
    speakerName: "Dr. Pranav Lad",
    speakerDesignation: "Product Designer @Cred",
    date: "18th Oct 2021",
    time: "2:30 pm IST",
    hasButton:
      date === "2021-10-14" && time >= "16:14:0" && time <= "17:0:0"
        ? true
        : false,
    joinLink:
      "https://dare2compete.com/workshop/ml-made-easy-using-matlab-workshop-tantrafiesta-2021-indian-institute-of-information-technology-iiit-nagpur-224748",
  },
  {
    id: 3,
    speakerImage: speaker1,
    title: "Emerging Technologies",
    speakerName: "Shantanu Shubham",
    speakerDesignation: "@Coding Ninjas",
    date: "19th Oct 2021",
    time: "6 pm IST",
    hasButton:
      date === "2021-10-14" && time >= "16:0:0" && time <= "16:18:0"
        ? true
        : false,
    joinLink: "https://bit.ly/3AwK4KY",
  },
];
