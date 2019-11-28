import React from "react";
import PersonCard from "./components/PersonCard/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleArray: [
        { name: "Goli", age: 23 },
        { name: "Paulinha", age: 20 },
        { name: "Darvas", age: 10 }
      ]
    };
  }

  deletePerson = name => {
    let foundPerson;
    for (const person of this.state.peopleArray) {
      if (person.name === name) {
        foundPerson = person;
      }
    }
    if (foundPerson !== undefined) {
      const peopleArrayCopy = [...this.state.peopleArray];
      const index = peopleArrayCopy.indexOf(foundPerson);
      peopleArrayCopy.splice(index, 1);

      this.setState({
        peopleArray: peopleArrayCopy
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.peopleArray.map(person => {
          return (
            <PersonCard
              key={this.state.peopleArray.indexOf(person)}
              name={person.name}
              age={person.age}
              onDeleteButtonClick={this.deletePerson}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
