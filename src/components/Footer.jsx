/**
 * @copyright 2025 SanThosh
 * @license Apache-2.0
 */

import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/santhosh-15082003/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/santhoshb150803",
  },
  // {
  //   label: "Twitter X",
  //   href: "https://x.com/codewithsadee_",
  // },
  {
    label: "Instagram",
    href: "https://www.instagram.com/x._.saz._.x/",
  },
  // {
  //   label: "CodePen",
  //   href: "https://codepen.io/codewithsadee",
  // },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Let's work together today
            </h2>

            <ButtonPrimary
              href="mailto:santhoshb1503@gmail.com"
              label="Start project"
              icon="chevron_right"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2">Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2">Social</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                      target="_blank"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="" className="">P O R T F O L I O</a>

          <p className="text-zinc-500 text-sm">
            &copy; 2025 <span className="text-zinc-200">SanThosh </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
