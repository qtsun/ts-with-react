import React, {useState, useEffect} from "react";
import useMousePosition from "../hooks/useMousePosition";
const LikeButton: React.FC = () =>{
    const [like, setLike] = useState(0)
    const positions = useMousePosition()
    const [on, setOn] = useState(true)
    useEffect(() => {
        console.log('document title is running')
        document.title = `点击第${like}次`
    //当like和on变化时执行useEffext
    },[like, on])
    return (
        <>
        <h1>X: {positions.x}, Y: {positions.y}</h1>
        <button onClick={() => {setLike(like + 1)}}>
            {like} 👍
        </button>
        <button onClick={() => {setOn(!on)}}>
            {on ? 'ON' : 'OFF'}
        </button>
        </>
    )
}
export default LikeButton