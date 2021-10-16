var today = new Date();
var currentDate =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var currentTime =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

export default [
  {
    id: 1,
    title: "BGMI Round 1",
    date: "16th Oct, 2021, 2021",
    time: "12:00pm to 01:00pm",
    isLive:
      currentDate === "2021-10-16" &&
      currentTime >= "12:0:0" &&
      currentTime <= "13:0:0"
        ? true
        : false,
    type: ["gaming", "funcontest"],
    isUpcoming:
      currentDate < "2021-10-16" ||
      (currentDate === "2021-10-16" && currentTime <= "13:0:0")
        ? true
        : false,
  },
  {
    id: 2,
    title: "Valorant Game Round 1",
    date: "16th Oct, 2021",
    time: "04:00pm to 06:00pm",
    isLive:
      currentDate === "2021-10-16" &&
      currentTime >= "16:0:0" &&
      currentTime <= "18:0:0"
        ? true
        : false,
    type: ["gaming", "funcontest"],
    isUpcoming:
      currentDate < "2021-10-16" ||
      (currentDate === "2021-10-16" && currentTime <= "16:0:0")
        ? true
        : false,
  },
  {
    id: 3,
    title: "Tech Talk",
    speaker: "Dr Debanik Roy, BARC",
    date: "16th Oct, 2021",
    time: "07:00pm to 09:00pm",
    isLive:
      currentDate === "2021-10-16" &&
      currentTime >= "19:0:0" &&
      currentTime <= "21:0:0"
        ? true
        : false,
    type: ["techtalk"],
    isUpcoming:
      currentDate < "2021-10-16" ||
      (currentDate === "2021-10-16" && currentTime <= "19:0:0")
        ? true
        : false,
  },
  {
    id: 4,
    title: "Cosmos Quiz",
    date: "16th Oct, 2021",
    time: "09:00pm to 10:00pm",
    isLive:
      currentDate === "2021-10-16" &&
      currentTime >= "21:0:0" &&
      currentTime <= "22:0:0"
        ? true
        : false,
    type: ["quiz", "funcontest"],
    isUpcoming:
      currentDate < "2021-10-16" ||
      (currentDate === "2021-10-16" && currentTime <= "21:0:0")
        ? true
        : false,
  },
  {
    id: 5,
    title: "Chess Round 1",
    date: "17th Oct, 2021",
    time: "10:00am to 12:00pm",
    isLive:
      currentDate === "2021-10-17" &&
      currentTime >= "10:0:0" &&
      currentTime <= "12:0:0"
        ? true
        : false,
    type: ["gaming", "funcontest"],
    isUpcoming:
      currentDate < "2021-10-17" ||
      (currentDate === "2021-10-17" && currentTime <= "10:0:0")
        ? true
        : false,
  },
  {
    id: 6,
    title: "BGMI Semi Finals",
    date: "17th Oct, 2021",
    time: "12:00pm to 01:00pm",
    isLive:
      currentDate === "2021-10-17" &&
      currentTime >= "12:0:0" &&
      currentTime <= "13:0:0"
        ? true
        : false,
    type: ["gaming", "funcontest"],
    isUpcoming:
      currentDate < "2021-10-17" ||
      (currentDate === "2021-10-17" && currentTime <= "12:0:0")
        ? true
        : false,
  },
  {
    id: 7,
    title: "Valorant Semi finals",
    date: "17th Oct, 2021",
    time: "01:00pm to 03:00pm",
    isLive:
      currentDate === "2021-10-17" &&
      currentTime >= "13:0:0" &&
      currentTime <= "15:0:0"
        ? true
        : false,
    type: ["gaming", "funcontest"],
    isUpcoming:
      currentDate < "2021-10-17" ||
      (currentDate === "2021-10-17" && currentTime <= "13:0:0")
        ? true
        : false,
  },
  {
    id: 8,
    title: "Marvel Quiz",
    date: "17th Oct, 2021",
    time: "04:00pm to 05:00pm",
    isLive:
      currentDate === "2021-10-17" &&
      currentTime >= "16:0:0" &&
      currentTime <= "17:0:0"
        ? true
        : false,
    type: ["quiz", "funcontest"],
    isUpcoming:
      currentDate < "2021-10-17" ||
      (currentDate === "2021-10-17" && currentTime <= "16:0:0")
        ? true
        : false,
  },
  {
    id: 9,
    title: "Tech Talk",
    speaker: "Jaideep Prakash",
    date: "17th Oct, 2021",
    time: "06:00pm to 07:00pm",
    isLive:
      currentDate === "2021-10-17" &&
      currentTime >= "18:0:0" &&
      currentTime <= "19:0:0"
        ? true
        : false,
    type: ["techtalk"],
    isUpcoming:
      currentDate < "2021-10-17" ||
      (currentDate === "2021-10-17" && currentTime <= "18:0:0")
        ? true
        : false,
  },
  {
    id: 10,
    title: "Strokes Session",
    status: "tentative",
    date: "17th Oct, 2021",
    time: "07:00pm to 08:00pm",
    isLive:
      currentDate === "2021-10-17" &&
      currentTime >= "19:0:0" &&
      currentTime <= "20:0:0"
        ? true
        : false,
    type: ["techtalk", "sessions"],
    isUpcoming:
      currentDate < "2021-10-17" ||
      (currentDate === "2021-10-17" && currentTime <= "19:0:0")
        ? true
        : false,
  },
  {
    id: 11,
    title: "CodeFiesta Coding Contest",
    date: "17th Oct, 2021",
    time: "08:00pm to 10:00pm",
    isLive:
      currentDate === "2021-10-17" &&
      currentTime >= "20:0:0" &&
      currentTime <= "22:0:0"
        ? true
        : false,
    type: ["codefiesta", "codingcontest"],
    isUpcoming:
      currentDate < "2021-10-17" ||
      (currentDate === "2021-10-17" && currentTime <= "20:0:0")
        ? true
        : false,
  },
  {
    id: 12,
    title: "ML Made Easy using MATLAB Workshop",
    date: "18th Oct, 2021",
    time: "01:00pm to 03:00pm",
    isLive:
      currentDate === "2021-10-18" &&
      currentTime >= "13:0:0" &&
      currentTime <= "15:0:0"
        ? true
        : false,
    type: ["workshops"],
    isUpcoming:
      currentDate < "2021-10-18" ||
      (currentDate === "2021-10-18" && currentTime <= "13:0:0")
        ? true
        : false,
  },
  {
    id: 13,
    title: "BGMI Finals",
    date: "18th Oct, 2021",
    time: "05:00pm to 06:00pm",
    isLive:
      currentDate === "2021-10-18" &&
      currentTime >= "17:0:0" &&
      currentTime <= "18:0:0"
        ? true
        : false,
    type: ["gaming", "funcontest"],
    isUpcoming:
      currentDate < "2021-10-18" ||
      (currentDate === "2021-10-18" && currentTime <= "17:0:0")
        ? true
        : false,
  },
  {
    id: 14,
    title: "Valo Finals",
    date: "18th Oct, 2021",
    time: "08:00pm to 09:00pm",
    isLive:
      currentDate === "2021-10-18" &&
      currentTime >= "20:0:0" &&
      currentTime <= "21:0:0"
        ? true
        : false,
    type: ["gaming", "funcontest"],
    isUpcoming:
      currentDate < "2021-10-18" ||
      (currentDate === "2021-10-18" && currentTime <= "20:0:0")
        ? true
        : false,
  },
  {
    id: 15,
    title: "Tech Talk",
    speaker: "Shubham Shantanu",
    date: "19th Oct, 2021",
    time: "05:00pm to 06:00pm",
    isLive:
      currentDate === "2021-10-19" &&
      currentTime >= "17:0:0" &&
      currentTime <= "18:0:0"
        ? true
        : false,
    type: ["techtalk"],
    isUpcoming:
      currentDate < "2021-10-19" ||
      (currentDate === "2021-10-19" && currentTime <= "17:0:0")
        ? true
        : false,
  },
  {
    id: 16,
    title: "Tech Talk",
    speaker: "Mr Pulkit Singh",
    date: "20th Oct, 2021",
    time: "05:00pm to 06:00pm",
    isLive:
      currentDate === "2021-10-20" &&
      currentTime >= "17:0:0" &&
      currentTime <= "18:0:0"
        ? true
        : false,
    type: ["techtalk"],
    isUpcoming:
      currentDate < "2021-10-20" ||
      (currentDate === "2021-10-20" && currentTime <= "17:0:0")
        ? true
        : false,
  },
  {
    id: 17,
    title: "Skill-Lync Session",
    status: "tentative",
    date: "21st Oct, 2021",
    time: "05:00pm to 06:00pm",
    isLive:
      currentDate === "2021-10-21" &&
      currentTime >= "17:0:0" &&
      currentTime <= "18:0:0"
        ? true
        : false,
    type: ["techtalk", "sessions"],
    isUpcoming:
      currentDate < "2021-10-21" ||
      (currentDate === "2021-10-21" && currentTime <= "17:0:0")
        ? true
        : false,
  },
  {
    id: 18,
    title: "Tech Talk",
    speaker: "Praveen Kumar",
    date: "22nd Oct, 2021",
    time: "05:00pm to 06:00pm",
    isLive:
      currentDate === "2021-10-22" &&
      currentTime >= "17:0:0" &&
      currentTime <= "18:0:0"
        ? true
        : false,
    type: ["techtalk", "sessions"],
    isUpcoming:
      currentDate < "2021-10-22" ||
      (currentDate === "2021-10-22" && currentTime <= "17:0:0")
        ? true
        : false,
  },
  {
    id: 19,
    title: "Opening Ceremony",
    date: "23rd Oct, 2021",
    time: "09:00am to 11:00am",
    isLive:
      currentDate === "2021-10-23" &&
      currentTime >= "19:0:0" &&
      currentTime <= "11:0:0"
        ? true
        : false,
    type: ["mainevents"],
    isUpcoming:
      currentDate < "2021-10-23" ||
      (currentDate === "2021-10-23" && currentTime <= "09:0:0")
        ? true
        : false,
  },
  {
    id: 20,
    title: "Future of Transportation",
    speaker: "Mr. Vivek Umapathi",
    date: "23rd Oct, 2021",
    time: "12:00pm to 01:00pm",
    isLive:
      currentDate === "2021-10-23" &&
      currentTime >= "12:0:0" &&
      currentTime <= "13:0:0"
        ? true
        : false,
    type: ["mainevents", "techtalk", "sessions"],
    isUpcoming:
      currentDate < "2021-10-23" ||
      (currentDate === "2021-10-23" && currentTime <= "12:0:0")
        ? true
        : false,
  },
  {
    id: 21,
    title: "Tech GK Quiz",
    date: "23rd Oct, 2021",
    time: "01:00pm to 02:00pm",
    isLive:
      currentDate === "2021-10-23" &&
      currentTime >= "13:0:0" &&
      currentTime <= "14:0:0"
        ? true
        : false,
    type: ["mainevents", "quiz", "funcontest"],
    isUpcoming:
      currentDate < "2021-10-23" ||
      (currentDate === "2021-10-23" && currentTime <= "13:0:0")
        ? true
        : false,
  },
  {
    id: 22,
    title: "Chess Finals",
    date: "23rd Oct, 2021",
    time: "02:00pm to 03:00pm",
    isLive:
      currentDate === "2021-10-23" &&
      currentTime >= "14:0:0" &&
      currentTime <= "15:0:0"
        ? true
        : false,
    type: ["mainevents", "gaming", "funcontest"],
    isUpcoming:
      currentDate < "2021-10-23" ||
      (currentDate === "2021-10-23" && currentTime <= "14:0:0")
        ? true
        : false,
  },
  {
    id: 23,
    title: "Web Series Quiz",
    date: "23rd Oct, 2021",
    time: "03:00pm to 04:00pm",
    isLive:
      currentDate === "2021-10-23" &&
      currentTime >= "15:0:0" &&
      currentTime <= "16:0:0"
        ? true
        : false,
    type: ["mainevents", "quiz", "funcontest"],
    isUpcoming:
      currentDate < "2021-10-23" ||
      (currentDate === "2021-10-23" && currentTime <= "15:0:0")
        ? true
        : false,
  },
  {
    id: 24,
    title: "Panel Talk",
    date: "23rd Oct, 2021",
    time: "04:00pm to 07:00pm",
    isLive:
      currentDate === "2021-10-23" &&
      currentTime >= "16:0:0" &&
      currentTime <= "19:0:0"
        ? true
        : false,
    type: ["mainevents", "techtalk"],
    isUpcoming:
      currentDate < "2021-10-23" ||
      (currentDate === "2021-10-23" && currentTime <= "16:0:0")
        ? true
        : false,
  },
  {
    id: 25,
    title: "Tech Talk",
    speaker: "Sathish Rajamani",
    date: "23rd Oct, 2021",
    time: "07:00pm to 08:00pm",
    isLive:
      currentDate === "2021-10-23" &&
      currentTime >= "19:0:0" &&
      currentTime <= "20:0:0"
        ? true
        : false,
    type: ["mainevents", "techtalk"],
    isUpcoming:
      currentDate < "2021-10-23" ||
      (currentDate === "2021-10-23" && currentTime <= "19:0:0")
        ? true
        : false,
  },
  {
    id: 26,
    title: "Climate Change",
    date: "24th Oct, 2021",
    time: "10:00am to 11:00pm",
    isLive:
      currentDate === "2021-10-24" &&
      currentTime >= "10:0:0" &&
      currentTime <= "11:0:0"
        ? true
        : false,
    type: ["mainevents", "sessions"],
    isUpcoming:
      currentDate < "2021-10-24" ||
      (currentDate === "2021-10-24" && currentTime <= "10:0:0")
        ? true
        : false,
  },
  {
    id: 27,
    title: "AR-VR session",
    status: "tentative",
    date: "24th Oct, 2021",
    time: "11:00am to 01:00pm",
    isLive:
      currentDate === "2021-10-24" &&
      currentTime >= "11:0:0" &&
      currentTime <= "13:0:0"
        ? true
        : false,
    type: ["mainevents", "sessions"],
    isUpcoming:
      currentDate < "2021-10-24" ||
      (currentDate === "2021-10-24" && currentTime <= "11:0:0")
        ? true
        : false,
  },
  {
    id: 28,
    title: "Tech Talk",
    speaker: "Umesh Thota",
    date: "24th Oct, 2021",
    time: "03:00pm to 04:00pm",
    isLive:
      currentDate === "2021-10-24" &&
      currentTime >= "15:0:0" &&
      currentTime <= "16:0:0"
        ? true
        : false,
    type: ["mainevents", "techtalk"],
    isUpcoming:
      currentDate < "2021-10-24" ||
      (currentDate === "2021-10-24" && currentTime <= "15:0:0")
        ? true
        : false,
  },
  {
    id: 29,
    title: "Tech Talk",
    speaker: "Harish Uthayamkumar",
    date: "24th Oct, 2021",
    time: "05:00pm to 06:00pm",
    isLive:
      currentDate === "2021-10-24" &&
      currentTime >= "17:0:0" &&
      currentTime <= "18:0:0"
        ? true
        : false,
    type: ["mainevents", "techtalk"],
    isUpcoming:
      currentDate < "2021-10-24" ||
      (currentDate === "2021-10-24" && currentTime <= "17:0:0")
        ? true
        : false,
  },
  {
    id: 30,
    title: "Ending Ceremony",
    date: "24th Oct, 2021",
    time: "07:00pm to 08:00pm",
    isLive:
      currentDate === "2021-10-24" &&
      currentTime >= "19:0:0" &&
      currentTime <= "20:0:0"
        ? true
        : false,
    type: ["mainevents"],
    isUpcoming:
      currentDate < "2021-10-24" ||
      (currentDate === "2021-10-24" && currentTime <= "19:0:0")
        ? true
        : false,
  },
  {
    id: 31,
    title: "Problem Statement Reveal",
    date: "16th Oct, 2021",
    time: "12:00 AM",
    isLive:
      currentDate === "2021-10-16" &&
      currentTime >= "0:0:0" &&
      currentDate <= "2021-10-18"
        ? true
        : false,
    type: ["hackofuturista"],
    isUpcoming:
      currentDate < "2021-10-16" ||
      (currentDate === "2021-10-16" && currentTime <= "0:0:0")
        ? true
        : false,
  },
  {
    id: 32,
    title: "Submission of Round 1",
    date: "18th Oct, 2021",
    time: "12:00 PM",
    isLive:
      currentDate === "2021-10-18" &&
      currentTime >= "12:0:0" &&
      currentTime <= "24:0:0"
        ? true
        : false,
    type: ["hackofuturista"],
    isUpcoming:
      currentDate < "2021-10-18" ||
      (currentDate === "2021-10-18" && currentTime <= "12:0:0")
        ? true
        : false,
  },
  {
    id: 33,
    title: "Result Declaration of Round 1",
    date: "20th Oct, 2021",
    time: "12 PM",
    isLive:
      currentDate === "2021-10-20" &&
      currentTime >= "12:0:0" &&
      currentTime <= "14:0:0"
        ? true
        : false,
    type: ["hackofuturista"],
    isUpcoming:
      currentDate < "2021-10-20" ||
      (currentDate === "2021-10-20" && currentTime <= "12:0:0")
        ? true
        : false,
  },
  {
    id: 34,
    title: "Submission of Final Round",
    date: "22nd Oct, 2021",
    time: "11:59 PM",
    isLive:
      currentDate === "2021-10-22" && currentTime >= "11:59:0" ? true : false,
    type: ["hackofuturista"],
    isUpcoming:
      currentDate < "2021-10-22" ||
      (currentDate === "2021-10-22" && currentTime <= "11:59:0")
        ? true
        : false,
  },
  {
    id: 35,
    title: "Final Result Declaration",
    date: "24th Oct, 2021",
    time: "7 PM",
    isLive:
      currentDate === "2021-10-24" &&
      currentTime >= "19:0:0" &&
      currentTime <= "18:0:0"
        ? true
        : false,
    type: ["hackofuturista"],
    isUpcoming:
      currentDate < "2021-10-24" ||
      (currentDate === "2021-10-24" && currentTime <= "19:0:0")
        ? true
        : false,
  },
  {
    id: 36,
    title: "Tracks Reveal",
    date: "16th Oct, 2021",
    time: "12:00 AM",
    isLive:
      currentDate === "2021-10-16" &&
      currentTime >= "0:0:0" &&
      currentDate <= "2021-10-18"
        ? true
        : false,
    type: ["designathon"],
    isUpcoming:
      currentDate < "2021-10-16" ||
      (currentDate === "2021-10-16" && currentTime <= "0:0:0")
        ? true
        : false,
  },
  {
    id: 37,
    title: "Submission of Round 1",
    date: "18th Oct, 2021",
    time: "12 PM",
    isLive:
      currentDate === "2021-10-18" &&
      currentTime >= "12:0:0" &&
      currentTime <= "24:0:0"
        ? true
        : false,
    type: ["designathon"],
    isUpcoming:
      currentDate < "2021-10-18" ||
      (currentDate === "2021-10-18" && currentTime <= "12:0:0")
        ? true
        : false,
  },
  {
    id: 38,
    title: "Round 1 Results",
    date: "21st Oct, 2021",
    time: "6 AM",
    isLive:
      currentDate === "2021-10-21" &&
      currentTime >= "06:0:0" &&
      currentTime <= "24:0:0"
        ? true
        : false,
    type: ["designathon"],
    isUpcoming:
      currentDate < "2021-10-21" ||
      (currentDate === "2021-10-21" && currentTime <= "06:0:0")
        ? true
        : false,
  },
  {
    id: 39,
    title: "Final Round Prototype Submission",
    date: "22nd Oct, 2021",
    time: "12 PM",
    isLive:
      currentDate === "2021-10-22" && currentTime >= "11:59:0" ? true : false,
    type: ["designathon"],
    isUpcoming:
      currentDate < "2021-10-22" ||
      (currentDate === "2021-10-22" && currentTime <= "12:0:0")
        ? true
        : false,
  },
  {
    id: 40,
    title: "Final Result Declaration",
    date: "24th Oct, 2021",
    time: "7 PM",
    isLive:
      currentDate === "2021-10-24" &&
      currentTime >= "19:0:0" &&
      currentTime <= "20:0:0"
        ? true
        : false,
    type: ["designathon"],
    isUpcoming:
      currentDate < "2021-10-24" ||
      (currentDate === "2021-10-24" && currentTime <= "19:0:0")
        ? true
        : false,
  },
];
