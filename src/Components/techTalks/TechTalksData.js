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
    title: "Design Thinking",
    speakerName: "Jacob Robinson",
    speakerDesignation: "Product Designer @Cred",
    date: "14 Oct 2021",
    time: "4 pm IST",
    hasButton:
      date === "2021-10-14" && time >= "16:0:0" && time <= "17:0:0"
        ? true
        : false,
  },
  {
    id: 2,
    speakerImage: speaker1,
    title: "IOT",
    speakerName: "Jacob Robinson",
    speakerDesignation: "Product Designer @Cred",
    date: "15 Oct 2021",
    time: "5 pm IST",
    hasButton:
      date === "2021-10-14" && time >= "16:14:0" && time <= "17:0:0"
        ? true
        : false,
  },
  {
    id: 3,
    speakerImage: speaker1,
    title: "Yes",
    speakerName: "Jacob Robinson",
    speakerDesignation: "Product Designer @Cred",
    date: "16 Oct 2021",
    time: "6 pm IST",
    hasButton:
      date === "2021-10-14" && time >= "16:0:0" && time <= "16:18:0"
        ? true
        : false,
  },
];
