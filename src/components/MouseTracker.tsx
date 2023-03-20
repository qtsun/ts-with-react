import React,{useState, useEffect} from "react";

const MouseTracker: React.FC = () => {
    const [positions, setPositions] = useState({x: 0, y:0})
    useEffect(()=>{
        console.log('add Effect', positions.x)
        const updateMouse = (e: MouseEvent) => {
            console.log('inner')
            setPositions({ x: e.clientX, y:e.clientY})
        }
        document.addEventListener('click', updateMouse)
        return () => {
            //组件销毁时执行
            console.log('remove effect', positions.x)
            document.removeEventListener('click', updateMouse)
        }
        //数组为空只执行一次
    }, [])
    console.log('before render', positions.x)
    return (
        <p>X: {positions.x}, Y: {positions.y}</p>
    )
}
export default MouseTracker