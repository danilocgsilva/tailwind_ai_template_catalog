import React, { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Usage: drop this file into a React project that has Tailwind configured.
// Requires: lucide-react, framer-motion (optional — fallback to plain removal if absent)

export default function RemovableList() {
  const [items, setItems] = useState([
    { id: 1, text: "Learn Tailwind" },
    { id: 2, text: "Build a small app" },
    { id: 3, text: "Write tests" },
    { id: 4, text: "Deploy to Prod" },
  ]);

  const remove = (id) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const addItem = () => {
    const nextId = items.length ? Math.max(...items.map((i) => i.id)) + 1 : 1;
    setItems((prev) => [...prev, { id: nextId, text: `New Item ${nextId}` }]);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-start justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-2xl p-6">
        <header className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-semibold text-slate-800">Things to do</h1>
            <p className="text-sm text-slate-500">Click the X on the right to delete an entry.</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={addItem}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-sm text-slate-700 shadow-sm"
            >
              + Add
            </button>
          </div>
        </header>

        <section>
          <ul className="divide-y divide-slate-100 rounded-lg border border-slate-100 overflow-hidden">
            <AnimatePresence initial={false}>
              {items.map((item) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="flex items-center justify-between px-4 py-3 bg-white hover:bg-slate-50"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block" aria-hidden />
                    <span className="text-slate-700">{item.text}</span>
                  </div>

                  <div className="flex items-center">
                    <button
                      onClick={() => remove(item.id)}
                      aria-label={`Delete ${item.text}`}
                      title={`Delete ${item.text}`}
                      className="group inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-200"
                    >
                      <X className="h-4 w-4 text-slate-400 group-hover:text-red-600" />
                    </button>
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>

            {items.length === 0 && (
              <li className="px-6 py-8 text-center text-slate-500">
                No items — you're all caught up! 🎉
              </li>
            )}
          </ul>
        </section>

        <footer className="mt-4 text-xs text-slate-500">Tip: Use keyboard to focus the X button and press Enter/Space to remove an item.</footer>
      </div>
    </div>
  );
}
