import { useState, useEffect, useRef } from "react";
import { Baner, Help, Author, Font, UnknowCommand } from "./components/Responses";
import Prefix from "./components/Prefix";

let commandHistory = []
let commandHistorySelector = 0

function App() {
  const commands = ["", "help", "clear", "author", "font"]

  const autoScrollRef = useRef()
  const inputRef = useRef()

  const [ input, setInput ] = useState("");
  const [ output, setOutput ] = useState([{prefix: "", command: "", response: <Baner/>, id: 0}]);
  const [ inputColor, setInputColor ] = useState("#3fc1ee");

  let newOutput = {}
  let clear = false

  useEffect(() => {
    autoScrollRef.current.scrollIntoView({ behavior: "smooth" })
  }, [output])

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div className="bg-[#242d3c] box-border h-screen p-2" onClick={e=>inputRef.current.focus()}>
      <div className="overflow-y-scroll scrollbar w-full sm:h-full">
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
          <input name="" type="text" ref={inputRef} value={input} onChange={e=>{setInput(e.target.value) 
          if(commands.indexOf(e.target.value) > -1){setInputColor("#3fc1ee")}else{setInputColor("#ef6d6a")} }} onKeyDown={e=>{

            if (e.key === "Enter") {
              newOutput.prefix = <Prefix/>
              newOutput.command = input
              newOutput.id = output.length

              if(input !== ""){commandHistory.push(input)}
              commandHistorySelector = commandHistory.length

              switch(input){
                case commands[0]:
                  newOutput.response = ""
                  break
                case commands[1]:
                  newOutput.response = <Help/>
                  break;
                case commands[2]:
                  clear = true
                  break;
                case commands[3]:
                  newOutput.response = <Author/>
                  break;
                case commands[4]:
                  newOutput.response = <Font/>
                  break;
                default:
                  newOutput.response = <UnknowCommand/>
              }

              setInput("")
              setInputColor("#3fc1ee")

              if(clear !== true){
                setOutput(oldOutput => [...oldOutput, newOutput]);
              }else{
                setOutput([])
              }
            } else if (e.key === "ArrowUp") {
              
              if (commandHistorySelector > 0) {
                commandHistorySelector --
                setInput(commandHistory[commandHistorySelector])
              }
            } else if (e.key === "ArrowDown") {

              if (commandHistorySelector < commandHistory.length) {
                commandHistorySelector ++
                setInput(commandHistory[commandHistorySelector])
              }
            }else if (e.key !== null) {
              commandHistorySelector = commandHistory.length
            }
          }} className={`bg-transparent text-[${inputColor}] outline-none m-0 p-0 text-[15px] font-JetBrainsMono w-full`}/>
        </div>
        <div ref={autoScrollRef} />
      </div>
    </div>
  );
}

export default App;
