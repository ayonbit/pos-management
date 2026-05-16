"use client";

import { FaCartPlus, FaMinus, FaPlus, FaRegMoneyBillAlt } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import NotificationDropdown from "./NotificationDropdown";
import RefreshButton from "./RefreshButton";
import SearchBar from "./SearchBar";
import UserDropdown from "./UserDropdown";

const TopNav = () => {
  const handleProfile = () => {
    alert("Go to Profile");
  };

  const handleLogout = () => {
    alert("Logout");
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-between px-4 py-3.5 border-b rounded-md shadow-sm border-gray-300 bg-white">
      {/* LEFT */}
      <div className="flex items-center gap-4 min-w-30">
        <span className="text-sm leading-3 whitespace-nowrap font-semibold text-gray-700">
          Store Name
        </span>
      </div>

      {/* CENTER - Action Icons */}
      <div className="hidden lg:flex items-center gap-4 justify-center flex-1">
        <MdShoppingCart
          size={22}
          className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"
        />
        <FaRegMoneyBillAlt
          size={22}
          className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"
        />
        <FaCartPlus
          size={22}
          className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"
        />
        <FaCartPlus
          size={22}
          className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"
        />
        <FaRegMoneyBillAlt
          size={22}
          className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"
        />
        <FaPlus
          size={20}
          className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"
        />
        <FaMinus
          size={20}
          className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4 md:gap-6 justify-end flex-1">
        <SearchBar />
        <RefreshButton onRefresh={handleRefresh} />
        <NotificationDropdown  />
        <UserDropdown
          userName="Ayon Bit"
          userEmail="ayon@example.com"
          userRole="Administrator"
          onProfile={handleProfile}
          onLogout={handleLogout}
        />
      </div>
    </div>
  );
};

export default TopNav;
