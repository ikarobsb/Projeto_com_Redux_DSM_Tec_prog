import React from "react";
import Card from "./Card";
import {connect} from "react-redux";

function Sorteio(props) {
  
  const { min, max } = props;
  
  return (
    <Card title="Sorteio de Números" red>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>
            {Math.floor(Math.random() * (max - min + 1) + min)}
          </strong>
        </span>
      </div>
    </Card>
  );
}
  
function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

export default connect(mapStateToProps)(Sorteio);
