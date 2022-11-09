import styled from '@emotion/styled';
import { ChangeEventHandler, MouseEventHandler } from 'react';
import { SearchIcon } from './SearchIcon';

export function SickSearchInput({
  onChange,
  onClick,
}: {
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClick: MouseEventHandler<HTMLParagraphElement>;
}) {
  return (
    <>
      <Container>
        <SearchIcon />
        <Input
          type="search"
          placeholder="질환명을 입력해주세요"
          onChange={onChange}
          onClick={onClick}
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: 490px;
  width: 100%;
  position: relative;
`;

const Input = styled.input`
  border-radius: 42px;
  width: 100%;
  padding: 20px 10px 20px 42px;
  font-size: 1.6rem;
  background-color: #fff;

  &::placeholder {
    color: #a7afb7;
  }
`;