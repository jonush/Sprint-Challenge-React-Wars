import React, { useState, useEffect } from "react";
import './App.css';
import styled from 'styled-components';
import Character from "./components/Character";
import axios from "axios";

// API supplying the data
const url = "https://rickandmortyapi.com/api/character/";

// STYLING COMPONENTS
const Title = styled.h1`
  margin-top: 80px;
  color: lime;
  font-size: 4rem;
`

const Grid = styled.div`
    margin: 0 auto;
    background-color: black;
`

const Background = styled.div`
    display: inline-block;
    align-items: center;
    background-color: black;
    width: 50%;
`

const Card = styled.div`
  background-color: white;
  width: 80%;
  height: 20%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  border: 5px solid lime;
`

// APP COMPONENT
const App = () => {
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.

    // pulling data from API here
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.
    useEffect(() => {
        axios
            .get(`${url}`)
            .then((res) => {
                setData(res.data.results);
                setLoading(false);
            })
            .catch((err) => {
                console.log("failed to retrieve data");
            });
    }, []);

    if (!data) {
        return null;
    }

    return (
        <Grid className="App">
            <Title>Rick and Morty Character Cards</Title>

            {data.map((info, index) => {
                return (
                  <Background>
                    <Card>
                      <Character key={index} profile={info} loading={loading} />
                    </Card>
                  </Background>
                );
            })}
        </Grid>
    );
};

export default App;
