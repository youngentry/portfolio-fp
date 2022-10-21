import React, { useEffect, useRef, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./Main.scss";
import { profile, portfolio } from "./Data";

//portfolio배열에서 title을 빼서 배열을 만들어 쓰겠다.
const AC = portfolio.map((it) => (it = it.title));

const Cover = ({ on, setOn }) => {
    const cover = useRef(null);
    const wheelStop = (e) => {
        e.stopPropagation();
    };
    useEffect(() => {
        cover.current.addEventListener("wheel", wheelStop);
        return () => {
            cover.current.removeEventListener("wheel", wheelStop);
        };
    }, []);
    return (
        <div className={`Cover ${on ? "on" : ""}`} ref={cover}>
            <ul>
                {portfolio.map((it, idx) => {
                    return (
                        <li key={idx} onClick={() => setOn(!on)}>
                            <a href={`#${it.title}`}>{it.title}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

const Main = () => {
    const [num, setNum] = useState(1);
    const [on, setOn] = useState(false);
    return (
        <div className="PF">
            <Cover on={on} setOn={setOn} />
            <button className={`btn ${on ? "on" : ""}`} onClick={() => setOn(!on)}>
                <span>cover open</span>
            </button>
            <div className="num">{portfolio[num - 1]?.title}</div>
            <nav className="gnb">
                <ul>
                    {portfolio.map((it, idx) => {
                        return (
                            <li key={idx} className={it.id === num ? "on" : ""}>
                                <a href={`#${it.title}`}>{it.title}</a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <ReactFullpage
                //fullpage options
                licenseKey={"YOUR_KEY_HERE"}
                scrollingSpeed={1000} /* Options here */
                anchors={["cover", ...AC, "footer"]}
                afterLoad={(o, d) => setNum(d.index)}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section main">
                                <div className="case">
                                    <h1>FRONTEND WEB DEVELOPER</h1>
                                    <p>
                                        <span>
                                            원리에 관심이 많은 예비 프론트엔드 개발자 <strong>{profile.name}</strong>입니다
                                        </span>
                                        {/* <img src={process.env.PUBLIC_URL + "/html5.svg"} alt="" /> */}
                                    </p>
                                </div>
                            </div>
                            <div className="section main">
                                <div className="case">
                                    <div className="inner">
                                        <h1>FRONTEND WEB DEVELOPER</h1>
                                        <p>
                                            <span>
                                                원리에 관심이 많은 예비 프론트엔드 개발자 <strong>{profile.name}</strong>입니다
                                            </span>
                                            {/* <img src={process.env.PUBLIC_URL + "/html5.svg"} alt="" /> */}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {portfolio.map((it, idx) => {
                                return (
                                    <div className="section">
                                        <div className="case">
                                            <div className="inner">
                                                <div className="photo">
                                                    <img src={it.src} alt={it.title} />
                                                </div>
                                                <ul className="desc">
                                                    <li>{it.title}</li>
                                                    <li>{it.type}</li>
                                                    <li>
                                                        <a href={it.link} target="_blank">
                                                            <button>LINK</button>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <p>{it.info}</p>
                                                    </li>
                                                    <li>
                                                        {it.color && <strong>color</strong>}
                                                        <ol>
                                                            {it.color?.map((color, idx) => {
                                                                return <li style={{ background: color }}>{color}</li>;
                                                            })}
                                                        </ol>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </div>
    );
};

export default Main;
