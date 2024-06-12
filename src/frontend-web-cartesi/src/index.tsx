// Copyright 2022 Cartesi Pte. Ltd.

// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy
// of the license at http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations
// under the License.

import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App2 from "./App2"; // O novo componente de página que você criou
import Header from "./components/Header/Header";
import Card from "./components/Cards/Card";
import Input from "./components/Input/Input";
import CancelButton from "./components/Buttons/buttonCancel";
import CadastrarButton from "./components/Buttons/cadastrarButton";
import Galeria from "./Galeria";
import RegistrarTransacao from "./RegistrarTransação";
import ValidateTransaction from "./validateTransaction";
import Instrucoes from "./Instrucoes";

// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('root');
// const root = createRoot(container!); // createRoot(container!) if you use TypeScript
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/novapagina" element={<App2 />} />
        <Route path="/header" element={<Header />}/>
        {/* <Route path="/card" element={<Card
            id={'1'}
            price={'10000'}/>
          }
        /> */}
        <Route path="/input" element={<Input />}/>
        <Route path="/cancelButton" element={<CancelButton />}/>
        <Route path="/cadastrarButton" element={<CadastrarButton />}/>
        <Route path="/registrarTransacao" element={<RegistrarTransacao dappAddress="0x70ac08179605AF2D9e75782b8DEcDD3c22aA4D0C"/>}/>
        <Route path="/galeria" element={<Galeria />}/>

        <Route path="/validarTransacao" element={<ValidateTransaction dappAddress="0x70ac08179605AF2D9e75782b8DEcDD3c22aA4D0C"/>} />
        <Route path="/instrucoes" element={<Instrucoes />} />
        {/* Outras rotas podem ser adicionadas aqui */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
