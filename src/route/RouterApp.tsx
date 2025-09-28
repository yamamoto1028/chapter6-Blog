import { Link, Outlet } from "react-router-dom";

export default function RouterApp() {
  return (
    <>
      <header className="bg-[#333] font-[700] sticky top-0">
        <nav className="flex justify-between p-[24px] text-[#fff]">
          <Link to="/">Blog</Link>
          <Link to="/contact">お問い合わせ</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
