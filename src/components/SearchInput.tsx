import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSeartchtext = useGameQueryStore((s) => s.setSearchText);
  return (
    <form
      onSubmit={(evevt) => {
        evevt.preventDefault();
        if (ref.current) setSeartchtext(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search game ..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
