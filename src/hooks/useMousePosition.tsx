import React,{useState, useEffect} from "react";

const useMousePosition = () => {
    const [positions, setPositions] = useState({x: 0, y:0})
    useEffect(()=>{
        console.log('add Effect', positions.x)
        const updateMouse = (e: MouseEvent) => {
            setPositions({ x: e.clientX, y:e.clientY})
        }
        document.addEventListener('mousemove', updateMouse)
        return () => {
            //组件销毁时执行
            console.log('remove effect', positions.x)
            document.removeEventListener('mousemove', updateMouse)
        }
        //数组为空只执行一次
    }, [])
   return positions
}
export default useMousePosition