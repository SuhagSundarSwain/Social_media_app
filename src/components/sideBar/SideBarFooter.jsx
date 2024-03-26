export default function SideBarFooter() {
  return (
    <div className="dropdown">
      <a
        href="#"
        className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://media.licdn.com/dms/image/D5603AQHz2WmS4s6jSA/profile-displayphoto-shrink_200_200/0/1689955027011?e=2147483647&v=beta&t=bTsatCClac1NjJsTq-1NBE9z__vXzTnQdmc4L3HDMY0"
          alt=""
          width="32"
          height="32"
          className="rounded-circle me-2"
        />
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu text-small shadow">
        <li>
          <a className="dropdown-item" href="#">
            New project...
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Settings
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Profile
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
}
