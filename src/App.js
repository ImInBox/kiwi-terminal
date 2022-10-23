import { useState } from "react";
import { Baner, Help } from "./components/Responses";
import Prefix from "./components/Prefix";

function App() {
  const commands = ["help", "clear", "author", "font"]

  const [ input, setInput ] = useState("");
  const [ output, setOutput ] = useState([{prefix: "", command: "", response: <Baner/>, id: 0}]);
  const [ inputColor, setInputColor ] = useState("#3fc1ee");

  let newOutput = {}
  let clear = false

  return (
    <div className="bg-[#242d3c] box-border p-2 overflow-hidden h-[100vh] w-[100vw]">
      <div>
        <pre className="text-[15px]">
          {output.map((output) => <div key={output.id} className="h-full w-full font-JetBrainsMono">
            <p>
              {output.prefix}
              <span className="text-[#cbc57e]">
                {output.command}
              </span>
            </p>
            <div>
              {output.response}
            </div>
          </div>)}
        </pre>
      </div>
      <div className="flex">
      <pre className="text-[15px] font-JetBrainsMono">
        <p>
          <Prefix/>
        </p>
      </pre>
        <input type="text" value={input} onChange={e=>{setInput(e.target.value) 
        if(commands.indexOf(e.target.value) > -1){setInputColor("#3fc1ee")}else{setInputColor("#ef6d6a")} }} onKeyDown={e=>{

          if (e.key === "Enter") {
            newOutput.prefix = <Prefix/>
            newOutput.command = input
            newOutput.id = output.length
            
            switch(input){
              case commands[0]:
                newOutput.response = <Help/>
                break;
              case commands[1]:
                clear = true
                break;
              default:
                newOutput.response = ""
            }

            setInput("")
            setInputColor("#3fc1ee")

            if(clear !== true){
              setOutput(oldOutput => [...oldOutput, newOutput]);
            }else{
              setOutput([])
            }
          }
        }} className={`bg-transparent text-[${inputColor}] outline-none m-0 p-0 text-[15px] font-JetBrainsMono`}/>
      </div>
    </div>
  );
}

export default App;
