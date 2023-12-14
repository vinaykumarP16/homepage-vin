import dayjs from "dayjs";
import * as React from "react";
import "../App.css";

export const Deadlines = () => {
  const myGoalsArray = [
    {
      no: 1,
      name: "Get Into Best Shape",
      deadline: "03/16/2023", //  mm/dd/yyyy
      message: "Eat properly",
    },
    {
      no: 2,
      name: "Python Perfection",
      deadline: "03/18/2023", //  mm/dd/yyyy
      message: "be in intermediate level in Python",
    },
    {
      no: 3,
      name: "SQL Perfection",
      deadline: "03/18/2023", //  mm/dd/yyyy
      message: "Sql queries perfection",
    },
    {
      no: 4,
      name: "Data Structure and Algorithms",
      deadline: "03/16/2023", //  mm/dd/yyyy
      message: "perfect in programming",
    },
    {
      no: 5,
      name: "Days in the Year",
      deadline: "12/31/2023", //  mm/dd/yyyy
      message: "perfect in programming",
    },
    {
      no: 6,
      name: "dad's retirement",
      deadline: "03/03/2025",
      message: " well position before dad retires",
    },
    {
      no: 7,
      name: "change life",
      deadline: "06/25/2025",
      message: "Change required",
    }
  ];

  const date = dayjs().format("MM/DD/YYYY");
  console.log(date);

  const date_diff_indays = function (
    date1: string | number | Date,
    date2: string | number | Date
  ) {
    console.log("inside here", date1, date2);
    const dt1 = new Date(date1);
    const dt2 = new Date(date2);
    return Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24)
    );
  };

  return (
    <div className="main-card-layout">
      {myGoalsArray.map((item) => {
        return (
          <div className="main-container">
            <p>{item.name}</p>
            <h1>{date_diff_indays(date, item.deadline)} </h1>days Left
          </div>
        );
      })}
    </div>
  );
};
