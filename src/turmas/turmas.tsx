import React, { useState } from "react";
import { CustomProvider, RadioTileGroup, RadioTile } from "rsuite";

import "./turmas.css";
import { TesteRadio } from "../teste/teste";

function Turmas() {
  const [selecionado, setSelecionado] = useState(false);

  return (
    <CustomProvider>
      <div className="card-pai">
        <div className="card-container">
          <div className="card-dia-semana">
            <span>SEGUNDA</span>
            <p>teste espera</p>
            <RadioTileGroup
              aria-label="Visibility Level"
              onChange={(value, event) => console.log("value", value)}
            >
              <RadioTile label="Heels Class" value="private">
                Sala 1
                <p>
                  Esta turma esta lotada mas você pode escolher entrar na fila
                  de espera e caso haja alguma desistencia um dos nossos
                  colaboradores irá entrar em contato
                </p>
              </RadioTile>
            </RadioTileGroup>
            <p>Horário 1</p>
            <RadioTileGroup
              aria-label="Visibility Level"
              onChange={(value, event) => console.log("Segunda", value)}
            >
              <TesteRadio label="1" value="1">
                {" "}
                Sala 1
              </TesteRadio>
              <TesteRadio label="2" value="2">
                {" "}
                Sala 2{" "}
              </TesteRadio>
              <TesteRadio label="3" value="3">
                {" "}
                Sala 3{" "}
              </TesteRadio>

              <RadioTile label="Jazz Funk" value="4">
                Sala 3
              </RadioTile>
            </RadioTileGroup>
            <p>Horário 2</p>
            <RadioTileGroup aria-label="Visibility Level">
              <RadioTile label="Ballet" value="private">
                Sala 1
              </RadioTile>
              <RadioTile label="Dança de Salão" value="internal">
                Sala 2
              </RadioTile>
            </RadioTileGroup>
          </div>
        </div>
        <div className="card-container">
          <div className="card-dia-semana">
            <span> TERÇA</span>
            <p>Horário 1</p>
            <RadioTileGroup
              aria-label="Visibility Level"
              onChange={(value, event) => console.log("value", value)}
            >
              <RadioTile label="Jazz Funk" value="private">
                Sala 1
              </RadioTile>
              <RadioTile label="K pop" value="internal">
                Sala 2
              </RadioTile>
            </RadioTileGroup>
            <p>Horário 2</p>
            <RadioTileGroup aria-label="Visibility Level">
              <RadioTile label="Dance Hall" value="private">
                Sala 1
              </RadioTile>
              <RadioTile label="Dança de Salão" value="internal">
                Sala 2
              </RadioTile>
            </RadioTileGroup>
          </div>
        </div>
        <div className="card-container">
          <div className="card-dia-semana">
            <span>QUARTA</span>
            <p>Horário 1</p>
            <RadioTileGroup
              aria-label="Visibility Level"
              onChange={(value, event) => console.log("value", value)}
            >
              <RadioTile label="K pop juvenil" value="private">
                Sala 1
              </RadioTile>
              <RadioTile label="Hip Hop" value="internal">
                Sala 2
              </RadioTile>
            </RadioTileGroup>
            <p>Horário 2</p>
            <RadioTileGroup aria-label="Visibility Level">
              <RadioTile label="Coreo Class" value="private">
                Sala 1
              </RadioTile>
              <RadioTile label="Bel Class" value="internal">
                Sala 2
              </RadioTile>
            </RadioTileGroup>
          </div>
        </div>
        <div className="card-container">
          <div className="card-dia-semana">
            <span>QUINTA</span>
            <p>Horário 1</p>
            <RadioTileGroup
              aria-label="Visibility Level"
              onChange={(value, event) => console.log("value", value)}
            >
              <RadioTile label="K pop adulto" value="private">
                Sala 1
              </RadioTile>
              <RadioTile label="Dance Hall" value="internal">
                Sala 2
              </RadioTile>
            </RadioTileGroup>
            <p>Horário 2</p>
            <RadioTileGroup aria-label="Visibility Level">
              <RadioTile label="Danças Urbanas Intermediário" value="private">
                Sala 1
              </RadioTile>
              <RadioTile label="Ballet" value="internal">
                Sala 2
              </RadioTile>
            </RadioTileGroup>
          </div>
        </div>
        <div className="card-container">
          <div className="card-dia-semana">
            <span>SEXTA</span>
            <p>Horário 1</p>
            <RadioTileGroup
              aria-label="Visibility Level"
              onChange={(value, event) => console.log("value", value)}
            >
              <RadioTile label="Jazz Dance" value="private">
                Sala 1
              </RadioTile>
              <RadioTile label="Waacking" value="internal">
                Sala 2
              </RadioTile>
            </RadioTileGroup>
            <p>Horário 2</p>
            <RadioTileGroup aria-label="Visibility Level">
              <RadioTile label="Brazuca" value="private">
                Sala 1
              </RadioTile>
              <RadioTile label="House" value="internal">
                Sala 2
              </RadioTile>
            </RadioTileGroup>
          </div>
        </div>
      </div>
    </CustomProvider>
  );
}

export default Turmas;
