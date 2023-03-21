import React, {useState, useEffect, useRef, useContext} from "react";
import useMousePosition from "../hooks/useMousePosition";
import { ThemeContext } from "../App";
const LikeButton: React.FC = () =>{
    const [like, setLike] = useState(0)
    const positions = useMousePosition()
    const [on, setOn] = useState(true)
    const likeRef = useRef(0)
    const didMountRef = useRef(false)
    const domRef = useRef<HTMLInputElement>(null)
    const theme = useContext(ThemeContext)
    console.log(theme)
    const style = {
        background: theme.background,
        color: theme.color,
    }
    useEffect(() => {
        console.log('document title is running')
        document.title = `点击第${like}次`
    //当like和on变化时执行useEffext
    },[like, on])
    useEffect(() => {
        if (didMountRef.current) {
            console.log('this is updated')
        }else {
            didMountRef.current = true
        }
    })
    useEffect(() => {
        if(domRef && domRef.current) {
            domRef.current.focus()
        }
    })
    function handleAlertClick() {
        setTimeout(() => {
            alert('you clicked on ' + likeRef.current)
        })
    }
    return (
        <>
        <input type="text" ref={domRef} />
        <h1>X: {positions.x}, Y: {positions.y}</h1>
        <button style={style} onClick={() => {setLike(like + 1); likeRef.current++}}>
            {like} 👍
        </button>
        <button onClick={() => {setOn(!on)}}>
            {on ? 'ON' : 'OFF'}
        </button>
        <button onClick={handleAlertClick}> Alert</button>
        </>
    )
}
export default LikeButton