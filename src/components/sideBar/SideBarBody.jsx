import { useState } from "react";
import SideBarBodyList from "./SideBarBodyList";
import {Home,GridViewSharp, SendSharp} from "@mui/icons-material";

export default function SideBarBody() {
  let tabList = {
    Home: <Home />,
    Dashboard: <GridViewSharp />,
    Messages: <SendSharp/>,
  };

  let [selectedTab, setSelectedTab] = useState("Home");
  return (
    <ul className="nav nav-pills flex-column mb-auto">
      {Object.keys(tabList).map((tabName) => (
        <SideBarBodyList
          key={tabName}
          tabName={tabName}
          tabIcon={tabList[tabName]}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      ))}
    </ul>
  );
}
