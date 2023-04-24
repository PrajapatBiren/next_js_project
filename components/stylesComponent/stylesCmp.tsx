import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  margin-top:30px
`;

export const StyleButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: "white";
  color:  "white" ;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
export const OverrideStyleButton = styled(StyleButton)`
  color: tomato;
  border-color: tomato;
`;

export const InnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const FormListSubWrapper = styled.div`
    width: 30%;
    margin: 0px 20px 0px 10px;
    border-color: '#D3D3D3';
    border-width: 0.3px; 
    border-radius: 10px;
    height:400px
`;

export const Header = styled.header`
display: flex;
justify-content: center;
align-items: center;
padding: 10px 15px;

h1 {
  font-weight: 400;
  color: tomato;
  font-size: 1rem;
}

h4 {
  font-weight: 400;
  color: green;
  font-size: 1rem;
  margin-left:3px
}
`;

export const SearchBarStyleCmp = styled.input`
  width: 98%; 
  background: #F0F0F0;
  border: none; 
  padding: 0.7rem; 
  border-radius: 10px; 
  margin-top: 5px;
`

export const HeaderViewWrapper = styled.div`
  width: 20%; 
  display: flex; 
  height: 50px;
  justify-content: space-around; 
  align-items: center;
  padding-top: 20;
  
`