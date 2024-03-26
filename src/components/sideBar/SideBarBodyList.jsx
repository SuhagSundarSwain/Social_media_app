
export default function SideBarBodyList({
  tabName,
  tabIcon,
  selectedTab,
  setSelectedTab,
}) {
  return (
    <li
      onClick={() => {
        setSelectedTab(tabName);
      }}
    >
      <a
        href="#"
        className={
          selectedTab == tabName
            ? "nav-link active"
            : "nav-link link-body-emphasis"
        }
      >
        <svg className="bi pe-none me-2" width="16" height="16">
          {tabIcon}
        </svg>

        {tabName}
      </a>
    </li>
  );
}
