import React, {useEffect, useState} from 'react';
import GridCellComp from "../gridCellComp/gridCellComp";
import "./gridCust.css"
import {INews} from "../../structs/news";
const GridCust = () => {
    const [props, setProps] = useState([
        { imgSrc: "/gnomik.jpg", text: "лук 21 века, как быть в тренде",clicks:0 },
        { imgSrc: "/sun.jpg", text: "В поисках истинного солнца",clicks:0 },
        { imgSrc: "/eva.jpg", text: "eva x GU Undercover",clicks:0 },
        { imgSrc: "./joker.jpg", text: "В каждом доме желаю такого гостя",clicks:0 },
        { imgSrc: "./spider.jpg", text: "Чвк редан",clicks:0 },
        { imgSrc: "./mine.jpg", text: "Делема перспективы",clicks:0 },
    ]);
    const plusClick = (ind:number) =>{
        const newArr = [...props];
        newArr[ind].clicks+=1;
        setProps(newArr)
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            const randF = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
            const randS = Math.floor(Math.random() * (5 - 4 + 1)) + 4;
            if (randF !== randS) {
                const newArr = [...props];
                const tempToSave = newArr[randF];
                newArr[randF] = newArr[randS];
                newArr[randS] = tempToSave;
                setProps(newArr);
            }
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, [props]);

    return (
        <div>
            <div className="gridRow">
                <GridCellComp imgSrc={props[0].imgSrc} text={props[0].text} cliks={props[0].clicks} updateClicks={plusClick} index={0} />
                <GridCellComp imgSrc={props[1].imgSrc} text={props[1].text} cliks={props[1].clicks} updateClicks={plusClick} index={1} />
            </div>
            <div className="gridRow">
                <GridCellComp imgSrc={props[2].imgSrc} text={props[2].text} cliks={props[2].clicks} updateClicks={plusClick} index={2} />
                <GridCellComp imgSrc={props[3].imgSrc} text={props[3].text} cliks={props[3].clicks} updateClicks={plusClick} index={3}/>
            </div>
        </div>
    );
};

export default GridCust;
