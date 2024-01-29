export class MenuLinkItem {
  menuTitle: string;
  menuPath: string;

  constructor(menuTitle: string, menuPath: string) {
    this.menuTitle = menuTitle;
    this.menuPath = menuPath;
  }
}

export class SubMenu {
  subMenuTitle: string;
  subMenus: MenuLinkItem[];

  constructor(subMenuTitle: string, subMenus: MenuLinkItem[]) {
    this.subMenuTitle = subMenuTitle;
    this.subMenus = subMenus;
  }
}

class HeaderListItem {
  mainMenuTitle: MenuLinkItem;
  subMenuList: SubMenu[];

  constructor(mainMenuTitle: MenuLinkItem, subMenuList: SubMenu[]) {
    this.mainMenuTitle = mainMenuTitle;
    this.subMenuList = subMenuList;
  }
}

export default HeaderListItem;
