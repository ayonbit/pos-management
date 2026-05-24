"use client";

import { FormModalProps } from "@/types/FormModal.type";

import { AnimatePresence, motion } from "framer-motion";

import React, { ReactElement, useCallback, useEffect, useState } from "react";

import { createPortal } from "react-dom";

import { forms } from "./config/formRegistry";
import Button from "./ui/Button";

interface TriggerProps {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

interface Props extends FormModalProps {
  children: ReactElement<TriggerProps>;
}

// Backdrop Animation
const backdrop = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      duration: 0.15,
    },
  },

  exit: {
    opacity: 0,

    transition: {
      duration: 0.1,
    },
  },
};

// Modal Animation
const modal = {
  hidden: {
    opacity: 0,
    y: 8,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.18,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },

  exit: {
    opacity: 0,
    y: 8,

    transition: {
      duration: 0.12,
    },
  },
};

const FormModal = ({ table, type, data, id, children }: Props) => {
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  // Open Modal
  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  // Close Modal
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  // Lock body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // ESC Close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [handleClose]);

  // Delete Handler
  const handleDelete = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      console.log("Deleting:", id);

      handleClose();
    } catch (error) {
      console.error("Delete failed:", error);
    } finally {
      setLoading(false);
    }
  };

  // Render Content
  const renderContent = () => {
    // Delete Modal
    if (type === "delete" && id) {
      return (
        <form
          onSubmit={handleDelete}
          className="flex flex-col items-center gap-5"
        >
          <div className="space-y-2 text-center">
            <h2 className="text-lg font-semibold text-gray-800">
              Delete {table}
            </h2>

            <p className="text-sm text-gray-500">
              Are you sure you want to delete this {table}?
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>

            <Button type="submit" variant="danger" disabled={loading}>
              {loading ? "Deleting..." : "Delete"}
            </Button>
          </div>
        </form>
      );
    }

    // Create / Update
    if ((type === "create" || type === "update") && forms[table]) {
      return forms[table](type, data, handleClose);
    }

    return (
      <div className="py-10 text-center">
        <p className="text-sm text-gray-500">Form not found</p>
      </div>
    );
  };

  // Trigger
  const trigger = React.cloneElement(children, {
    onClick: (e: React.MouseEvent<HTMLElement>) => {
      children.props.onClick?.(e);

      handleOpen();
    },
  });

  return (
    <>
      {/* Trigger */}
      {trigger}

      {/* Portal */}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              <div className="fixed inset-0 z-9999">
                {/* Backdrop */}
                <motion.div
                  variants={backdrop}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute inset-0 bg-black/40"
                  onClick={handleClose}
                />

                {/* Modal Wrapper */}
                <div className="flex min-h-screen items-center justify-center p-4">
                  {/* Modal */}
                  <motion.div
                    variants={modal}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="
                      relative
                      z-10000
                      w-full
                      max-w-sm
                      sm:max-w-md
                      md:max-w-lg
                      lg:max-w-xl
                      xl:max-w-2xl
                      max-h-[90vh]
                      overflow-y-auto
                      no-scrollbar
                      rounded-lg
                      bg-white
                      shadow-xl
                      p-4 sm:p-5 md:p-6
                    "
                  >
                    {/* Close Button */}
                    <button
                      type="button"
                      onClick={handleClose}
                      className="
                        absolute
                        top-3
                        right-3
                        text-xl
                        text-gray-500
                        transition-colors
                        hover:text-black
                      "
                    >
                      ✕
                    </button>

                    {/* Content */}
                    <div className="mt-2">{renderContent()}</div>
                  </motion.div>
                </div>
              </div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
};

export default FormModal;
