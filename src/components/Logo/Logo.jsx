import css from "./Logo.module.css";
import logo from "../../assets/react.svg";

export default function Logo() {
  return (
    <section className={css["logo-container"]}>
      <a href="https://github.com/grizeus/goit-react-hw-02">
        <img className={css["react-logo"]} src={logo} alt="React logo" />
      </a>
    </section>
  );
}