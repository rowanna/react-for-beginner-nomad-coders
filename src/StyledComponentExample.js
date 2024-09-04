import { styled } from "styled-components";


const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid red;
  margin: 20px;
`;

const StyledComponentExample = () => {

    return <StBox>박스</StBox>;
};

export default StyledComponentExample