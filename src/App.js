import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from "./css/main.css";

import Header from "./components/header";


class App extends Component {
	render(){
		return(
			<Header/>
		)
	}
};

ReactDOM.render(<App />, document.getElementById("App"));