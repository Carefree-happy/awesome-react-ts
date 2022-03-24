import { useEffect, useState } from "react";

function FlagState() {
    const [counter, setCounter] = useState(0);
    const [pen, setPen] = useState(true);

    useEffect(() => {
        if (pen) {
            setCounter(counter + 1);
            setCounter(counter + 1);
            setCounter(counter + 1);
            setPen(false);
        }
    }, [pen]);

    // 打印效果中可以看到出现了多种结果，可知：刷新了两次
    // 合成事件中，多个不同的State，会进行合并
    console.log(counter, pen); 

    return (
        <div onClick={() => setPen(true)}>click me !</div>
    )
}

export default FlagState;