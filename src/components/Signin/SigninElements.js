import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
min-height: 692px;
position: fixed;
bottom: 0; 
left: 0;
right: 0; 
top: 0;
z-index: 0;
overflow: hidden;
background: linear-gradient(
  108deg,
  rgba(1, 147, 86, 1) 0%,
  rgba(10, 201, 122, 1) 100%
);
`

export const FormWrap = styled.div`

height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 400px) {
  height: 80%
}
`

export const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
font-weight: 700;
font-size: 32px;
color: #fff;

@media screen and (max-width: 480px) {
  margin-left: 16px;
  margin-top: 8px;
}
`

export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction:column;
justify-content: center;

@media screen and (max-width: 480px) {
  padding: 10px;
}
`

export const Form = styled.form`
background: #010101;
max-width: 400px;
display: grid;
height: auto;
width: 100%;
z-index: 1;
margin: 0 auto;
padding: 80px 32px;
border-radius: 4px;

@media screen and (max-width: 400px) {
  padding: 32px 32px;
}
`

export const FormH1 = styled.h1`
color: #fff;
margin-bottom: 40px;
color: #fff;
font-size: 20px;
font-weight: 400;
text-align: center;
`
export const FormLabel = styled.label`
color: #fff;
font-size: 14px;
color: #fff;
`

export const FormInput = styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px;
`
export const FormButton = styled.button`
background: #01bf71;
cursor: pointer;
padding: 16px 0;
border: none;
border-radius: 4px;
color: #fff;
font-size: 20px;
`
export const Text = styled.span`
text-align: center;
color: #fff;
margin-top: 24px;
font-size: 24px;
`