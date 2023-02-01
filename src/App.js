import { useState, useEffect } from 'react';

function App() {
    const [count, setCount] = useState(1);

    const handleCountUpdate = () => {
        setCount(count + 1);
    }

    //마운팅 + count 변화할 때 실행됨
    useEffect(() => {
        console.log('count 변화');
    }, [count]);

    return (
        <div>
            <button onClick={handleCountUpdate}>Update</button>
            <span>count: {count}</span>
        </div>
    );
}

export default App;
