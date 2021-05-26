import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}

div{
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
};
h1 {
    font-weight: bold;
    font-size: 3rem;
    color: ${(props) => props.theme.colors.lightblue};  
};
h2 {
    font-weight: normal;
    font-size: 2.44rem;
    letter-spacing: 0.1rem;
    color: ${(props) => props.theme.colors.maroon};
};
h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 1.953rem;
    padding: 1rem;
    color: ${(props) => props.theme.colors.maroon}

};
h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 1.563rem;
    
};
p, li, strong, em {
    font-style: normal;
    font-size: .9rem;
    line-height: 1.2rem;
};
`;

export default GlobalStyle;
