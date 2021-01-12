import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";

const CustumMenu = () => {
  const [activeItem, setActiveItem] = useState("home");
  const handleItemClick = (e, { name }) => setActiveItem(name);
  const handleLogout = () => localStorage.removeItem("token");
  const token = localStorage.getItem("token");

  return (
    <Segment inverted attached>
      <Menu inverted pointing secondary>
        <Menu.Item
          as={Link}
          to="/home"
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        />
        {token ? (
          <Menu.Item
            as={Link}
            to="/new-article"
            name="Add Article"
            active={activeItem === "Add Article"}
            onClick={handleItemClick}
          />
        ) : null}
        {!token ? (
          <Menu.Item
            as={Link}
            to="/login"
            name="Login"
            active={activeItem === "Login"}
            onClick={handleItemClick}
          />
        ) : null}
        {!token ? (
          <Menu.Item
            as={Link}
            to="/register"
            name="Register"
            active={activeItem === "Register"}
            onClick={handleItemClick}
          />
        ) : null}
        {token ? (
          <Menu.Item
            as={Link}
            to="/"
            name="Logout"
            active={activeItem === "Login"}
            onClick={handleLogout}
          />
        ) : null}
      </Menu>
    </Segment>
  );
};

export default CustumMenu;
