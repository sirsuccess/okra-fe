import "./index.scss";
import Logo from "../../assets/images/okra.svg";
import { MenuOutlined } from "@ant-design/icons";

function Navbar() {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={Logo} alt="okra logo" />{" "}
      </div>
      <MenuOutlined style={{ fontSize: "24px", color: "#ffff" }} />
    </div>
  );
}

export default  Navbar;
