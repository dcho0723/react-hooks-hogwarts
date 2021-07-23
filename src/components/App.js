import React, {useState} from "react";
import Nav from "./Nav";
import HogsList from './HogsList'
// import Button from '/Button'

import hogs from "../porkers_data";

function App() {

	const [pigs, setPigs]=useState(hogs)
	
	return (
		<div className="App">
			<Nav />
			{/* <Filter pigs= {pigs} onFilterPigs ={setPigs}/>
			{pigs.map((pig)=> */}
			<HogsList pigs={pigs}/>
		</div>
	);
}

export default App;

