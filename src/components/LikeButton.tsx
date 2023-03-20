import React, {useState, useEffect} from "react";
const LikeButton: React.FC = () =>{
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(true)
    useEffect(() => {
        console.log('document title is running')
        document.title = `点击第${like}次`
    //当like和on变化时执行useEffext
    },[like, on])
    return (
        <>
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