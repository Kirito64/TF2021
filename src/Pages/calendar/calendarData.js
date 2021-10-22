var today = new Date();
var currentDate =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var currentTime =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var newCurrentTime = new Date()

export default [
  {
    id: 1,
    title: "BGMI Round 1",
    date: "16th Oct, 2021, 2021",
    time: "12:00pm to 04:00pm",
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
    gcLink: "",
  },
  {
    id: 2,
    title: "Valorant Game Round 1",
    date: "16th Oct, 2021",
    time: "04:00pm to 07:00pm",
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
    time: "10:00am to 11:00pm",
    day: "17",
    startHour: "09",
    startMinute: "59",
    endHour: "11",
    endMinute: "59",
    isLive:
      currentDate === "2021-10-17" &&
      newCurrentTime >= new Date(2021, 10, 17, 10, 1, 1) &&
      newCurrentTime <= new Date(2021, 10, 17, 11, 59, 1)
        ? true
        : false,
    type: ["gaming", "funcontest"],
    isUpcoming:
      currentDate < "2021-10-17" ||
      (currentDate === "2021-10-17" &&
        newCurrentTime <= new Date(2021, 10, 17, 10, 1, 1))
        ? true
        : false,
  },
  {
    id: 6,
    title: "BGMI Semi Finals",
    date: "17th Oct, 2021",
    time: "12:00pm to 01:00pm",
    day: "17",
    startHour: "11",
    startMinute: "59",
    endHour: "12",
    endMinute: "59",
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
    day: "17",
    startHour: "12",
    startMinute: "59",
    endHour: "14",
    endMinute: "59",
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
    day: "17",
    startHour: "15",
    startMinute: "59",
    endHour: "16",
    endMinute: "59",
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
    day: "17",
    startHour: "17",
    startMinute: "59",
    endHour: "18",
    endMinute: "59",
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
    speaker: "Vinit Mankar",
    status: "tentative",
    date: "17th Oct, 2021",
    time: "07:00pm to 08:00pm",
    day: "17",
    startHour: "18",
    startMinute: "59",
    endHour: "19",
    endMinute: "59",
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
    day: "17",
    startHour: "19",
    startMinute: "59",
    endHour: "21",
    endMinute: "59",
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
    title: "Tech Talk",
    speaker: "Dr. Pranav Lad",
    date: "18th Oct, 2021",
    time: "02:30pm to 4:30pm",
    day: "18",
    startHour: "14",
    startMinute: "30",
    endHour: "16",
    endMinute: "30",
    isLive:
      currentDate === "2021-10-18" &&
      currentTime >= "14:30:0" &&
      currentTime <= "16:30:0"
        ? true
        : false,
    type: ["techtalk"],
    isUpcoming:
      currentDate < "2021-10-18" ||
      (currentDate === "2021-10-18" && currentTime <= "14:30:0")
        ? true
        : false,
  },
  {
    id: 13,
    title: "BGMI Finals",
    date: "18th Oct, 2021",
    time: "06:00pm to 07:00pm",
    day: "18",
    startHour: "17",
    startMinute: "59",
    endHour: "18",
    endMinute: "59",
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
    time: "07:00pm to 09:00pm",
    day: "18",
    startHour: "18",
    startMinute: "59",
    endHour: "20",
    endMinute: "59",
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
    time: "06:00pm to 07:00pm",
    day: "19",
    startHour: "17",
    startMinute: "59",
    endHour: "18",
    endMinute: "59",
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
    time: "06:00pm to 07:00pm",
    day: "20",
    startHour: "17",
    startMinute: "59",
    endHour: "18",
    endMinute: "59",
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
    speaker: "Mr. Suryanarayan Paneerselvam",
    status: "tentative",
    date: "21st Oct, 2021",
    time: "06:00pm to 07:00pm",
    day: "21",
    startHour: "17",
    startMinute: "59",
    endHour: "18",
    endMinute: "59",
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
    time: "06:00pm to 07:00pm",
    day: "22",
    startHour: "17",
    startMinute: "59",
    endHour: "18",
    endMinute: "59",
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
    day: "23",
    startHour: "08",
    startMinute: "59",
    endHour: "10",
    endMinute: "59",
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
    title: "Tech Talk",
    speaker: "Mr. Vivek Umapathi",
    date: "23rd Oct, 2021",
    time: "12:00pm to 02:00pm",
    day: "23",
    startHour: "11",
    startMinute: "59",
    endHour: "13",
    endMinute: "59",
    isLive:
      currentDate === "2021-10-23" &&
      currentTime >= "12:0:0" &&
      currentTime <= "13:0:0"
        ? true
        : false,
    type: ["mainevents", "techtalk", "sessions", "workshops"],
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
    time: "02:00pm to 03:00pm",
    day: "23",
    startHour: "13",
    startMinute: "59",
    endHour: "14",
    endMinute: "59",
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
    time: "03:00pm to 04:00pm",
    day: "23",
    startHour: "14",
    startMinute: "59",
    endHour: "15",
    endMinute: "59",
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
    time: "04:00pm to 05:00pm",
    day: "23",
    startHour: "15",
    startMinute: "59",
    endHour: "16",
    endMinute: "59",
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
    time: "05:00pm to 07:00pm",
    day: "23",
    startHour: "16",
    startMinute: "59",
    endHour: "18",
    endMinute: "59",
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
    time: "08:00pm to 10:00pm",
    day: "23",
    startHour: "19",
    startMinute: "59",
    endHour: "21",
    endMinute: "59",
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
    speaker: "Mr. Ankit Tripathi",
    date: "24th Oct, 2021",
    time: "10:00am to 11:00am",
    day: "24",
    startHour: "09",
    startMinute: "59",
    endHour: "10",
    endMinute: "59",
    isLive:
      currentDate === "2021-10-24" &&
      currentTime >= "10:0:0" &&
      currentTime <= "11:0:0"
        ? true
        : false,
    type: ["mainevents", "sessions", "techtalk"],
    isUpcoming:
      currentDate < "2021-10-24" ||
      (currentDate === "2021-10-24" && currentTime <= "10:0:0")
        ? true
        : false,
  },
  {
    id: 27,
    title: "AR-VR session",
    speaker: "Mr. Ajay Ponna Venkatesh",
    status: "tentative",
    date: "24th Oct, 2021",
    time: "11:00am to 01:00pm",
    day: "24",
    startHour: "10",
    startMinute: "59",
    endHour: "12",
    endMinute: "59",
    isLive:
      currentDate === "2021-10-24" &&
      currentTime >= "11:0:0" &&
      currentTime <= "13:0:0"
        ? true
        : false,
    type: ["mainevents", "sessions", "techtalk", "workshops"],
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
    day: "24",
    startHour: "14",
    startMinute: "59",
    endHour: "15",
    endMinute: "59",
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
    title: "Orator Talk",
    speaker: "Harish Uthayamkumar",
    date: "24th Oct, 2021",
    time: "05:00pm to 06:00pm",
    day: "24",
    startHour: "16",
    startMinute: "59",
    endHour: "17",
    endMinute: "59",
    isLive:
      currentDate === "2021-10-24" &&
      currentTime >= "17:0:0" &&
      currentTime <= "18:0:0"
        ? true
        : false,
    type: ["mainevents", "techtalk", "workshops"],
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
    day: "24",
    startHour: "18",
    startMinute: "59",
    endHour: "19",
    endMinute: "59",
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
    day: "15",
    startHour: "00",
    startMinute: "01",
    endHour: "23",
    endMinute: "59",
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
    time: "11:59 PM",
    day: "16",
    startHour: "11",
    startMinute: "59",
    endDay: "18",
    endHour: "23",
    endMinute: "59",
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
    day: "20",
    startHour: "11",
    startMinute: "59",
    endHour: "23",
    endMinute: "59",
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
    day: "20",
    startHour: "11",
    startMinute: "59",
    endDay: "22",
    endHour: "11",
    endMinute: "59",
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
    day: "24",
    startHour: "18",
    startMinute: "59",
    endHour: "23",
    endMinute: "59",
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
    day: "15",
    startHour: "00",
    startMinute: "01",
    endHour: "23",
    endMinute: "59",
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
    time: "11:59 PM",
    day: "16",
    startHour: "11",
    startMinute: "59",
    endDay: "18",
    endHour: "23",
    endMinute: "59",
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
    day: "21",
    startHour: "05",
    startMinute: "59",
    endHour: "23",
    endMinute: "59",
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
    day: "21",
    startHour: "05",
    startMinute: "59",
    endDay: "22",
    endHour: "11",
    endMinute: "59",
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
    day: "24",
    startHour: "18",
    startMinute: "59",
    endHour: "23",
    endMinute: "59",
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
