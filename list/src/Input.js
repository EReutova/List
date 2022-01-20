import { Component } from "react";
import styled from "styled-components";

import check from "./assets/check.png";

export class Input extends Component {
    state = {
        userInput: "",
        booksList: [],
    }

handleInputValue(e) {
    this.setState({userInput: e})
}

handleAddItem(input) {
    let listArray = this.state.booksList;
    if (input !== ""){
        listArray.push(input);
    }
    this.setState({booksList: listArray, userInput: ""})
}
handleDeleteItem(ev) {
    let listArray = this.state.booksList;
    listArray.splice(ev.index, 1);
    this.setState({booksList: listArray});
}
handleDeleteAll(){
    let listArray = this.state.booksList;
    listArray = [];
    // listArray.length = 0;
    this.setState({booksList: listArray})
}

handleCrossed(ev) {
    const li = ev.target;
    li.classList.toggle("crossed");
}

handleSubmit(ev){
    ev.preventDefault();
}
    render() {
        return(
            <Form onSubmit={(ev) => {this.handleSubmit(ev)}}>
                <Inp 
                    type="text" 
                    placeholder="add book" 
                    onChange={ (e) => {this.handleInputValue(e.target.value)} }
                    value={ this.state.userInput }/>
                <Button onClick={() => {this.handleAddItem(this.state.userInput)}}>ADD</Button>
                <ul>
                    {
                        this.state.booksList.map((item, index) => (
                            <li 
                                key={index}
                                onDoubleClick={(e) => this.handleDeleteItem({index})}
                                onClick={this.handleCrossed} 
                                >
                                <img src={check} alt="check" width="30px"/>
                                {item}
                            </li>
                        ))
                    }
                </ul>
                <DelBtn onClick={() => {this.handleDeleteAll()}}>DELETE</DelBtn>
            </Form>
        )
    }
}

const Form = styled.form`
    width: 100%;
`;
const Inp = styled.input`
    width: 80%;
    padding: 10px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    outline-style: none;
    &:focus{
        box-shadow: 0 0 5px #55554c, 0 0 10px #55554c, 0 0 20px #55554c;
    }
`;
const Button = styled.button`
    border: none;
    width: 30%;
    color: #fff;
    font-size: 16px;
    padding: 10px;
    margin-top: 10px;
    background: #4a7d02;
    outline-style: none;
    &:focus{
        box-shadow: 0 0 5px #55554c, 0 0 10px #55554c, 0 0 20px #55554c;
    }
    &:hover{
        cursor: pointer;
        box-shadow: 0 0 5px #55554c, 0 0 10px #55554c, 0 0 20px #55554c;
    }
`;
const DelBtn = styled(Button)`
    margin-top: 0;
    margin-bottom: 10px;
    background: #6e0f00;
`;