import React, { Component } from "react";
import DrowDown from "./DropDown";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                    id: 1,
                    name: "Flipkart",
                    value: "flipkart",
                    selected: false
                },
                {
                    id: 2,
                    name: "Uber",
                    value: "uber",
                    selected: false
                },
                {
                    id: 3,
                    name: "Snapdeal",
                    value: "snapdeal",
                    selected: false
                },
                {
                    id: 4,
                    name: "Linkedin",
                    value: "linkedin",
                    selected: false
                },
                {
                  id: 5,
                  name: "Google",
                  value: "Google",
                  selected: false
              },
              {
                id: 6,
                name: "Instagram",
                value: "Instagram",
                selected: false
            },
            ],
      
            allowSelection: true,
            mySelectedItems2: [],
        };
        this.onDropdownSelection2 = this.onDropdownSelection2.bind(this);
      }

    onDropdownSelection2(items) {
        this.setState({
            mySelectedItems2: items
        })
    }

    render() {
        return (
            <div className="App">
                <div> #2 MULTI SELECT </div>
                
                <DrowDown placeholder={'Company'} 
                items={this.state.data}
                 allowMultiselect={true}
                  allowSelectAll={true}
                   onSelect={this.onDropdownSelection2} />
               
            </div >
        )
    }
}

export default App;