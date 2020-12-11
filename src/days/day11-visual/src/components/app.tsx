import { FunctionalComponent, h } from "preact";
import { useEffect, useState } from "preact/hooks";

import {render, parseInput} from "../../../day11/index";

import input from "../../../day11/input/sample";


const map: string[][] = parseInput(input);

const App: FunctionalComponent = () => {


    const [frame, setFrame] = useState(map);
    const [changed, setChanged] = useState(false);
    const [occupied, setOccupied] = useState(0);

    useEffect(() =>{
        // Trigger your effect

        //let changed = false;
        //let occupied = 0;
        
        do {
            (async function wrapper() {
                const result = await render(frame);
                setFrame( result.frame);
                setChanged(result.changed);
                setOccupied(result.occupied);
            })();

        } while (changed);


        return () => {
          // Optional: Any cleanup code
        };
    }, [setFrame, setChanged]);

    console.log(frame);

    return (<div>
        <div id="app" className="container">
            {frame.map(row=>row.map(column=>{
                let blocktype = ""
                if(column === "L"){blocktype= "red"}
                if(column === "#"){blocktype= "green"}
                return <div className={`box ${blocktype}`}></div>
            }))}
        </div>
        <br />
        occupied:{ occupied }
</div>
    );
};

export default App;
