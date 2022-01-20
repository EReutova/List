import styled from "styled-components";
import './App.css';

import cup from "./assets/book.jpeg";
import reader from "./assets/book1.jpeg";
import { Input } from "./Input";

function App() {
    return (
        <Wrapper>
            <Centered>
                <Image src={cup} alt="book"/>
                <h2>This year I'm planning to read more</h2>
                <h4>Here is the list of my favorites</h4>
                <Input/>
                <Image src={reader} alt="reader"/>
            </Centered>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 80%;
    min-height: 80vh;
    background: rgba(85,85,76, 0.7);
    margin: 20px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px #55554c, 0 0 20px #55554c, 0 0 30px #55554c;
    @media (min-width: 300px) {
        width: 80%;
        margin: 20px auto;
    } 
    @media (min-width: 700px) {
        width: 60%;
        margin: 20px auto;
    } 
    @media (min-width: 1024px) {
        width: 30%;
        margin: 20px 50px;
    } 
`;
const Centered = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
const Image = styled.img`
    width: 70%;
`;
export default App;
