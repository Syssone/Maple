import React, { useState } from 'react';

interface InitialValue {
  pathName: string;
  key: React.Key;
  name: string;
  render: React.FC;
}

const useMenu = () => {
  const [menus, setMenus] = useState<InitialValue[]>([]);

  const registerMenu = (menu: InitialValue) => {
    setMenus((prevState) => {
      prevState.push(menu);
      return prevState;
    });
  };

  return [menus, registerMenu];
};
export default useMenu;
