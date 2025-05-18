import { useState } from "react";
import {
  CheckCircle,
  Clock,
  Calendar,
  PieChart,
  List,
  Plus,
  Menu,
  X,
  Tag,
  Circle,
  CheckCheck,
  BarChart2,
  Clock3,
} from "lucide-react";

// Main Dashboard Component
export default function DomeRight() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  // Sample data for visualization
  const tasks = [
    {
      id: 1,
      title: "Update project documentation",
      note: "Add implementation details for new features",
      priority: "High",
      dueDate: "2025-05-20",
      completed: false,
      tags: ["Work", "Documentation"],
      semanticLabel: "Work",
    },
    {
      id: 2,
      title: "Weekly team meeting",
      note: "Discuss sprint progress and roadblocks",
      priority: "Medium",
      dueDate: "2025-05-19",
      completed: false,
      tags: ["Work", "Meeting"],
      semanticLabel: "Work",
    },
    {
      id: 3,
      title: "Grocery shopping",
      note: "Buy vegetables, fruits, and milk",
      priority: "Medium",
      dueDate: "2025-05-18",
      completed: true,
      tags: ["Personal", "Errands"],
      semanticLabel: "Personal",
    },
    {
      id: 4,
      title: "Morning workout",
      note: "30 min cardio and strength training",
      priority: "Low",
      dueDate: "2025-05-19",
      completed: false,
      tags: ["Health", "Exercise"],
      semanticLabel: "Health",
    },
    {
      id: 5,
      title: "Read React documentation",
      note: "Focus on new hooks and state management",
      priority: "Medium",
      dueDate: "2025-05-21",
      completed: false,
      tags: ["Work", "Learning"],
      semanticLabel: "Work",
    },
  ];

  // Handler for selecting a task
  const handleSelectTask = (task) => {
    setSelectedTask(task);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <header className="bg-indigo-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <CheckCircle className="mr-2" />
            <h1 className="text-xl font-bold">DoneRight</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="px-3 py-2 rounded hover:bg-indigo-700 transition-colors"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded hover:bg-indigo-700 transition-colors"
            >
              Reports
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded hover:bg-indigo-700 transition-colors"
            >
              Settings
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded bg-indigo-800 hover:bg-indigo-900 transition-colors"
            >
              Logout
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMobileMenu}>
            {showMobileMenu ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden bg-indigo-700 px-4 py-2">
            <nav className="flex flex-col space-y-2">
              <a
                href="#"
                className="px-3 py-2 rounded hover:bg-indigo-800 transition-colors"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded hover:bg-indigo-800 transition-colors"
              >
                Reports
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded hover:bg-indigo-800 transition-colors"
              >
                Settings
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded bg-indigo-800 hover:bg-indigo-900 transition-colors"
              >
                Logout
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 bg-white border-r border-gray-200 p-4">
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Categories
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center text-indigo-600 font-medium">
                <Circle className="h-4 w-4 text-blue-500 mr-2" />
                <span>All Tasks</span>
              </li>
              <li className="flex items-center text-gray-600 hover:text-indigo-600">
                <Circle className="h-4 w-4 text-red-500 mr-2" />
                <span>Work</span>
              </li>
              <li className="flex items-center text-gray-600 hover:text-indigo-600">
                <Circle className="h-4 w-4 text-green-500 mr-2" />
                <span>Personal</span>
              </li>
              <li className="flex items-center text-gray-600 hover:text-indigo-600">
                <Circle className="h-4 w-4 text-purple-500 mr-2" />
                <span>Health</span>
              </li>
              <li className="flex items-center text-gray-600 hover:text-indigo-600">
                <Circle className="h-4 w-4 text-yellow-500 mr-2" />
                <span>Education</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Filters
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 hover:text-indigo-600">
                <CheckCheck className="h-4 w-4 mr-2" />
                <span>Completed</span>
              </li>
              <li className="flex items-center text-gray-600 hover:text-indigo-600">
                <Clock3 className="h-4 w-4 mr-2" />
                <span>Due Today</span>
              </li>
              <li className="flex items-center text-gray-600 hover:text-indigo-600">
                <Tag className="h-4 w-4 mr-2" />
                <span>Priority: High</span>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Dashboard Area */}
        <main className="flex-1 overflow-auto p-4">
          <div className="container mx-auto">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg shadow p-4 flex items-center">
                <div className="rounded-full bg-blue-100 p-3 mr-4">
                  <List className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-gray-500 text-sm">Total Tasks</h3>
                  <p className="text-2xl font-semibold">12</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-4 flex items-center">
                <div className="rounded-full bg-green-100 p-3 mr-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-gray-500 text-sm">Completed</h3>
                  <p className="text-2xl font-semibold">5</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-4 flex items-center">
                <div className="rounded-full bg-red-100 p-3 mr-4">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-gray-500 text-sm">Due Today</h3>
                  <p className="text-2xl font-semibold">3</p>
                </div>
              </div>
            </div>

            {/* Task Management Section */}
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Task List */}
              <div className="lg:w-2/3 bg-white rounded-lg shadow">
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-800">Tasks</h2>
                  <button className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <Plus className="h-4 w-4 mr-1" />
                    Add Task
                  </button>
                </div>

                {/* TaskList Component */}
                <div className="overflow-auto max-h-96">
                  <ul className="divide-y divide-gray-200">
                    {tasks.map((task) => (
                      <li
                        key={task.id}
                        className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                          selectedTask?.id === task.id ? "bg-indigo-50" : ""
                        }`}
                        onClick={() => handleSelectTask(task)}
                      >
                        {/* TaskCard Component */}
                        <div className="flex items-start">
                          <div className="mr-3 mt-1">
                            <input
                              type="checkbox"
                              checked={task.completed}
                              className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              readOnly
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between">
                              <h3
                                className={`text-lg font-medium ${
                                  task.completed
                                    ? "text-gray-400 line-through"
                                    : "text-gray-800"
                                }`}
                              >
                                {task.title}
                              </h3>
                              <span
                                className={`text-sm font-medium rounded-full px-2 py-1 ${
                                  task.priority === "High"
                                    ? "bg-red-100 text-red-800"
                                    : task.priority === "Medium"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-green-100 text-green-800"
                                }`}
                              >
                                {task.priority}
                              </span>
                            </div>
                            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                              {task.note}
                            </p>
                            <div className="flex flex-wrap items-center mt-2 gap-2">
                              <span className="flex items-center text-xs text-gray-500">
                                <Calendar className="h-3 w-3 mr-1" />
                                {task.dueDate}
                              </span>

                              {task.tags.map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                                >
                                  {tag}
                                </span>
                              ))}

                              <span
                                className={`text-xs px-2 py-1 rounded ${
                                  task.semanticLabel === "Work"
                                    ? "bg-blue-100 text-blue-800"
                                    : task.semanticLabel === "Personal"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-purple-100 text-purple-800"
                                }`}
                              >
                                {task.semanticLabel}
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Focus Timer and Insights Panel */}
              <div className="lg:w-1/3 space-y-6">
                {/* Focus Timer Component */}
                <div className="bg-white rounded-lg shadow p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Focus Timer
                  </h2>

                  {selectedTask ? (
                    <div>
                      <div className="mb-4">
                        <h3 className="font-medium text-gray-800">
                          {selectedTask.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {selectedTask.note}
                        </p>
                      </div>

                      <div className="text-center py-6">
                        <div className="text-5xl font-bold text-indigo-600 mb-4">
                          25:00
                        </div>
                        <div className="flex justify-center space-x-3">
                          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors">
                            Start
                          </button>
                          <button className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-2 rounded-lg transition-colors">
                            Reset
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-10 text-gray-500">
                      <Clock className="h-12 w-12 mx-auto mb-3 opacity-50" />
                      <p>Select a task to start focus timer</p>
                    </div>
                  )}
                </div>

                {/* Insights Panel Component */}
                <div className="bg-white rounded-lg shadow p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Insights
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-600 mb-2">
                        Productivity Score
                      </h3>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full w-4/5"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span>80%</span>
                        <span>100%</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-600 mb-2">
                        Tasks by Category
                      </h3>
                      <div className="flex justify-around text-center">
                        <div>
                          <div className="inline-block w-12 h-12 rounded-full border-4 border-blue-500 border-r-transparent rotate-45"></div>
                          <p className="text-xs text-gray-600 mt-1">
                            Work (60%)
                          </p>
                        </div>
                        <div>
                          <div className="inline-block w-12 h-12 rounded-full border-4 border-green-500 border-r-transparent border-t-transparent rotate-45"></div>
                          <p className="text-xs text-gray-600 mt-1">
                            Personal (25%)
                          </p>
                        </div>
                        <div>
                          <div className="inline-block w-12 h-12 rounded-full border-4 border-purple-500 border-r-transparent border-t-transparent border-l-transparent rotate-45"></div>
                          <p className="text-xs text-gray-600 mt-1">
                            Health (15%)
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-600 mb-2">
                        Weekly Progress
                      </h3>
                      <div className="flex items-end h-24 gap-1">
                        <div className="flex-1 bg-indigo-200 h-1/4"></div>
                        <div className="flex-1 bg-indigo-300 h-2/4"></div>
                        <div className="flex-1 bg-indigo-400 h-1/3"></div>
                        <div className="flex-1 bg-indigo-500 h-3/4"></div>
                        <div className="flex-1 bg-indigo-600 h-1/2"></div>
                        <div className="flex-1 bg-indigo-400 h-2/3"></div>
                        <div className="flex-1 bg-indigo-300 h-1/4"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>M</span>
                        <span>T</span>
                        <span>W</span>
                        <span>T</span>
                        <span>F</span>
                        <span>S</span>
                        <span>S</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
