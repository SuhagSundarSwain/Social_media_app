import { useContext } from "react";
import SideBarBodyList from "./SideBarBodyList";
import { AppUIContext } from "../../store/App-store";

export default function SideBarBody() {
  const { tabList } = useContext(AppUIContext);

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
