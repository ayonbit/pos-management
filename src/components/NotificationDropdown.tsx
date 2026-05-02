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
        <>
          {/* Backdrop for mobile only */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown - responsive */}
          <div
            className={`
            absolute z-50 bg-white border border-gray-200 shadow-lg overflow-hidden
            /* Desktop styles */
            md:right-0 md:mt-2 md:w-80 md:rounded-lg
            /* Mobile styles - full width at bottom */
            fixed md:absolute
            left-0 right-0 bottom-0 md:bottom-auto
            w-full md:w-auto
            rounded-t-2xl md:rounded-lg
            max-h-[80vh] md:max-h-96
            mt-0 md:mt-2
          `}
          >
            {/* Drag indicator for mobile */}
            <div className="w-full flex justify-center pt-3 pb-2 md:hidden">
              <div className="w-12 h-1 bg-gray-300 rounded-full" />
            </div>

            {/* Header */}
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

            {/* Notification List */}
            <div className="overflow-y-auto max-h-[calc:80vh-120px] md:max-h-80">
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
                      <span className="text-xs text-gray-500">
                        {notif.time}
                      </span>
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

            {/* Close button for mobile */}
            <div className="p-4 border-t border-gray-200 md:hidden">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 bg-gray-100 text-gray-700 rounded-lg font-medium active:bg-gray-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NotificationDropdown;
