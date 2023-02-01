import { useState } from 'react';

function App() {
    const [time, setTime] = useState(1);

    const handleClick = () => {
        let newTime;
        if(12 <= time) {
            newTime = 1;
        }
        else {
            newTime = time + 1;
        }
        setTime(newTime);
    };

    return (
        <div>
            <span>시간: {time}시</span>
            <button onClick={handleClick}>Update</button>
        </div>
    );
}

export default App;
