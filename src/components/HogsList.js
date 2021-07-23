import {useState} from 'react'
import RenderPig from './RenderPig'

function HogsList ({pigs} ){
    const [filteredPigs, setFilteredPigs]=useState(false)
    function handleCategoryChange(e){
        setFilteredPigs(e.target.value)
        // filteredPigs = pigs.greased.filter()
    }
    // const pigsToRender = pigs.filter((pig) => {
    //     if (filteredPigs == false) return true;
    //     return pig.greased === filteredPigs
    // })

    // console.log(pigs.filter(Boolean))
    return (
       <> 
        <div>
            <select name= "filter" onChange ={handleCategoryChange}>
                <option value = "all">Filter Pigs</option>
                <option value={true}>Gresed Pigs</option>
                <option value={false}>Ungreased Pigs</option>
            </select>
            
        </div>

      {pigs.map((pig)=>{ return (
      <RenderPig key = {pig.name}
      pigName = {pig.name} 
      image = {pig.image} 
      specialty = {pig.specialty}
      weight = {pig.weight}
      greased =  {pig.greased}
      highestMedal ={pig["highest medal achieved"]} /> 
      )})}
      </>
    )

}
export default HogsList