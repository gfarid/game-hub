import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (seactText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize='60px' />
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
