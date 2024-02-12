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
          className=" px-2 py-3 text-white hover:bg-slate-300 hover:text-slate-900"
        >
          <a href={`#${item.link}`}>{item.name}</a>
        </li>
      );
    });
  };

  return (
    <div className="bg-slate-600 drop-shadow-md">
      <div className="container mx-auto flex flex-auto ">
        <div className="flex-1 py-3 pr-6">
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
