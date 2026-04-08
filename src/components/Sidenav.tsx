"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdOutlineArrowRight } from "react-icons/md";

import { menuItems } from "@/lib/MenuItem";

const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const pathname = usePathname();

  const toggleDropdown = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="h-screen  mt-4 text-sm w-16 md:w-56 lg:w-64 transition-all duration-300">
      <ul className="space-y-1">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          const isOpen =
            openIndex === index ||
            item.children?.some((child) => pathname.startsWith(child.href!));

          return (
            <li key={item.label}>
              {/* WITH CHILDREN */}
              {item.children ? (
                <div className="">
                  <button
                    type="button"
                    onClick={() => toggleDropdown(index)}
                    className=" border-b border-gray-300 shadow-sm  relative flex items-center justify-center md:justify-between w-full py-2 px-2 rounded-md hover:bg-SkyLight cursor-pointer"
                    title={item.label}
                  >
                    {/* LEFT ACTIVE BAR */}
                    {isOpen && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-[3px] bg-black rounded-r-md"></span>
                    )}

                    <div className=" flex items-center justify-center md:justify-start gap-4 w-full md:ml-2">
                      <Icon className="text-base text-gray-500" />
                      <span className="hidden md:block text-gray-600">
                        {item.label}
                      </span>
                    </div>

                    {/* Arrow only on tablet+ */}
                    <MdOutlineArrowRight
                      className={`hidden md:block transition-transform duration-200 text-gray-400 ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {/* DROPDOWN */}
                  {isOpen && (
                    <div className="ml-0 md:ml-6 mt-1 flex flex-col gap-1 ">
                      {item.children.map((child, i) => {
                        const ChildIcon = child.icon;
                        const isActive = pathname.startsWith(child.href!);

                        return (
                          <Link
                            href={child.href!}
                            key={i}
                            title={child.label}
                            className=" shadow-sm border-b border-gray-300 relative flex items-center justify-center md:justify-start gap-4 py-2 px-2 rounded-md hover:bg-SkyLight"
                          >
                            {/* ACTIVE BAR */}
                            {isActive && (
                              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-[3px] bg-black rounded-r-md"></span>
                            )}

                            <div className="flex items-center justify-center md:justify-start gap-4 w-full md:ml-2">
                              <ChildIcon className="text-sm text-gray-500" />
                              <span
                                className={`hidden md:block ${
                                  isActive
                                    ? "font-medium text-gray-800"
                                    : "text-gray-500"
                                }`}
                              >
                                {child.label}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                // SINGLE ITEM
                <Link
                  href={item.href!}
                  title={item.label}
                  className="border-b  border-gray-300 relative flex items-center justify-center md:justify-start gap-4 py-2 px-2 rounded-md hover:bg-SkyLight"
                >
                  {/* ACTIVE BAR */}
                  {pathname === item.href && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-[3px] bg-black rounded-r-md"></span>
                  )}

                  <div className=" flex items-center justify-center md:justify-start gap-4 w-full md:ml-2">
                    <Icon className="text-base text-gray-500" />
                    <span
                      className={`hidden md:block ${
                        pathname === item.href
                          ? "font-medium text-gray-800"
                          : "text-gray-500"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
