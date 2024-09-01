import { useState } from "react"
import Button from "./Button"
const App = () => {
    const [data , setData] = useState(20)
    function addCounter() {
        setData(data + 1)
    }
    return(
        <>
        <h1 className='text-blue-600'>Hello Tailwind {data}</h1>
        <Button name="click" fucn={addCounter}/>
        {/* <button onClick={addCounter}>submit</button> */}
        </>
    )

}


export default App