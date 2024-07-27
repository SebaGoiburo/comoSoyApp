import { createSlice } from "@reduxjs/toolkit";
import listadoPreguntas from "../data/listadoPreguntas.json" 

export const TestSlice = createSlice({
    name: "test",
    initialState: {
        value: {
            idPregunta: 0,
            respuestas: listadoPreguntas,
            resultadoTest: ""
        }
    },
    reducers: {
        siguienteIdPregunta: (state) => {
            if (state.value.idPregunta < 72) {
                state.value.idPregunta += 1;
            }
        },
        anteriorIdPregunta: (state) => {
            if(state.value.idPregunta>1){
                state.value.idPregunta -= 1;
            }
        },
        setRespuesta: (state, { payload }) => {
            state.value.respuestas[state.value.idPregunta].respuesta = payload;
        },
        setResultadoTest: (state, action) => {
            state.value.resultadoTest = action.payload;
        }
    }
})

export const { siguienteIdPregunta, anteriorIdPregunta, setRespuesta, setResultadoTest} = TestSlice.actions;
export default TestSlice.reducer;