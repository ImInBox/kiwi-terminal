import { useState } from "react";

function App() {
  const [ input, setInput ] = useState("");
  const [ output, setOutput ] = useState("");
  return (
    <div className="bg-slate-800 text-white h-[100%] box-border p-2">
      <div>
        <pre className="text-[15px]">
          {output}
        </pre>
      </div>
      <div className="flex">
      <pre className="text-[15px]">$ </pre>
        <input type="text" value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{
          if (e.key === "Enter") {
            let newOutput = "";
            newOutput = `${output}\n$ ${input}\n`

            switch (input) {
              case "help":
                newOutput += "help - display commands list\nclear - clear terminal";
                break
              case "clear":
                setOutput("");
                break
              default:
                newOutput += "Unknow command"
            }

            setOutput(newOutput)
            setInput("")
          }
        }} className="bg-transparent outline-none m-0 p-0 text-[15px]"/>
      </div>
    </div>
  );
}

export default App;
