import SideBarBody from "./SideBarBody";
import SideBarFooter from "./SideBarFooter";
import SideBarHeader from "./SideBarHeader";

export default function SideBar() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
      style={{ width: "280px" }}
    >
      <SideBarHeader />
      <hr />
      <SideBarBody />
      <hr />
      <SideBarFooter />
    </div>
  );
}
