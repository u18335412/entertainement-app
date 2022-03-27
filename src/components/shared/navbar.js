/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";

const NavLinks = [
  {
    link: "home",
    iconSrc: "/assets/icon-nav-home.svg",
    href: "/",
  },
  {
    link: "movies",
    iconSrc: "/assets/icon-nav-movies.svg",
    href: "/movies",
  },
  {
    link: "tv-series",
    iconSrc: "/assets/icon-nav-tv-series.svg",
    href: "/tv-series",
  },
  {
    link: "bookmark",
    iconSrc: "/assets/icon-nav-bookmark.svg",
    href: "/bookmarks",
  },
];

const NavbarIcon = ({ src, alt, href }) => {
  const router = useRouter();
  return (
    <li className="group">
      <Link passHref href={href}>
        <img
          src={src}
          alt={alt}
          className={`w-[1.25rem] ${
            router.asPath === href
              ? "[filter:_brightness(0)_saturate(100%)_invert(100%)_sepia(0%)_saturate(6287%)_hue-rotate(189deg)_brightness(119%)_contrast(100%)]"
              : ""
          } h-[1.25rem] group-hover:[filter:_brightness(0)_saturate(100%)_invert(63%)_sepia(81%)_saturate(4510%)_hue-rotate(330deg)_brightness(96%)_contrast(105%)] cursor-pointer`}
          aria-label={alt}
        />
      </Link>
    </li>
  );
};
const Navbar = () => {
  return (
    <header className="h-screen absolute px-[2em] pb-[2em] pt-[2.2em] py-[] m-[2em] text-white bg-Semi-Dark-Blue w-fit rounded-[20px] flex flex-col items-center gap-y-[4.688rem]">
      <Link href="/" passHref>
        <img
          src="favicon.svg"
          className="w-8 h-[1.56rem] cursor-pointer"
          alt="logo"
        />
      </Link>
      <div className="h-full">
        <nav className="w-full flex flex-col items-center h-full">
          <ul className="h-full flex flex-col gap-y-10">
            {NavLinks.map(({ link, href, iconSrc }) => {
              return (
                <NavbarIcon key={link} href={href} src={iconSrc} alt={link} />
              );
            })}
          </ul>
          <img
            src="/assets/image-avatar.png"
            alt="profile picture"
            className="w-[2.5rem] h-[2.5rem]"
          />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
