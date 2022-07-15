import logo from "./logo.png";
import style from "./style/Header.module.css";

export default function Header(){
    return <header className={style.Header}>
        <div className={style.header}>
            <img className={style.logo} src={logo} alt="logo"/>
        </div>
    </header>
}