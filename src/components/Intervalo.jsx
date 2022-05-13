import "./Intervalo.css";
import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import {alterarNumeroMinimo} from "../store/actions/numeros";
import {alterarNumeroMaximo} from "../store/actions/numeros";

function Intervalo(props) {
  const { min, max } = props;

  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>  
          <span>Mínimo: </span>
          <input type="number" value={min} 
          onChange={e => props.alterarNumeroMinimo(+e.target.value)}/>
        </span>
        <span>
          <span>Máximo: </span>
          <input type="number" value={max} 
          onChange={e => props.alterarNumeroMaximo(+e.target.value)}/>
        </span>
      </div>
    </Card>
  );
}

function mapDispatchToProps(dispatch){
    return {
        alterarNumeroMinimo(novoNumero){
            const action = alterarNumeroMinimo(novoNumero);
            dispatch(action);
        },
        alterarNumeroMaximo(novoNumero){
            const action = alterarNumeroMaximo(novoNumero);
            dispatch(action);
        }
    };
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);