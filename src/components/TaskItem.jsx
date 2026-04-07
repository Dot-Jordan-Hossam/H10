import React from "react";
import { useState } from "react";

const TaskItem = ({ task, onDelete, handleCheck }) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleCheckClick() {
    handleCheck(task.id);
  }
  return (
    <div className="bg-[#252f88] flex justify-between items-center p-4 hover:py-6  transition-all duration-300 ease-in-out mb-4 hover:shadow-[0px_7px_7px_rgba(0,0,0,0.4)]">
      <div className="space-x-3">
        <button
          className="bg-white p-1 rounded-2xl border-red-600 border-2 border-solid cursor-pointer hover:bg-[#c5c5c5] hover:shadow-[0px_7px_7px_rgba(0,0,0,0.4)]"
          onClick={() => setIsOpen(true)}
        >
          <i className="fa-solid fa-trash text-red-600"></i>
        </button>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-sm w-96 shadow-lg">
              <h3 className="text-md font-bold mb-4 text-black">
                هل انت متأكد من رغبتك في حذف هذه المهمة؟
              </h3>
              <p className="mb-4 text-sm">
                لا يمكنك التراجع عن حذف هذه المهمة في حال اختيار زر:(حذف)
              </p>

              <div className="flex justify-start gap-2 mt-2">
                <button
                  onClick={() => {
                    onDelete(task.id);
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 text-red-700 cursor-pointer"
                >
                  نعم قم بالحذف
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-red-700 cursor-pointer"
                >
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        )}

        <button className="bg-white rounded-2xl border-2 border-blue-300 p-1 border-solid cursor-pointer hover:bg-[#c5c5c5] hover:shadow-[0px_7px_7px_rgba(0,0,0,0.4)]">
          <i className="fa-solid fa-pen text-blue-300"></i>
        </button>
        <button
          onClick={() => {
            handleCheckClick();
          }}
          className={`${task.completed ? "bg-green-400" : "bg-white"} rounded-2xl border-green-400 p-1 border-solid cursor-pointer hover:bg-[#c5c5c5] hover:shadow-[0px_7px_7px_rgba(0,0,0,0.4)]`}
        >
          <i
            className={`fa-solid fa-check ${task.completed ? "text-white" : "text-green-400"} `}
          ></i>
        </button>
      </div>
      <p className="text-white">{task.name}</p>
    </div>
  );
};

export default TaskItem;
