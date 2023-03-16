import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PianoIcon from "@mui/icons-material/Piano";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import GoogleIcon from "@mui/icons-material/Google";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import LanguageIcon from "@mui/icons-material/Language";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { Button, IconButton, Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';
import GroupsIcon from '@mui/icons-material/Groups';

export const Homepage = () => {
  const entertainment = [
    {
      name: "youtube",
      link: "https://www.youtube.com/",
      color: "red",
      iconKey: <YouTubeIcon />,
    },
    {
      name: "twitter",
      link: "https://twitter.com/home",
      color: "blue",
      iconKey: <TwitterIcon />,
    },
    {
      name: "whatsapp",
      link: "https://web.whatsapp.com/",
      color: "green",
      iconKey: <WhatsAppIcon />,
    },
    {
      name: "spotify",
      link: "https://open.spotify.com/?",
      color: "green",
      iconKey: <PianoIcon />,
    },
    {
      name: "prime music",
      link: "https://music.amazon.in/?ref=dmm_acq_mrn_d_br_z_UcqKJ9Ib-c_c_358369901433_g_79230042904",
      color: "blue",
      iconKey: <MusicNoteIcon />,
    },
    {
      name: "prime video",
      link: "https://www.primevideo.com/region/eu/ref=atv_pr_sw_sc",
      color: "blue",
      iconKey: <OndemandVideoIcon />,
    },
    {
      name: "facebook",
      link: "https://www.facebook.com/pvinay.kumar.16",
      color: "blue",
      iconKey: <FacebookIcon />,
    },
  ];

  const dailyEssentials = [
    {
      name: "chat-Gpt",
      link: "https://chat.openai.com/chat",
      color: "light-green",
    },
    {
      name: "gmeet",
      link: "https://meet.google.com/?hs=197&pli=1&authuser=0",
      color: "green",
      iconKey: <GroupsIcon />,
    },
    {
      name: "Google",
      link: "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwix0Jm44OD9AhUuXmwGHdQZCTQQPAgI",
      color: "Orange",
      iconKey: <GoogleIcon />,
    },
    {
      name: "spreadsheet",
      link: "https://docs.google.com/spreadsheets/u/0/",
      color: "green",
      iconKey: <BorderAllIcon />,
    },
    {
      name: "youtube",
      link: "https://www.youtube.com/",
      color: "red",
      iconKey: <YouTubeIcon />,
    },
    {
      name: "AssureAi dev site",
      link: "https://test-phase2.assureuat.in/",
      color: "blue",
      iconKey: <LanguageIcon />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/vinay-kumar-p-20766214b/",
      color: "blue",
      iconKey: <LinkedInIcon />,
    },
    {
      name: "StackOverflow",
      link: "https://stackoverflow.com/",
      color: "blue",
    },
  ];

  const myCourses = [
    {
      name: "DSA course",
      link: "https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/",
      color: "blue",
      iconKey: <AccountTreeIcon />,
    },
  ];

  return (
    <>
    <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
      {entertainment?.map((item) => (
        <div key={item.name} style={{ margin: "20px" }}>
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Tooltip title={item.name} TransitionComponent={Zoom} placement="top" >
            {item.iconKey ? (
              <IconButton style={{ color: item.color }}>
                {item.iconKey}
              </IconButton>
            ) : (
              <Button> {item.name}</Button>
            )}
            </Tooltip>
          </a>
        </div>
      ))}

      {dailyEssentials?.map((item) => (
        <div key={item.name} style={{ margin: "20px" }}>
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Tooltip title={item.name} TransitionComponent={Zoom} placement="top">
            {item.iconKey ? (
              <IconButton style={{ color: item.color }}>
                {item.iconKey}
              </IconButton>
            ) : (
              <Button> {item.name}</Button>
            )}
            </Tooltip>
          </a>
        </div>
      ))}
      {myCourses?.map((item) => (
        <div key={item.name} style={{ margin: "20px" }}>
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Tooltip title={item.name} TransitionComponent={Zoom} placement="top">
            {item.iconKey ? (
              <IconButton style={{ color: item.color }}>
                {item.iconKey}
              </IconButton>
            ) : (
              <Button> {item.name}</Button>
            )}
            </Tooltip>
          </a>
        </div>
      ))}
      </div></>
  );
};
