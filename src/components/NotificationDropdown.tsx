"use client";

import { Notification } from "@/types/Notification.types";
import { useClickOutside } from "@/utils/useClickOutside";
import { useRef, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import Tooltip from "./ui/ToolTips";

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, message: "New order received!", read: false, time: "2 min ago" },
    { id: 2, message: "Product out of stock", read: false, time: "1 hour ago" },
    { id: 3, message: "Payment received", read: true, time: "2 hours ago" },
  ]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef as React.RefObject<HTMLDivElement>, () =>
    setIsOpen(false),
  );

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleNotificationClick = (id: number) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)),
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })));
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Tooltip content="Notifications" position="bottom">
        <div
          className="rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoIosNotificationsOutline size={20} className="text-gray-600" />
          {unreadCount > 0 && (
            <div className="absolute -top-1 -right-1 min-w-4.5 h-4.5 flex items-center justify-center rounded-full text-[10px] font-medium bg-red-600 text-white px-1">
              {unreadCount > 9 ? "9+" : unreadCount}
            </div>
          )}
        </div>
      </Tooltip>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200 bg-gray-50">
            <span className="text-sm font-semibold text-gray-700">
              Notifications
            </span>
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="text-xs text-blue-600 hover:text-blue-800 font-medium"
              >
                Mark all as read
              </button>
            )}
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="px-4 py-8 text-sm text-gray-500 text-center">
                No notifications
              </div>
            ) : (
              notifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`px-4 py-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                    !notif.read ? "bg-blue-50" : ""
                  }`}
                  onClick={() => handleNotificationClick(notif.id)}
                >
                  <p className="text-sm text-gray-800">{notif.message}</p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-gray-500">{notif.time}</span>
                    {!notif.read && (
                      <span className="text-xs text-blue-600 font-medium">
                        New
                      </span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
