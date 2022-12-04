import React from "react";
import { Dropdown, Option } from "./WorkoutGeneratorComponents/DropDown.js";
import {
  FormWrapper,
  Wrapped,
  StyledButton,
} from "./WorkoutGeneratorComponents/stylesDropDown.js";


//main workout page class

class WG extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { diff: "Easy", time: "10"};

    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  //called when dropdown changed
  handleSelect(event) {
    event.stopPropagation();
    console.log(event.target.id);

    //checks which dropdown is selected and changes correct variable
    if(event.target.id == "1")
    {
      this.setState({ diff: event.target.value});
    }
    else if ((event.target.id == "2")){
      this.setState({ time: event.target.value});
    }
  }

  //called when submit button clicked
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.value);

    //make post requests
    
  }

  render() {

    return (

      //found in sytle.scss
      <div className="img-background">
          <FormWrapper
            //action needs to be changed
            action="/savedWorkouts"
            onChange= {this.handleSelect}
          >
          <div>
            <h1>Create New Workout</h1>
            </div>
            
            <Wrapped>
              <Dropdown
                buttonName="Choose Difficulty"
                id = "1"
              >
                <Option value="Easy" />
                <Option value="Medium" />
                <Option value="Hard" />
              </Dropdown>
              <Dropdown
                buttonName="Choose Time Limit"
                id = "2"
              >
                <Option value="10" />
                <Option value="15" />
                <Option value="30" />
                <Option value="45" />
                <Option value="60" />
              </Dropdown>
            </Wrapped>
            <StyledButton type="submit" value="Generate Workout" />
            <p>You selected {this.state.time},{this.state.diff} </p>
          </FormWrapper>
     </div>
    )
  };
};

export default WG;