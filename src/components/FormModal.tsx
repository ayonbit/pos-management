"use client";

import { FormModalProps } from "@/types/FormModal.type";
import { AnimatePresence, easeIn, easeOut, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

import dynamic from "next/dynamic";
import Button from "./ui/Button";

interface Props extends FormModalProps {
  children: ReactNode;
}
const AccountListForm = dynamic(
  () => import("./forms/GeneralAccounts/AccountListForm"),
  {
    loading: () => <p>Loading...</p>,
  },
);
const CustomerCategoryForm = dynamic(
  () => import("./forms/CustomerCategoryForm"),
  {
    loading: () => <p>Loading...</p>,
  },
);
const ProductBrandFrom = dynamic(
  () => import("./forms/Product/ProductBrandForm"),
  {
    loading: () => <p>Loading...</p>,
  },
);

const ProductGradeForm = dynamic(
  () => import("./forms/Product/ProductGradeForm"),
  {
    loading: () => <p>Loading...</p>,
  },
);

const forms: {
  [key: string]: (
    type: "create" | "update",
    data?: any,
    onClose?: () => void,
  ) => React.ReactNode;
} = {
  accountList: (type, data, onClose) => (
    <AccountListForm type={type} data={data} onClose={onClose} />
  ),

  customerCategory: (type, data, onClose) => (
    <CustomerCategoryForm type={type} data={data} onClose={onClose} />
  ),

  productBrand: (type, data, onClose) => (
    <ProductBrandFrom type={type} data={data} onClose={onClose} />
  ),

  productGrade: (type, data, onClose) => (
    <ProductGradeForm type={type} data={data} onClose={onClose} />
  ),
};

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modal = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: easeOut,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.2,
      ease: easeIn,
    },
  },
};

const FormModal = ({ table, type, data, id, children }: Props) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Deleting:", id);
      setOpen(false);
    } catch (error) {
      console.error("Delete failed", error);
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    if (type === "delete" && id) {
      return (
        <form
          onSubmit={handleDelete}
          className="flex flex-col gap-4 items-center"
        >
          <span className="text-center font-medium text-gray-600">
            Are you sure you want to delete this {table}?
          </span>

          <Button type="submit" variant="danger" disabled={loading}>
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </form>
      );
    }

    if ((type === "create" || type === "update") && forms[table]) {
      return forms[table](type, data, () => setOpen(false));
    }

    return <p className="text-sm text-gray-500">Form not found</p>;
  };

  return (
    <div>
      {/* Trigger */}
      <div onClick={() => setOpen(true)} className="cursor-pointer">
        {children}
      </div>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-4">
            {/* Backdrop */}
            <motion.div
              variants={backdrop}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 bg-black/50"
              onClick={() => setOpen(false)}
            />

            {/* Modal */}
            <motion.div
              variants={modal}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="
                relative bg-white rounded-lg shadow-lg
                w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
                max-h-[90vh] overflow-y-auto
                p-4 sm:p-5 md:p-6
              "
            >
              {/* Close button */}
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>

              <div className="mt-2">{renderContent()}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FormModal;
