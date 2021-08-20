import React, { Component } from "react";
import styled from "styled-components";

const BoxCarros = styled.div`
  border: solid 1px;
  border-radius: 4%;
  width: 200px;
  margin: 7px;
`;
const ContainerCarros = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
`;
const TitleCarros = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(190, 190, 190, 0.5);
  border-bottom: solid 1px;
`;
const ListCarros = styled.li`
  text-decoration: none;
  list-style: none;
`;
const ButtonCarros = styled.button`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  color: white;
  background-color: black;
`;
const Ul = styled.ul`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ContainerLista = styled.div`
  border: solid 2px black;
  overflow-y: scroll;
  height: 500px;
`;
const GlobalContainer = styled.section`
  display: flex;
`;
const BoxCarsLista = styled.div`
  border: solid 1px;
  border-radius: 4%;
  width: 200px;
  margin: 7px;
`;

class App extends Component {
  state = {
    carros: [
      {
        nome: "Jetta",
        montadora: "Volkswagen",
        preço: 144,
        tipo: "Sedan",
        id: 1,
        estado: "true"
      },
      {
        nome: "Polo",
        montadora: "Volkswagen",
        preço: 70,
        tipo: "Hatch",
        id: 2,
        estado: "true"
      },
      {
        nome: "T-Cross",
        montadora: "Volkswagen",
        preço: 123,
        tipo: "SUV",
        id: 3,
        estado: "true"
      },
      {
        nome: "Tiguan R-line",
        montadora: "Volkswagen",
        preço: 146,
        tipo: "SUV",
        id: 4,
        estado: "true"
      },
      {
        nome: "Civic",
        montadora: "Honda",
        preço: 115,
        tipo: "Sedan",
        id: 5,
        estado: "true"
      },
      {
        nome: "Corolla",
        montadora: "Toyota",
        preço: 110,
        tipo: "Sedan",
        id: 6,
        estado: "true"
      },
      {
        nome: "Corolla Cross",
        montadora: "Toyota",
        preço: 184,
        tipo: "SUV",
        id: 7,
        estado: "true"
      },
      {
        nome: "Compass",
        montadora: "Jeep",
        preço: 132,
        tipo: "SUV",
        id: 8,
        estado: "true"
      },
      {
        nome: "Golf GTI",
        montadora: "Volkswagen",
        preço: 138,
        tipo: "Hatch",
        id: 9,
        estado: "true"
      }
    ],
    carrosLista: [],
    resultado: 0
  };

  add = (id) => {
    const carros = this.state.carros.find((item) => item === id);
    this.setState({
      carrosLista: this.state.carrosLista.concat(carros)
    });
    // if(this.state.item === id){
    //   this.setState({
    //     estado: "false"
    //   })
    // } else {
    //   this.setState({
    //     estado: "true"
    //   })
    // }
  };

  remove = (event, id) => {
    event.preventDefault();
    this.setState({
      carrosLista: this.state.carrosLista.filter((item) => {
        return item.id !== id;
      })
    });
  };

  render() {
    return (
      <div>
        <h1>Loja de Carros!</h1>
        <GlobalContainer>
          <ContainerCarros>
            {this.state.carros.map((item, index) => (
              <BoxCarros key={index}>
                <TitleCarros>
                  <p>{item.nome}</p>
                  <ButtonCarros /*disabled={this.state.estado}*/ onClick={() => this.add(item)}>+</ButtonCarros>
                </TitleCarros>
                <Ul>
                  <ListCarros>Montadora: {item.montadora}</ListCarros>
                  <ListCarros>Preço: R${item.preço}.000</ListCarros>
                  <ListCarros>Tipo: {item.tipo}</ListCarros>
                </Ul>
              </BoxCarros>
            ))}
          </ContainerCarros>
          <div>
            <ContainerLista>
              {this.state.carrosLista.map((item, listening) => (
                <BoxCarsLista Key={listening}>
                  <div>
                    <p>{item.nome}</p>
                    <button
                      onClick={(event) => {
                        this.remove(event, item.id);
                      }}
                    >
                      -
                    </button>
                  </div>
                  <p>Tipo: {item.tipo}</p>
                  <p>Preço: R${item.preço}.000</p>
                </BoxCarsLista>
              ))}
            </ContainerLista>
            <h2>
              Total: R${this.state.carrosLista.reduce((a, b) => a + b.preço, 0)}
              .000
            </h2>
          </div>
        </GlobalContainer>
      </div>
    );
  }
}
export default App;
