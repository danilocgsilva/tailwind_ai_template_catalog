# Listing

## Q: Create a nicee Tailwind css template with a list.

Here’s a clean **Tailwind CSS list template** with a modern card-like design and hover effects:

```html
<div class="min-h-screen bg-gray-100 p-6">
  <div class="max-w-3xl mx-auto">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">My Task List</h2>
    
    <ul class="space-y-4">
      <!-- List Item -->
      <li class="bg-white shadow-md rounded-2xl p-4 flex items-center justify-between hover:shadow-lg transition">
        <div>
          <h3 class="text-lg font-semibold text-gray-700">Finish project report</h3>
          <p class="text-sm text-gray-500">Due tomorrow at 5 PM</p>
        </div>
        <span class="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full">Completed</span>
      </li>

      <!-- List Item -->
      <li class="bg-white shadow-md rounded-2xl p-4 flex items-center justify-between hover:shadow-lg transition">
        <div>
          <h3 class="text-lg font-semibold text-gray-700">Prepare presentation slides</h3>
          <p class="text-sm text-gray-500">Due next Monday</p>
        </div>
        <span class="px-3 py-1 text-sm bg-yellow-100 text-yellow-600 rounded-full">In Progress</span>
      </li>

      <!-- List Item -->
      <li class="bg-white shadow-md rounded-2xl p-4 flex items-center justify-between hover:shadow-lg transition">
        <div>
          <h3 class="text-lg font-semibold text-gray-700">Reply to client emails</h3>
          <p class="text-sm text-gray-500">Due today</p>
        </div>
        <span class="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-full">Pending</span>
      </li>
    </ul>
  </div>
</div>
```

✨ Features:

* Clean **card-style list items** with shadow and hover effects.
* Status badges (`Completed`, `In Progress`, `Pending`) styled with colors.
* Responsive, centered container with spacing.

Do you want me to make this list more like a **CRUD listing with buttons (Edit/Delete)** or keep it simple as a **task list**?

## Q: Give me the whole html.

Got it 👍 — here’s the **full HTML template** with TailwindCSS and your nice list included.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind List Template</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center p-6">

  <div class="w-full max-w-3xl">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">My Task List</h2>
    
    <ul class="space-y-4">
      <!-- List Item -->
      <li class="bg-white shadow-md rounded-2xl p-4 flex items-center justify-between hover:shadow-lg transition">
        <div>
          <h3 class="text-lg font-semibold text-gray-700">Finish project report</h3>
          <p class="text-sm text-gray-500">Due tomorrow at 5 PM</p>
        </div>
        <span class="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full">Completed</span>
      </li>

      <!-- List Item -->
      <li class="bg-white shadow-md rounded-2xl p-4 flex items-center justify-between hover:shadow-lg transition">
        <div>
          <h3 class="text-lg font-semibold text-gray-700">Prepare presentation slides</h3>
          <p class="text-sm text-gray-500">Due next Monday</p>
        </div>
        <span class="px-3 py-1 text-sm bg-yellow-100 text-yellow-600 rounded-full">In Progress</span>
      </li>

      <!-- List Item -->
      <li class="bg-white shadow-md rounded-2xl p-4 flex items-center justify-between hover:shadow-lg transition">
        <div>
          <h3 class="text-lg font-semibold text-gray-700">Reply to client emails</h3>
          <p class="text-sm text-gray-500">Due today</p>
        </div>
        <span class="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-full">Pending</span>
      </li>
    </ul>
  </div>

</body>
</html>
```

This is ready to copy-paste and open in your browser 🚀.

Do you want me to also add **action buttons** (like ✅ Complete, ✏️ Edit, 🗑 Delete) to each list item so it feels like a CRUD list?

---

Chat with ChatGPT.
