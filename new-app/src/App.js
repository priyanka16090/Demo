// import logo from './logo.svg';
/*import './App.css';
import Login from './Components/Login';
import Array, { Array2, ArrayMap, StudTable, StudTable2 } from './Components/ArrayAndMap';

function App() {
  return (
    <div className="App">
      <Login title="Please Login"/><br></br>
      <Array title="Array List"/>
      <Array2 title="Array Names List"/>
      <ArrayMap title="Array Map List"/>
      <StudTable title="Static Table"/>
      <StudTable2 title="Dynamic Table"/>
    </div>
  );
}

export default App;*/

/*import './App.css';
function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;*/

import { Component } from "react";
import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: [],
    };
  }
  updateInput(value) {
    this.setState({
      userInput: value,
    });
  }
  addItem(userInput) {
    if (this.state.userInput.trim() !== null) {
      const userInput = {
        id: Math.random(),
        value: this.state.userInput,
      };

      const list = [...this.state.list];

      const test2 = "";

      console.log(test2);
      list.push(userInput);
      this.setState({
        list,
        userInput: "",
      });
    }
  }
  deleteItem(key) {
    const list = [...this.state.list];
    const updateList = list.filter((item) => item.id !== key);
    this.setState({
      list: updateList,
    });
  }
  onKeyUp(event) {
    console.log(event);
    if (event.charCode === 13) {
      this.setState({ inputValue: event.target.value });
    }
  }

  render() {
    return (
      <Container>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
            fontWeight: "bolder",
          }}
        >
          Todo List
        </Row>

        <hr />
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <InputGroup className="mb-3">
              <FormControl
                id="btn"
                pattern="[^\s]+"
                placeholder="Add Items "
                size="lg"
                value={this.state.userInput}
                onChange={(item) => this.updateInput(item.target.value)}
                aria-label="add something"
                aria-describedby="basic-addon2"
                onKeyPress={this.onKeyUp}
              />

              <Button
                color="blue"
                id="btn"
                size="lg"
                onKeyPress={this.onKeyUp}
                onClick={() => this.addItem()}
              >
                Add
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Comp1
            list={this.state.list}
            onDelete={(data) => this.deleteItem(data.id)}
          />
        </Row>
        <br />
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <InputGroup className="mb-3">
              <FormControl
                pattern="[^\s]+"
                placeholder="Add Items "
                size="lg"
                value={this.state.userInput}
                onChange={(item) => this.updateInput(item.target.value)}
                aria-label="add something"
                aria-describedby="basic-addon2"
              />

              <Button color="blue" size="lg" onClick={() => this.addItem()}>
                Add
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Comp2
            list={this.state.list}
            onAdd=""
            onDelete={(data) => this.deleteItem(data.id)}
          />
        </Row>
      </Container>
    );
  }
}
export default App;
