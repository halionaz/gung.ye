import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../logo.png";
import style from "../style/Header.module.css";

export default function Header() {
    const [searchFocus, setSearchFocus] = useState(false);
    const location = useLocation();
    const [mainBtn, setMainBtn] = useState(null);

    useEffect(() => {
        if (location.pathname === "/") {
            setMainBtn(null);
        } else if (location.pathname === "/feed") {
            setMainBtn(["menu", "all"]);
        } else {
            setMainBtn(["home", "feed"]);
        }
    }, [location]);

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
                    {mainBtn !== null ? (
                        <div className={`${style.btn} ${style.naviBtn}`}>
                            <Link to={`/${mainBtn[1]}`}>
                                <ion-icon name={mainBtn[0]}></ion-icon>
                            </Link>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div className={`${style.logoDiv}`}>
                    <div>
                        <img className={style.logo} src={logo} alt="logo" />
                    </div>
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
                        <Link to="/history">
                            <ion-icon name="reader"></ion-icon>
                        </Link>
                    </div>
                    <div
                        className={`${style.btn} ${style.profileBtn}`}
                        onClick={changeToMyProfile}
                    >
                        <Link to="/profile">

                        <ion-icon name="person"></ion-icon>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
