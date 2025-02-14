import styled from 'styled-components'

const Botoes = styled.button`
max-width: 12rem;
display: flex;
align-items: center;
gap: 10px;
background-color:rgb(23, 112, 236);
color: #ffff;
padding: 15px 20px;
font-weight: 600;
border-radius: 20px;
border: none;
font-size: 1.1rem;
cursor: pointer;

&:hover{
    background-color: #ffff;
    color: rgb(23, 112, 236);
    border: 2px solid rgb(23, 112, 236);
}
`

export default Botoes