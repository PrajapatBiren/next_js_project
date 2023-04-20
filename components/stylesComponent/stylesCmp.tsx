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
    margin: 0px 10px 0px 10px;
    border-color: '#D3D3D3';
    border-width: 0.3px; 
    border-radius: 10px;
`;