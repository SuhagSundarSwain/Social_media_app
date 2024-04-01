import { useContext } from "react";
import { AppUIContext } from "../../store/App-store";
import { Link } from "react-router-dom";

export default function SideBarBodyList({ tabName, tabIcon }) {
  const { selectedTab, setSelectedTab } = useContext(AppUIContext);
  return (
    <li
      onClick={() => {
        setSelectedTab(tabName);
      }}
    >
      <Link
        to={`/${tabName}`}
        className={
          selectedTab === tabName
            ? "nav-link active"
            : "nav-link link-body-emphasis"
        }
      >
        <svg className="bi pe-none me-2" width="16" height="16">
          {tabIcon}
        </svg>

        {tabName}
      </Link>
    </li>
  );
}
