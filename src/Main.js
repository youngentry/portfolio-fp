import React, { useEffect, useRef, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./Main.scss";
import { profile, portfolio } from "./Data";
import { FaGithub } from "react-icons/fa";

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
                            <div className="Wrapper">
                                <div className="section main">
                                    <div className="case">
                                        <h1>FRONTEND WEB DEVELOPER</h1>
                                        <p>
                                            <span>
                                                원리에 관심이 많은 예비 프론트엔드 개발자 <strong>{profile.name}</strong>입니다
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {portfolio.map((it, idx) => {
                                    return (
                                        <div className="section" key={it.id}>
                                            <div className="case">
                                                <div className="inner">
                                                    <div className="images">
                                                        <a href={it.link} target="_blank">
                                                            <div className="mock">
                                                                <figure>
                                                                    <img src={it.mock} alt={it.title} />
                                                                </figure>
                                                                <div className="screen"></div>
                                                            </div>
                                                            <div className="cell">
                                                                <figure>
                                                                    <img src={it.cell} alt={it.title} />
                                                                </figure>
                                                                <div className="cellScreen"></div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <ul className="des">
                                                        <li>
                                                            <h2>{it.title}</h2>
                                                        </li>
                                                        <li className="type">
                                                            <span>TYPE</span>
                                                            <strong> {it.type}</strong>
                                                        </li>
                                                        <li>
                                                            <span>FONT</span>
                                                            {it.font.map((el) => {
                                                                return <strong className="skill">{el} </strong>;
                                                            })}
                                                        </li>

                                                        <li className="lang">
                                                            <span>SKILL</span>
                                                            {it.skill.map((el) => {
                                                                return <strong className="skill">{el} </strong>;
                                                            })}
                                                        </li>
                                                        <li>
                                                            <span>DATE</span>
                                                            <strong> {it.date}</strong>
                                                        </li>

                                                        <li className="link">
                                                            <div>
                                                                <a href={it.link} target="_blank" rel="noreferrer">
                                                                    <button>VEIW ON WEB</button>
                                                                </a>
                                                            </div>
                                                            <div>
                                                                <a href={it.gitgub_link} target="_blank" rel="noreferrer">
                                                                    <button>GitHub</button>
                                                                </a>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <p>{it.info}</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </div>
    );
};

export default Main;
