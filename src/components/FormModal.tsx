"use client";

import { FormModalProps } from "@/types/FormModal.type";
import { ReactNode, useState } from "react";
import Button from "./ui/Button";

interface Props extends FormModalProps {
  children: ReactNode;
}

const FormModal = ({ table, type, data, id, children }: Props) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Delete Handler (with loading state, no navigation)
  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Deleting:", id);

      // Replace with API later
      // await fetch(`/api/${table}/${id}`, { method: "DELETE" });

      setOpen(false);
    } catch (error) {
      console.error("Delete failed", error);
    } finally {
      setLoading(false); // ✅ always reset
    }
  };

  // render content function later move for component separation
  const renderContent = () => {
    if (type === "delete" && id) {
      return (
        <form
          onSubmit={handleDelete}
          className="p-4 flex flex-col gap-4 items-center"
        >
          <span className="text-center font-medium">
            Are you sure you want to delete this {table}?
          </span>

          <div className="flex gap-3">
            <Button
              type="button"
              onClick={() => setOpen(false)}
              disabled={loading}
            >
              Cancel
            </Button>

            <Button type="submit" variant="danger" disabled={loading}>
              {loading ? "Deleting..." : "Delete"}
            </Button>
          </div>
        </form>
      );
    }

    return "Create Or Update Form";
  };

  return (
    <div>
      {/* Trigger */}
      <div onClick={() => setOpen(true)} className="cursor-pointer">
        {children}
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-3 sm:px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="
              bg-white rounded-lg relative
              w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
              max-h-[90vh] overflow-y-auto
              p-4 sm:p-5 md:p-6
              shadow-lg
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            {/* Content */}
            <div className="mt-2">{renderContent()}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormModal;
