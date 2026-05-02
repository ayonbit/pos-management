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
      {/* Trigger */}
      <Tooltip content="Notifications" position="bottom">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-gray-100/70 transition relative"
        >
          <IoIosNotificationsOutline size={20} className="text-gray-500" />

          {unreadCount > 0 && (
            <div className="absolute -top-1 -right-1 min-w-4.5 h-4.5 flex items-center justify-center rounded-full text-[10px] font-medium bg-red-500 text-white px-1">
              {unreadCount > 9 ? "9+" : unreadCount}
            </div>
          )}
        </div>
      </Tooltip>

      {isOpen && (
        <>
          {/* Overlay (mobile only) */}
          <div
            className="fixed inset-0 bg-black/30 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* ================= MOBILE ================= */}
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl max-h-[80vh] md:hidden shadow-md border border-gray-100">
            {/* Drag indicator */}
            <div className="flex justify-center py-2">
              <div className="w-12 h-1 bg-gray-200 rounded-full" />
            </div>

            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100 bg-gray-50/60">
              <span className="text-sm font-semibold text-gray-600">
                Notifications
              </span>

              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-xs text-blue-500 hover:text-blue-600 font-medium"
                >
                  Mark all as read
                </button>
              )}
            </div>

            {/* List */}
            <div className="overflow-y-auto max-h-[calc(80vh-120px)] no-scrollbar">
              {notifications.length === 0 ? (
                <div className="px-4 py-8 text-sm text-gray-400 text-center">
                  No notifications
                </div>
              ) : (
                notifications.map((notif) => (
                  <div
                    key={notif.id}
                    onClick={() => handleNotificationClick(notif.id)}
                    className={`px-4 py-3 border-b border-gray-100 cursor-pointer transition-colors
                      hover:bg-gray-100/60
                      ${!notif.read ? "bg-blue-50/50" : ""}
                    `}
                  >
                    <p className="text-sm text-gray-600">{notif.message}</p>

                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-gray-400">
                        {notif.time}
                      </span>

                      {!notif.read && (
                        <span className="text-xs text-blue-500 font-medium">
                          New
                        </span>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Close */}
            <div className="p-4 border-t border-gray-100">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 bg-gray-100/70 text-gray-600 rounded-lg font-medium active:bg-gray-200 transition"
              >
                Close
              </button>
            </div>
          </div>

          {/* ================= DESKTOP ================= */}
          <div className="hidden md:block absolute right-0 top-full mt-2 w-80 bg-white border border-gray-100 rounded-lg shadow-md z-50 overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100 bg-gray-50/60">
              <span className="text-sm font-semibold text-gray-600">
                Notifications
              </span>

              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-xs text-blue-500 hover:text-blue-600 font-medium"
                >
                  Mark all as read
                </button>
              )}
            </div>

            {/* List */}
            <div className="max-h-80 overflow-y-auto no-scrollbar">
              {notifications.length === 0 ? (
                <div className="px-4 py-6 text-sm text-gray-400 text-center">
                  No notifications
                </div>
              ) : (
                notifications.map((notif) => (
                  <div
                    key={notif.id}
                    onClick={() => handleNotificationClick(notif.id)}
                    className={`px-4 py-3 border-b border-gray-100 cursor-pointer transition-colors
                      hover:bg-gray-100/60
                      ${!notif.read ? "bg-blue-50/50" : ""}
                    `}
                  >
                    <p className="text-sm text-gray-600">{notif.message}</p>

                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-gray-400">
                        {notif.time}
                      </span>

                      {!notif.read && (
                        <span className="text-xs text-blue-500 font-medium">
                          New
                        </span>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NotificationDropdown;
