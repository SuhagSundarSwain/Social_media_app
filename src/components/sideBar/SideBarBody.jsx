import { useContext } from "react";
import SideBarBodyList from "./SideBarBodyList";
import { AppContext } from "../../store/App-store";

export default function SideBarBody() {
  const { tabList } = useContext(AppContext);

  return (
    <ul className="nav nav-pills flex-column mb-auto">
      {Object.keys(tabList).map((tabName) => (
        <SideBarBodyList
          key={tabName}
          tabName={tabName}
          tabIcon={tabList[tabName]}
        />
      ))}
    </ul>
  );
}
