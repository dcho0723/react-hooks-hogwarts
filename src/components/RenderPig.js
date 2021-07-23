import {useState} from 'react'

function RenderPig({ pigName, image, specialty, weight, greased, highestMedal }){
    const [isClicked, setClicked] = useState(false)
    console.log(greased)
    
    function handleClick(){
        setClicked((isClicked)=>!isClicked)
        
    }
    function insertData() {
        return (
            <>
                <p>"Specialty:" {specialty}</p>
                <p>"Weight:" {weight}</p>
                <p>{greased ? "is greased" : "not greased"}</p>
                <p>Highest medal achieved: {highestMedal}</p>
            </>
        )
    }
    
    return(
        <div onClick = {handleClick}>
        <h2>{pigName}</h2>
        <img src = {image}/>
        <div>{isClicked ? insertData() : null}</div>
    </div>
    )
}
export default RenderPig