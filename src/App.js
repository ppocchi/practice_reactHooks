import { useState, useEffect } from 'react';
import Timer from "./components/Timer";

function App() {
    const [showTimer, setShowTimer] = useState(false);
    return (
        <div>
            {showTimer && <Timer />}
            <button onClick = {() => setShowTimer(!showTimer)}>Timer</button>
        </div>
    );
}

export default App;
