/* eslint-disable react/no-unescaped-entities */
import Head from "next/head"
import Link from "next/link"
import React, { CSSProperties } from "react"
import cn from "classnames"
import { Popover, Transition, Disclosure } from "@headlessui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"

type MegaMenuItem = {
  href: string
  icon?: string
  body: string
  title: string
}

type TMegaMenu = {
  title: string
  items: MegaMenuItem[]
}[]

type NavItem = {
  href: string
  title: string
  megaMenu?: TMegaMenu
}
const navItems: NavItem[] = [
  {
    href: "/",
    title: "Наши работы",
  },
  {
    href: "/services",
    title: "Услуги",
    megaMenu: [
      {
        title: "CMS",
        items: [
          {
            href: "/",
            title: "Opencart",
            body: "Разработка и сопровождение интернет-магазинов на Opencart",
          },
          {
            href: "/",
            title: "Wordpress",
            body: "Разработка и сопровождение сайтов на Wordpress",
          },
        ],
      },
      {
        title: "Разработка и сопровождение кастомных решений",
        items: [
          {
            href: "/",
            title: "Laravel",
            body: "Разработка и сопровождение приложений на Laravel",
            icon: "https://laravel.com/img/logomark.min.svg",
          },
          {
            href: "/",
            title: "React.JS",
            body: "Разработка и сопровождение приложений на React.JS",
            icon:
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
          },
        ],
      },
    ],
  },
]

interface MegaMenuProps {
  data: TMegaMenu[number]
}
const MegaMenu = ({ data }: MegaMenuProps) => (
  <>
    <h1 className="text-lg font-bold text-primary mb-4 leading-normal">
      {data.title}
    </h1>
    <ul>
      {data.items.map((item) => (
        <MegaMenuItem data={item} key={item.title} />
      ))}
    </ul>
  </>
)

interface MegaMenuItemProps {
  data: MegaMenuItem
}
const MegaMenuItem = ({ data }: MegaMenuItemProps) => {
  return (
    <li className="my-6 flex flex-col items-start">
      <a href={"/"} className="leading-6 flex items-center">
        {data.icon !== undefined ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            alt=""
            src={data.icon}
            className="mt-1 mr-4 max-w-[2.5rem] h-auto"
          />
        ) : null}
        <div>
          <div className="font-medium text-sm hover:underline hover:text-brand-600 pb-1">
            {data.title}
          </div>
          <p className="text-xs leading-5 text-primary">{data.body}</p>
        </div>
      </a>
    </li>
  )
}

interface MobileMenuProps {
  items: NavItem[]
}
const MobileMenu = ({ items }: MobileMenuProps) => {
  return (
    <Popover className="md:hidden">
      {({ open }) => (
        <>
          {/* TODO: accessibility */}
          <Popover.Button
            className={cn(
              "hamburger hamburger--collapse focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black relative",
              open ? "is-active" : null,
            )}
            aria-label="menu"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </Popover.Button>
          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-screen left-0 right-0 top-full">
              <div className="overflow-hidden ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-2 bg-white p-7">
                  {items.map((item) =>
                    item.megaMenu ? (
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <NavLink item={item}>
                              <Disclosure.Button as={React.Fragment}>
                                <ChevronDownIcon
                                  className={`${
                                    open
                                      ? "transform rotate-180 nav__icon-sub__open"
                                      : ""
                                  } nav__icon-sub`}
                                />
                              </Disclosure.Button>
                            </NavLink>

                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm space-y-2">
                              {item.megaMenu!.map((x, i) => (
                                <div key={i}>
                                  <MegaMenu data={x} />
                                </div>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ) : null,
                  )}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

interface NavLinkProps {
  item: NavItem
  children?: React.ReactNode
}
const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ item, children }, ref) => (
    <div className="flex items-center mx-6 group">
      <Link href={item.href}>
        <a className="nav__link xs-slow-acceleration" ref={ref}>
          {item.title}
        </a>
      </Link>
      {children}
    </div>
  ),
)

NavLink.displayName = "NavLink"

const DesktopMenu = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)
  const [
    navUnderlineStyles,
    setNavUnderlineStyles,
  ] = React.useState<CSSProperties>({})
  const navRef = React.useRef<HTMLUListElement>(null)

  // TODO: useLayoutEffect
  React.useEffect(() => {
    function getAndSetNavUnderlineStyles() {
      if (navRef.current) {
        if (activeIndex === null) {
          setNavUnderlineStyles({})
        } else {
          const activeNavItem = Array.from(navRef.current.children).filter(
            (x) => x.tagName === "LI",
          )[activeIndex] as HTMLLIElement
          const activeNavLink = activeNavItem.querySelector(
            "a",
          ) as HTMLAnchorElement

          let left = activeNavLink.getBoundingClientRect().left
          let width = activeNavLink.clientWidth

          setNavUnderlineStyles({
            left,
            width,
          })
        }
      }
    }

    getAndSetNavUnderlineStyles()

    window.addEventListener("resize", getAndSetNavUnderlineStyles)
    window.addEventListener("load", getAndSetNavUnderlineStyles)

    return () => {
      window.removeEventListener("resize", getAndSetNavUnderlineStyles)
      window.removeEventListener("load", getAndSetNavUnderlineStyles)
    }
  }, [activeIndex])

  return (
    <ul className="nav flex-wrap hidden md:inline-flex" ref={navRef}>
      {navItems.map((item, index) => (
        <li
          key={item.href}
          className="nav__item"
          onMouseEnter={() => {
            setActiveIndex(index)
          }}
          onMouseLeave={() => {
            setActiveIndex(null)
          }}
        >
          {item.megaMenu ? (
            <Popover as={React.Fragment}>
              {({ open }) => (
                <>
                  <NavLink item={item}>
                    <Popover.Button as={React.Fragment}>
                      <ChevronDownIcon
                        className={`${open ? "" : "nav__icon-sub__open"}
          nav__icon-sub`}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                  </NavLink>
                  <Transition
                    as={React.Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 sm:px-0 lg:max-w-3xl">
                      <div className="leading-normal">
                        {/* TODO: max-w media query */}
                        <div className="flex bg-white shadow-xl rounded-t-none rounded-b-2 absolute overflow-auto border-t-1 border-t-gray-200 space-x-4 px-8 pt-8 pb-12">
                          {item.megaMenu!.map((x) => (
                            <div className="w-[15rem]" key={x.title}>
                              <MegaMenu data={x} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          ) : (
            <NavLink item={item} />
          )}
        </li>
      ))}
      {/* styles: opacity, left, width */}
      <span
        className="z-10 transition-all ease duration-200 delay-200 absolute bg-brand-600 bottom-[-1px] h-[2px]"
        style={{
          opacity: activeIndex !== null ? 1 : 0,
          ...navUnderlineStyles,
        }}
      />
    </ul>
  )
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="max-w-1600 margin-x-auto z-[2000] shadow-gray-200-hr-1 fixed left-0 right-0 top-0 p-0 transition-[top] duration-350 xs-slow-acceleration-md-slower-deceleration">
        <nav
          className="bg-white w-full z-[99] px-6 flex items-center justify-between"
          style={
            {
              scrollBehavior: "smooth",
            } as any
          }
        >
          <DesktopMenu />

          <ul className="justify-end flex items-center z-5 space-x-2 py-2">
            <li>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/" className="btn btn_md btn_c_blue_v_ghost-bordered">
                Talk to an expert
              </a>
            </li>
            <li className="md:hidden">
              <MobileMenu items={navItems} />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
