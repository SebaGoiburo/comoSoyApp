import { createSlice } from "@reduxjs/toolkit";
import preguntas from '../data/listadoPreguntas.json';


const preguntaInicial = preguntas.find((pregunta) => pregunta.id === 1);



export const TestSlice = createSlice({
    name: "test",
    initialState: {
        value: {
            preguntaActual: preguntaInicial.aseveracion.toString(),
            idPregunta: 1,
            respuesta: preguntaInicial.respuesta,
            resultadoTest: ""
        }
    },
    reducers: {
        siguienteIdPregunta: (state)=>{
            state.value.idPregunta +=1;
        },
        anteriorIdPregunta: (state)=>{
            state.value.idPregunta -=1;
        },
        cambioDePregunta: (state)=>{
            const p = preguntas.find((pregunta) => pregunta.id === state.value.idPregunta);
            state.value.preguntaActual = p.aseveracion.toString();
        },
        setRespuesta: (state, {payload})=>{
            state.value.respuesta = payload;
            const p = preguntas.find((pregunta) => pregunta.id === state.value.idPregunta);
            p.respuesta = state.value.respuesta;
        }
    }
})

export const { siguienteIdPregunta, anteriorIdPregunta, cambioDePregunta, setRespuesta, responseTrue} = TestSlice.actions;
export default TestSlice.reducer;