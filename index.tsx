import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./App";
import "./style.css";
//import { saveAs } from "file-saver";
import { Packer } from "docx";
import { identificacion, solicitante, autorizacion,responsables,zonasUbicaciones, laboratoriosDestino, recursos, muestras, experiences, education, skills, achievements } from "./cv-data";
import { DocumentCreator } from "./cv-generator";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  generate(): void {
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create([
      identificacion,
      solicitante,
      autorizacion,
      responsables,
      zonasUbicaciones,
      laboratoriosDestino,
      recursos,
      muestras, 
      experiences,
      education,
      skills,
      achievements
    ]);

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
          <button onClick={this.generate}>Generar documento!</button>
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
