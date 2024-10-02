import React, {useState} from 'react';
import "./gridCellComps.css";
import {INews} from "../../structs/news";
const GridCellComp = (prop:INews) => {

    return(
        <div className="gridCellComp">
            <img src={prop.imgSrc} style={{"width":"100%",height:"150px"}} />
            <div>
                {prop.text}
            </div>
            <button onClick={()=>{prop.updateClicks(prop.index)}}>
                {prop.cliks}
            </button>
        </div>
    )
};

export default GridCellComp;
