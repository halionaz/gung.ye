import { useState } from "react";
import logo from "./logo.png";
import style from "./style/Header.module.css";

export default function Header({ curMenu, setCurMenu }) {
    const [searchFocus, setSearchFocus] = useState(false);

    const menuChange = () => {
        setCurMenu((prev) => {
            if (prev === "home") {
                return "all";
            } else {
                return "home";
            }
        });
    };
    const changeToMyWork = () => {
        console.log("/mywork로 보내기");
    };
    const changeToMyProfile = () => {
        console.log("/profile로 보내기");
    };

    return (
        <header className={style.Header}>
            <div className={style.header}>
                <div className={style.left}>
                    <div
                        className={`${style.btn} ${style.naviBtn}`}
                        onClick={menuChange}
                    >
                        <ion-icon
                            name={curMenu === "home" ? "menu" : "home"}
                        ></ion-icon>
                    </div>
                </div>
                <div className={`${style.logoDiv}`}>
                    <img className={style.logo} src={logo} alt="logo" />
                </div>
                <div className={style.right}>
                    <div
                        className={style.searchBar}
                        style={{
                            color: searchFocus
                                ? "rgb(128, 128, 128)"
                                : "rgba(128, 128, 128, 0.404)",
                        }}
                    >
                        <ion-icon name="search"></ion-icon>
                        <input
                            type="text"
                            placeholder="검색어를 입력하세요"
                            onFocus={() => {
                                setSearchFocus(true);
                            }}
                            onBlur={() => {
                                setSearchFocus(false);
                            }}
                        ></input>
                    </div>
                    <div
                        className={`${style.btn} ${style.myWorkBtn}`}
                        onClick={changeToMyWork}
                    >
                        <ion-icon name="reader"></ion-icon>
                    </div>
                    <div
                        className={`${style.btn} ${style.profileBtn}`}
                        onClick={changeToMyProfile}
                    >
                        <ion-icon name="person"></ion-icon>
                    </div>
                </div>
            </div>
        </header>
    );
}
