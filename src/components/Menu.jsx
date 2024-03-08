import { cloneElement, createContext, useContext, useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

const MenuContext = createContext();

function Menu({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpen = () => setIsMenuOpen(true);
  const handleClose = () => setIsMenuOpen(false);

  return (
    <MenuContext.Provider value={{ isMenuOpen, handleClose, handleOpen }}>
      {children}
    </MenuContext.Provider>
  );
}

function Button() {
  const { isMenuOpen, handleOpen, handleClose } = useContext(MenuContext);
  return (
    <span className="inline-block sm:hidden text-[4rem]">
      {!isMenuOpen ? (
        <HiOutlineBars3 onClick={handleOpen} />
      ) : (
        <HiOutlineXMark onClick={handleClose} />
      )}
    </span>
  );
}

function Content({ children }) {
  const { isMenuOpen, handleClose } = useContext(MenuContext);

  return cloneElement(children, { menu: isMenuOpen, close: handleClose });
}

Menu.Button = Button;
Menu.Content = Content;

export default Menu;
