import React from "react";

export const Homepage = () => {
  const entertainment = [
    {
      name: "youtube",
      link: "https://www.youtube.com/",
      color: "red",
    },
    {
      name: "twitter",
      link: "https://twitter.com/home",
      color: "blue",
    },
    {
      name: "whatsapp",
      link: "https://web.whatsapp.com/",
      color: "green",
    },
    {
      name: "spotify",
      link: "https://open.spotify.com/?",
      color: "green",
    },
    {
      name: "prime music",
      link: "https://music.amazon.in/?ref=dmm_acq_mrn_d_br_z_UcqKJ9Ib-c_c_358369901433_g_79230042904",
      color: "blue",
    },
    {
      name: "prime video",
      link: "https://www.primevideo.com/region/eu/ref=atv_pr_sw_sc",
      color: "blue",
    },
  ];

  const dailyEssentials = [
    {
      name: "chatGpt",
      link: "https://chat.openai.com/chat",
      color: "light-green",
    },
    {
      name: "gmeet",
      link: "https://meet.google.com/?hs=197&pli=1&authuser=0",
      color: "green",
    },
    {
      name: "spreadsheet",
      link: "https://docs.google.com/spreadsheets/u/0/",
      color: "green",
    },
    {
      name: "youtube",
      link: "https://www.youtube.com/",
      color: "red",
    },
    {
      name: "AssureAi",
      link: "https://test-phase2.assureuat.in/",
      color: "blue",
    },
  ];

  return (
    <>
      {entertainment?.map((item) => (
        <div style={{ margin: "20px", backgroundColor: item.color }}>
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            {item.name}
          </a>
        </div>
      ))}

      {dailyEssentials?.map((item) => (
        <div style={{ margin: "20px", backgroundColor: item.color }}>
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            {item.name}
          </a>
        </div>
      ))}
    </>
  );
};
