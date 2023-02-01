import { useState, useRef, useEffect } from 'react';

function App() {
    const [count, setCount] = useState(1);
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current += 1;
        console.log('렌더링 수: ', renderCount.current);
    });

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>증가</button>
        </div>
    );
};

export default App;
