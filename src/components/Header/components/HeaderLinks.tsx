import MenuBurger from "../../Menu/MenuBurger/MenuBurger";
import MenuItem from "../../Menu/MenuItem";
import MenuList from "../../Menu/MenuList";

const HeaderLinks = () => {
  return (
    <>
      <MenuBurger />
      <MenuList>
        <MenuItem>Eventos</MenuItem>
        <MenuItem>Club fidelidade</MenuItem>
        <MenuItem>Sobre nós</MenuItem>
      </MenuList>
    </>
  );
};

export default HeaderLinks;
