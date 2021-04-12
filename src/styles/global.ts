import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --red-primary: #ff1f00;
    --text-primary: #282a36;
}

body {
    background: rgba(0,0,0,0.05);
}

@media (max-width: 1080px){
    html {
        font-size: 93.75%;
    }
}

@media (max-width: 720px){
    html {
        font-size: 87.5%;
    }
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

button {
    cursor: pointer;
}

button:disabled {
    cursor: not-allowed;
}


`;
