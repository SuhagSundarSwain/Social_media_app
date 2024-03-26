import MenuIcon from '@mui/icons-material/Menu';
function SideBarHeader() {
  return (
    <a
      href="/"
      className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
    >
      <svg className="bi pe-none me-2" width="40" height="32"><MenuIcon/></svg>

      <span className="fs-4">MENU</span>
    </a>
  );
}
export default SideBarHeader;
