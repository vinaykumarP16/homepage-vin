import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import GoogleIcon from "@mui/icons-material/Google";
import LanguageIcon from "@mui/icons-material/Language";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { Button, IconButton, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import InstagramIcon from "@mui/icons-material/Instagram";
import { BsFiletypeSql, BsGraphUpArrow, BsStackOverflow, BsFileEarmarkSpreadsheetFill } from 'react-icons/bs';
import { FaJenkins, FaJava,FaReact } from 'react-icons/fa';
import { MdOutlineDataArray } from 'react-icons/md';
import { BiNotepad } from 'react-icons/bi';
import { ImSpotify } from 'react-icons/im';
import { SiGooglemeet, SiGmail, SiLeetcode, SiTypescript, SiPython, SiOpenai, SiNetlify } from 'react-icons/si';



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
      iconKey: <ImSpotify />,
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
    {
      name: "Groww",
      link: "https://groww.in/stocks/user/explore",
      color: "#00d09c",
      iconKey: <BsGraphUpArrow />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/im_vkumar16/?next=%2Fim_vkumar16%2F",
      color: "#F35369",
      iconKey: <InstagramIcon />,
    },
  ];

  const dailyEssentials = [
    {
      name: "chat-Gpt",
      link: "https://chat.openai.com/chat",
      color: "dark-green",
      iconKey: <SiOpenai />,
    },
    {
      name: "gmeet",
      link: "https://meet.google.com/qbe-zbof-nbe",
      color: "green",
      iconKey: <SiGooglemeet />,
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
      iconKey: <BsFileEarmarkSpreadsheetFill />,
    },
    {
      name: "Gmail",
      link: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
      color: "red",
      iconKey: <SiGmail />,
    },
    {
      name: "leetcode",
      link: "https://leetcode.com/study-plan/leetcode-75/?progress=x42r8uo5",
      color: "black",
      iconKey: <SiLeetcode />,
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
      iconKey: <BsStackOverflow />,
    },
    {
      name: "jenkins",
      link: "https://jenkins.assuredev.in/job/Task%20Management/",
      color: "black",
      iconKey: <FaJenkins />,
    },
    {
      name: "netlify",
      link: "https://app.netlify.com/teams/vinaykumarp16/overview?_ga=2.104046915.298324030.1679299493-1068114119.1678622713",
      color: "#8efbf7",
      iconKey: <SiNetlify />,
    },

    {
      name: "Scratch-pad",
      link: "data:text/html,<html contenteditable>",
      color: "blue",
      iconKey: <BiNotepad />,
    },
    {
      name: "jarvis server",
      link: "http://localhost:3000/app",
      color: "Blue",
    },
    {
      name: "assureweb-server",
      link: "http://localhost:3000/",
      color: "Blue",
    },
    {
      name: "Text-compare",
      link: "https://text-compare.com/",
      color: "light-green",
    },
    {
      name: "Json compare",
      link: "https://jsondiff.com/",
      color: "white",
    },
    {
      name: "jarvis",
      link: "https://github.com/Transform-Automations/jarvis-ui",
      color: "blue",
    },
    {
      name: "assureweb",
      link: "https://github.com/Transform-Automations/assure-web",
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
    {
      name: "SQL course",
      link: "https://learnsql.com/course/sql-queries/multiple-tables/referencing-columns/join-where",
      color: "blue",
      iconKey: <BsFiletypeSql />,
    },
    {
      name: "DSA course",
      link: "https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/",
      color: "blue",
      iconKey: <MdOutlineDataArray />,
    },
    {
      name: "Typescript",
      link: "https://scrimba.com/learn/typescript/type-assignment-and-type-inference-cbKnaDCE",
      color: "blue",
      iconKey: <SiTypescript />,
    },
    {
      name: "React",
      link: "https://react-tutorial.app/app.html",
      color: "blue",
      iconKey: <FaReact />,
    },
    {
      name: "Python",
      link: "https://scrimba.com/learn/python/course-introduction-c9Bv3wc8",
      color: "blue",
      iconKey: <SiPython />,
    },
    {
      name: "Java",
      link: "https://www.codecademy.com/courses/learn-java/lessons/hello-world-java",
      color: "blue",
      iconKey: <FaJava />,
    },

  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {entertainment?.map((item) => (
          <div key={item.name} style={{ margin: "20px" }}>
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Tooltip
                title={item.name}
                TransitionComponent={Zoom}
                placement="top"
              >
                {item.iconKey ? (
                  <IconButton style={{ color: item.color }} size="medium">
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
              <Tooltip
                title={item.name}
                TransitionComponent={Zoom}
                placement="top"
              >
                {item.iconKey ? (
                  <IconButton style={{ color: item.color }} size="large">
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
              <Tooltip
                title={item.name}
                TransitionComponent={Zoom}
                placement="top"
              >
                {item.iconKey ? (
                  <IconButton style={{ color: item.color }} size="medium">
                    {item.iconKey}
                  </IconButton>
                ) : (
                  <Button> {item.name}</Button>
                )}
              </Tooltip>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};
