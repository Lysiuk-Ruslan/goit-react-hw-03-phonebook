import styled from '@emotion/styled';

export const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const InputName = styled.label`
  font-size: 24px;
  font-weight: 500;
`;
export const Input = styled.input`
  width: 70%;
`;
export const AddContact = styled.button`
  width: 200px;
  height: 30px;
  font-size: 18px;
  background-image: linear-gradient(
    to right,
    #314755 0%,
    #26a0da 51%,
    #314755 100%
  );
  :hover {
    color: #fff;
    border: 1px solid burlywood;
  }
`;
