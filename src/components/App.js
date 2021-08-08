import React, {Component} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(){
        this.state= {Relation : [{relatives:"Ram", index:"relativeListItem1"}, 
            {relatives:"Shyam", index:"relativeListItem2"},
            {relatives:"Laxman", index:"relativeListItem3"},
            {relatives:"sita", index:"relativeListItem4"},
            {relatives:"Ravan", index:"relativeListItem5"}
        ]}
    }
    render() {
        return(
            <div id="main">
               <ol>{
                   this.state.Relation.map((rel)=> {
                       <li key={rel.index}>{rel.name}</li>
                   })
                   }</ol>
            </div>
        )
    }
}


export default App;
