import { useState } from 'react';

const initalVale = () => {
    return ['홍길동'];
}

function App() {
    const [names, setNames] = useState(() => {
        return initalVale();
    });
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleUpload = () => {
        setNames((prevState) => {
            return [input, ...prevState];
        });
    };

    return (
        <div>
            <input type="text" value={input} onChange={handleInputChange} />
            <button onClick={handleUpload}>Upload</button>
            {names.map((name, idx)=> {
                return <p key={idx}>{name}</p>;
            })}
        </div>
    );
}

export default App;
