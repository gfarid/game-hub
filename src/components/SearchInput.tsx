import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (seactText: string) => void;
}
function SearchInput({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current?.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          placeholder='Search games...'
          borderRadius={20}
          variant='filled'
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;