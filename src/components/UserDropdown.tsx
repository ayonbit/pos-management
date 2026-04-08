"use client";

import { UserDropdownProps } from "@/types/UserDropdown.types";
import { useClickOutside } from "@/utils/useClickOutside";
import { useRef, useState } from "react";
import { FiLogOut, FiUser } from "react-icons/fi";

const UserDropdown = ({
  userName,
  userEmail,
  userRole,
  onProfile,
  onLogout,
}: UserDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(dropdownRef as React.RefObject<HTMLDivElement>, () =>
    setIsOpen(false),
  );

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const handleProfile = () => {
    onProfile?.();
    setIsOpen(false);
  };

  const handleLogout = () => {
    onLogout?.();
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center gap-3 cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Avatar */}
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-medium shadow-sm">
            {getInitials(userName)}
          </div>
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
        </div>

        {/* User Info - Hidden on mobile */}
        <div className="hidden md:block">
          <p className="text-sm font-semibold text-gray-700 leading-tight">
            {userName}
          </p>
          <p className="text-xs text-gray-500">{userRole}</p>
        </div>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
          {/* User info header */}
          <div className="px-4 py-3 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-medium">
                {getInitials(userName)}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">
                  {userName}
                </p>
                <p className="text-xs text-gray-500">{userEmail}</p>
              </div>
            </div>
          </div>

          {/* Menu items */}
          <button
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            onClick={handleProfile}
          >
            <FiUser size={16} className="text-gray-500" />
            <span>Profile Settings</span>
          </button>

          <button
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors border-t border-gray-100"
            onClick={handleLogout}
          >
            <FiLogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
