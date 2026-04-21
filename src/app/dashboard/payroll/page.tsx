"use client";

import Card from "@/components/ui/Card";
import { ChangeEvent, useState } from "react";
import { FaEdit, FaHourglassEnd, FaSave, FaTimes } from "react-icons/fa";
import { RiUserSettingsFill } from "react-icons/ri";

const PayrollSetup = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTime, setWorkingTime] = useState({
    startTime: "09:00 AM",
    endTime: "06:00 PM",
    workingHours: "8",
  });

  const [breakTime, setBreakTime] = useState({
    breakStart: "01:00 PM",
    breakEnd: "02:00 PM",
    breakDuration: "1",
  });

  const [overtimeSettings, setOvertimeSettings] = useState({
    overtimeRate: "1.5",
    maxOvertime: "40",
  });

  const handleWorkingTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWorkingTime({
      ...workingTime,
      [e.target.name]: e.target.value,
    });
  };

  const handleBreakTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBreakTime({
      ...breakTime,
      [e.target.name]: e.target.value,
    });
  };

  const handleOvertimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOvertimeSettings({
      ...overtimeSettings,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Saved:", { workingTime, breakTime, overtimeSettings });
  };

  return (
    <Card>
      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
            <RiUserSettingsFill size={22} className="text-primary shrink-0" />
            <h1 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
              Payroll Settings
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition text-sm sm:text-base"
              >
                <FaEdit size={16} />
                Edit Settings
              </button>
            ) : (
              <>
                <button
                  onClick={handleSave}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm sm:text-base"
                >
                  <FaSave size={16} />
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition text-sm sm:text-base"
                >
                  <FaTimes size={16} />
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>

        {/* Working Time Section */}
        <div className="bg-gray-50 rounded-lg p-4 sm:p-5 mb-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <FaHourglassEnd size={20} className="text-primary shrink-0" />
            <h2 className="text-base sm:text-lg font-semibold text-gray-700">
              Working Time Configuration
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Time
              </label>
              <input
                type="text"
                name="startTime"
                value={workingTime.startTime}
                onChange={handleWorkingTimeChange}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm ${
                  !isEditing ? "bg-gray-100 text-gray-600" : "bg-white"
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End Time
              </label>
              <input
                type="text"
                name="endTime"
                value={workingTime.endTime}
                onChange={handleWorkingTimeChange}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm ${
                  !isEditing ? "bg-gray-100 text-gray-600" : "bg-white"
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Working Hours / Day
              </label>
              <input
                type="text"
                name="workingHours"
                value={workingTime.workingHours}
                onChange={handleWorkingTimeChange}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm ${
                  !isEditing ? "bg-gray-100 text-gray-600" : "bg-white"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Break Time Section */}
        <div className="bg-gray-50 rounded-lg p-4 sm:p-5 mb-6 border border-gray-200">
          <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-4">
            Break Schedule
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Break Start Time
              </label>
              <input
                type="text"
                name="breakStart"
                value={breakTime.breakStart}
                onChange={handleBreakTimeChange}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm ${
                  !isEditing ? "bg-gray-100 text-gray-600" : "bg-white"
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Break End Time
              </label>
              <input
                type="text"
                name="breakEnd"
                value={breakTime.breakEnd}
                onChange={handleBreakTimeChange}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm ${
                  !isEditing ? "bg-gray-100 text-gray-600" : "bg-white"
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Break Duration (Hours)
              </label>
              <input
                type="text"
                name="breakDuration"
                value={breakTime.breakDuration}
                onChange={handleBreakTimeChange}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm ${
                  !isEditing ? "bg-gray-100 text-gray-600" : "bg-white"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Overtime Settings Section */}
        <div className="bg-gray-50 rounded-lg p-4 sm:p-5 mb-6 border border-gray-200">
          <h2 className="text-base sm:text-lg font-semibold text-gray-700 mb-4">
            Overtime Configuration
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Overtime Rate (x Normal Hourly Rate)
              </label>
              <input
                type="text"
                name="overtimeRate"
                value={overtimeSettings.overtimeRate}
                onChange={handleOvertimeChange}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm ${
                  !isEditing ? "bg-gray-100 text-gray-600" : "bg-white"
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Overtime Hours / Month
              </label>
              <input
                type="text"
                name="maxOvertime"
                value={overtimeSettings.maxOvertime}
                onChange={handleOvertimeChange}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm ${
                  !isEditing ? "bg-gray-100 text-gray-600" : "bg-white"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Current Settings Summary (when not editing) */}
        {!isEditing && (
          <div className="bg-SkyLight border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2 text-sm sm:text-base">
              Current Settings Summary
            </h3>
            <div className="text-xs sm:text-sm text-blue-700 space-y-1">
              <p>
                ⏰ Working Hours: {workingTime.startTime} -{" "}
                {workingTime.endTime} ({workingTime.workingHours} hours/day)
              </p>
              <p>
                ☕ Break: {breakTime.breakStart} - {breakTime.breakEnd} (
                {breakTime.breakDuration} hour)
              </p>
              <p>
                ⚡ Overtime: {overtimeSettings.overtimeRate}x rate, Max{" "}
                {overtimeSettings.maxOvertime} hours/month
              </p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default PayrollSetup;
