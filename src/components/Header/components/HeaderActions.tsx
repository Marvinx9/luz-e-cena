import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";
import Button from "../../Button";

const HeaderActions = () => {
  return (
    <>
      <Button variant="icon">
        <HiOutlineShoppingCart />
      </Button>
      <Button variant="icon">
        <HiOutlineUser />
      </Button>
    </>
  );
};

export default HeaderActions;
