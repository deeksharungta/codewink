import logo from "../assets/logo-no-background.svg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={`${classes.header}`}>
        <div className={classes["logo-image"]}>
          <img src={logo} alt="Codewink Logo" />
        </div>
      </header>
    </>
  );
};

export default Header;
