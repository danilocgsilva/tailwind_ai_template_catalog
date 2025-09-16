# Chatgpt prompt

## Question: 

Create a nice Tailwind template, with a central area to upload files, a top message saying that that's no database connection setted, and a left sidebar listing databases connections. Considers responsiveness to the sidebar.

## Answer

Here’s a clean **Tailwind CSS template** that matches your request.

* A **top warning message** ("No database connection set").
* A **left sidebar** with database connections, collapsible on smaller screens.
* A **central area** for file upload with drag-and-drop style.
* Responsive layout.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Database Connection UI</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="h-screen flex flex-col bg-gray-50">

  <!-- Top Warning -->
  <div class="bg-red-100 border-b border-red-300 text-red-800 px-4 py-2 text-center text-sm font-medium">
    ⚠️ No database connection set
  </div>

  <div class="flex flex-1 overflow-hidden">

    <!-- Sidebar -->
    <aside class="hidden md:flex md:flex-col w-64 bg-white border-r border-gray-200 shadow-sm">
      <div class="p-4 border-b font-semibold text-gray-700">Database Connections</div>
      <nav class="flex-1 overflow-y-auto">
        <ul class="space-y-1 p-2 text-sm">
          <li><a href="#" class="block px-3 py-2 rounded hover:bg-gray-100">Postgres - Local</a></li>
          <li><a href="#" class="block px-3 py-2 rounded hover:bg-gray-100">MySQL - Dev</a></li>
          <li><a href="#" class="block px-3 py-2 rounded hover:bg-gray-100">SQLite - Test</a></li>
        </ul>
      </nav>
    </aside>

    <!-- Mobile Sidebar -->
    <div class="md:hidden border-r border-gray-200 bg-white w-16 flex flex-col items-center py-4 space-y-4">
      <button class="w-10 h-10 rounded bg-gray-100 flex items-center justify-center hover:bg-gray-200">☰</button>
    </div>

    <!-- Main Content -->
    <main class="flex-1 flex items-center justify-center p-6">
      <div class="w-full max-w-lg">
        <!-- File Upload Box -->
        <label class="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-10 cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition">
          <svg class="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M7 16V4a2 2 0 012-2h6a2 2 0 012 2v12m4 0h-4m-4 4h4m-4 0v-4m0 4H7m0 0H3"/>
          </svg>
          <span class="text-gray-600">Click to upload or drag & drop</span>
          <input type="file" class="hidden" />
        </label>
      </div>
    </main>

  </div>
</body>
</html>
```

✨ Features:

* **Desktop** → sidebar fixed on the left.
* **Mobile** → collapses to a narrow bar with a ☰ button (you could expand it with JS).
* **Upload area** → styled with dashed border and hover effect.

Would you like me to also add a **working collapsible sidebar toggle** (with Tailwind + a bit of JS/Alpine) so it fully opens/closes on mobile?

## Question 2:

Yes. Put also a button in the sidebar to add a new database connection.

## Answer:

Perfect 👌 I’ll extend the template:

* Add a **button in the sidebar** (`+ Add Connection`).
* Add a **working collapsible sidebar toggle** for mobile using **Alpine.js** (lightweight, works well with Tailwind).

Here’s the improved code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Database Connection UI</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/alpinejs" defer></script>
</head>
<body class="h-screen flex flex-col bg-gray-50" x-data="{ sidebarOpen: false }">

  <!-- Top Warning -->
  <div class="bg-red-100 border-b border-red-300 text-red-800 px-4 py-2 text-center text-sm font-medium">
    ⚠️ No database connection set
  </div>

  <div class="flex flex-1 overflow-hidden">

    <!-- Desktop Sidebar -->
    <aside class="hidden md:flex md:flex-col w-64 bg-white border-r border-gray-200 shadow-sm">
      <div class="p-4 border-b font-semibold text-gray-700">Database Connections</div>
      <nav class="flex-1 overflow-y-auto">
        <ul class="space-y-1 p-2 text-sm">
          <li><a href="#" class="block px-3 py-2 rounded hover:bg-gray-100">Postgres - Local</a></li>
          <li><a href="#" class="block px-3 py-2 rounded hover:bg-gray-100">MySQL - Dev</a></li>
          <li><a href="#" class="block px-3 py-2 rounded hover:bg-gray-100">SQLite - Test</a></li>
        </ul>
      </nav>
      <div class="p-4 border-t">
        <button class="w-full bg-blue-600 text-white text-sm font-medium py-2 px-3 rounded-lg hover:bg-blue-700 transition">
          + Add Connection
        </button>
      </div>
    </aside>

    <!-- Mobile Sidebar Button -->
    <div class="md:hidden border-r border-gray-200 bg-white w-16 flex flex-col items-center py-4 space-y-4">
      <button @click="sidebarOpen = true"
              class="w-10 h-10 rounded bg-gray-100 flex items-center justify-center hover:bg-gray-200">
        ☰
      </button>
    </div>

    <!-- Mobile Sidebar (Slide-in) -->
    <div x-show="sidebarOpen" x-transition
         class="fixed inset-0 z-40 flex md:hidden">
      <!-- Overlay -->
      <div @click="sidebarOpen = false" class="fixed inset-0 bg-black/30"></div>

      <!-- Sidebar -->
      <aside class="relative flex flex-col w-64 bg-white border-r border-gray-200 shadow-lg">
        <div class="flex items-center justify-between p-4 border-b">
          <span class="font-semibold text-gray-700">Database Connections</span>
          <button @click="sidebarOpen = false" class="text-gray-500 hover:text-gray-700">✕</button>
        </div>
        <nav class="flex-1 overflow-y-auto">
          <ul class="space-y-1 p-2 text-sm">
            <li><a href="#" class="block px-3 py-2 rounded hover:bg-gray-100">Postgres - Local</a></li>
            <li><a href="#" class="block px-3 py-2 rounded hover:bg-gray-100">MySQL - Dev</a></li>
            <li><a href="#" class="block px-3 py-2 rounded hover:bg-gray-100">SQLite - Test</a></li>
          </ul>
        </nav>
        <div class="p-4 border-t">
          <button class="w-full bg-blue-600 text-white text-sm font-medium py-2 px-3 rounded-lg hover:bg-blue-700 transition">
            + Add Connection
          </button>
        </div>
      </aside>
    </div>

    <!-- Main Content -->
    <main class="flex-1 flex items-center justify-center p-6">
      <div class="w-full max-w-lg">
        <!-- File Upload Box -->
        <label class="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-10 cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition">
          <svg class="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M7 16V4a2 2 0 012-2h6a2 2 0 012 2v12m4 0h-4m-4 4h4m-4 0v-4m0 4H7m0 0H3"/>
          </svg>
          <span class="text-gray-600">Click to upload or drag & drop</span>
          <input type="file" class="hidden" />
        </label>
      </div>
    </main>

  </div>
</body>
</html>
```

✅ What’s new:

* Mobile **☰ button** opens sidebar.
* Sidebar **slides in/out** on mobile with overlay.
* **Add Connection button** at bottom of sidebar.

Do you also want the **“Add Connection” button** to open a modal form (still styled with Tailwind) where the user can input database connection details?


---

Prompt done to ChatGPT, at 16/09/2025
