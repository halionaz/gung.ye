import logo from "./logo.png";
import style from "./style/Header.module.css";

export default function Header({curMenu, setCurMenu}){

    const menuChange = () => {
        setCurMenu((prev) => {
            if(prev === "home"){
                return "all";
            } else {
                return "home";
            }
        })
    }

    return <header className={style.Header}>
        <div className={style.header}>
            <div className={style.left}>
                <div className={style.naviBtn} onClick={menuChange} >
                    <ion-icon name={(curMenu === "home") ? "menu" : "home"}></ion-icon>
                </div>
            </div>
            <div className={`${style.logoDiv}`}>
            <img className={style.logo} src={logo} alt="logo"/>
            </div>
            <div className={style.right}></div>
        </div>
    </header>
}