import { FunctionalComponent, h } from "preact";
import { useEffect, useState } from "preact/hooks";

import {render, parseInput} from "../../../day11/index";

import input from "../../../day11/input/sample";


const map: {data:string, amount:number}[][] = parseInput(input);

let root = document.documentElement;

const App: FunctionalComponent = () => {

    const [frame, setFrame] = useState(map);
    const [changed, setChanged] = useState(false);
    const [occupied, setOccupied] = useState(0);

    useEffect(() =>{
        do {
            (async function wrapper() {
                const result = await render(frame);
                setFrame( result.frame);
                setChanged(result.changed);
                setOccupied(result.occupied);
            })();

        } while (changed);
    }, [setFrame, setChanged]);


    useEffect(() =>{
        root.style.setProperty('--column-count', `${frame[0].length}`);
        root.style.setProperty('--cell-size', `${500/frame[0].length}px`)

    }, [setFrame]);
    console.log(frame);

    return (<div>
        <div id="app" className="container">
            {frame.map(row=>row.map(column=>{
                let blocktype = ""
                if(column.data === "L"){blocktype= "red"}
                if(column.data === "#"){blocktype= "green"}
            return <div className={`box ${blocktype}`}>{column.data}
            {column.amount >= 0 ? <small>({column.amount})</small>: ""}</div>
            }))}
        </div>
        <br />
        occupied:{ occupied }
</div>
    );
};

export default App;
