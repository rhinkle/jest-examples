/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const navItems = [
    { name: 'Home', link: '/home' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ];

  const navItem = () => {
    return navItems.map((item, index) => {
      return (
        <li
          key={item.name}
          className=" py-3 px-2 text-white hover:bg-slate-300 hover:text-slate-900"
        >
          <a href={`#${item.link}`}>{item.name}</a>
        </li>
      );
    });
  };

  return (
    <div className="drop-shadow-md bg-slate-600">
      <div className="container mx-auto flex flex-auto ">
        <div className="pr-6 py-3 flex-1">
          <span className="text-white">Jest Testing Examples</span>
        </div>
        <nav className="mr-right">
          <ul className="flex flex-auto flex-row">{navItem()}</ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
