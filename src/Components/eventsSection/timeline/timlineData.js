import React from "react"
import { HashLink } from "react-router-hash-link";

export default [
  {
    id: 1,
    time: "16 Oct, 2021",
    event: <p>BGMI Round 1</p>,
  },
  {
    id: 2,
    time: "16 Oct, 2021",
    event: (
      <p>
        Valorant Game <br /> Round 1
      </p>
    ),
  },
  {
    id: 3,
    time: "16 Oct, 2021",
    event: (
      <p>
        Dr. Debanik Roy, <br /> Technical Talk
      </p>
    ),
  },
  {
    id: 4,
    time: "16 Oct, 2021",
    event: (
      <p>
        Cosmos <br /> Quiz
      </p>
    ),
  },
  {
    id: 5,
    time: "17 Oct, 2021",
    event: (
      <p>
        Chess <br /> Round 1
      </p>
    ),
  },
  {
    id: 6,
    time: "17 Oct, 2021",
    event: (
      <p>
        BGMI Semi Finals{" "}
        <HashLink to="/calendar" smooth>
          <span
            style={{ display: "inline-block", color: "#c444be" }}
          >{`View All >>`}</span>
        </HashLink>{" "}
      </p>
    ),
  },
];