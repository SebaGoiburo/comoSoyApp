import { createSlice } from "@reduxjs/toolkit";


export const TestSlice = createSlice({
    name: "test",
    initialState: {
        value: {
            idPregunta: 0,
            respuesta: null,
            resultadoTest: ""
        }
    },
    reducers: {
        siguienteIdPregunta: (state) => {
            if (state.value.idPregunta < 72) {
                state.value.idPregunta += 1;
            }
            if (state.value.idPregunta === 72) {
                calcularResultado();
            }
        },
        anteriorIdPregunta: (state) => {
            state.value.idPregunta -= 1;
        },
        setRespuesta: (state, { payload }) => {
            state.value.respuesta = payload;
        },
    }
})

export const { siguienteIdPregunta, anteriorIdPregunta, setRespuesta} = TestSlice.actions;
export default TestSlice.reducer;