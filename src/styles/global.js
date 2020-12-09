import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;
    }
    body{
        background: #fafafa;
        font-size: 14px Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased !important;
        color: ${colors.primaryDarkColor};
    }
    body, input, button {
        color: #222;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
        border-style: none;
    }
    button {
        cursor:pointer;
        background: ${colors.primaryColor};
        border: none;
        color: #fff;
        padding: 10px 20px;
        border-radius: 4px;
        font-weight: 700;
    }

    a {
      text-decoration: none;
      color: ${colors.primaryColor};
    }

    ul {
      list-style: none;
    }

    body .Toastify .Toastify_toast-container .Toastify_toast--sucess {
      background: ${colors.sucessColor}
    } 

    body .Toastify .Toastify_toast-container .Toastify_toast--error {
      background: ${colors.errorColor} 
    }
`;

export const Container = styled.section`
  max-width: 360px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
