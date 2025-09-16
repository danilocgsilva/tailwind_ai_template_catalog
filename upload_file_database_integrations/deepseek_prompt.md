# Deepseek prompt

## Question:

Create a nice Tailwind template, with a central area to upload files, a top message saying that that's no database connection setted, and a left sidebar listing databases connections. Considers responsiveness to the sidebar.

## Response

# Database Connection Manager with Tailwind CSS

I'll create a responsive template with a sidebar, file upload area, and notification message using Tailwind CSS.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Database Connection Manager</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="bg-gray-100 min-h-screen">
    <div class="flex flex-col md:flex-row h-screen">
        <!-- Sidebar for database connections -->
        <div class="bg-gray-800 text-white w-full md:w-64 flex-shrink-0 transition-all duration-300">
            <div class="p-4 border-b border-gray-700">
                <h2 class="text-xl font-semibold">Database Connections</h2>
            </div>
            <nav class="p-4">
                <ul class="space-y-2">
                    <li class="flex items-center p-2 rounded hover:bg-gray-700 cursor-pointer">
                        <i class="fas fa-database mr-3 text-blue-400"></i>
                        <span>Primary Database</span>
                    </li>
                    <li class="flex items-center p-2 rounded hover:bg-gray-700 cursor-pointer">
                        <i class="fas fa-database mr-3 text-green-400"></i>
                        <span>Analytics DB</span>
                    </li>
                    <li class="flex items-center p-2 rounded hover:bg-gray-700 cursor-pointer">
                        <i class="fas fa-database mr-3 text-purple-400"></i>
                        <span>Backup Storage</span>
                    </li>
                    <li class="flex items-center p-2 rounded bg-gray-700 cursor-pointer">
                        <i class="fas fa-plus-circle mr-3 text-yellow-400"></i>
                        <span>Add New Connection</span>
                    </li>
                </ul>
            </nav>
            
            <!-- Mobile menu button -->
            <div class="md:hidden p-4 border-t border-gray-700">
                <button id="sidebarToggle" class="w-full bg-gray-700 hover:bg-gray-600 py-2 rounded">
                    <i class="fas fa-bars mr-2"></i> Toggle Menu
                </button>
            </div>
        </div>

        <!-- Main content -->
        <div class="flex-1 flex flex-col overflow-hidden">
            <!-- Top message -->
            <div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
                <div class="flex items-center">
                    <i class="fas fa-exclamation-circle mr-2"></i>
                    <p><strong>Warning:</strong> No database connection is currently set up. Please configure a connection to proceed.</p>
                </div>
            </div>

            <!-- Main content area -->
            <main class="flex-1 overflow-y-auto p-4 md:p-8">
                <div class="max-w-4xl mx-auto">
                    <div class="bg-white rounded-lg shadow-md p-6 md:p-8">
                        <h1 class="text-2xl font-bold text-gray-800 mb-6">Upload Database Files</h1>
                        
                        <!-- File upload area -->
                        <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors duration-300">
                            <i class="fas fa-cloud-upload-alt text-4xl text-blue-500 mb-4"></i>
                            <p class="text-gray-600 mb-4">Drag & drop your database files here or click to browse</p>
                            <input type="file" id="file-upload" class="hidden" multiple>
                            <label for="file-upload" class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded cursor-pointer transition-colors duration-300">
                                Select Files
                            </label>
                            <p class="text-sm text-gray-500 mt-4">Supports: SQL, CSV, JSON files (Max 100MB)</p>
                        </div>
                        
                        <!-- Uploaded files preview (hidden by default) -->
                        <div id="uploaded-files" class="mt-6 hidden">
                            <h2 class="text-lg font-semibold text-gray-700 mb-3">Uploaded Files</h2>
                            <ul class="space-y-2">
                                <!-- Files will be listed here dynamically -->
                            </ul>
                        </div>
                        
                        <!-- Action buttons -->
                        <div class="mt-8 flex flex-col sm:flex-row gap-3">
                            <button class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded flex-1 transition-colors duration-300">
                                <i class="fas fa-upload mr-2"></i> Upload to Database
                            </button>
                            <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded flex-1 transition-colors duration-300">
                                <i class="fas fa-times mr-2"></i> Cancel
                            </button>
                        </div>
                    </div>
                    
                    <!-- Info section -->
                    <div class="mt-6 bg-blue-50 rounded-lg p-4 text-sm text-blue-800">
                        <i class="fas fa-info-circle mr-2"></i>
                        <span>Need help with database connections? Check our <a href="#" class="underline">documentation</a> or <a href="#" class="underline">contact support</a>.</span>
                    </div>
                </div>
            </main>
        </div>
    </div>

    <script>
        // Toggle sidebar on mobile
        document.getElementById('sidebarToggle').addEventListener('click', function() {
            const sidebar = document.querySelector('.bg-gray-800');
            sidebar.classList.toggle('hidden');
            sidebar.classList.toggle('md:block');
        });

        // Handle file upload UI
        const fileUpload = document.getElementById('file-upload');
        const uploadedFiles = document.getElementById('uploaded-files');
        
        fileUpload.addEventListener('change', function() {
            if (this.files.length > 0) {
                uploadedFiles.classList.remove('hidden');
                
                const fileList = uploadedFiles.querySelector('ul');
                fileList.innerHTML = '';
                
                Array.from(this.files).forEach(file => {
                    const listItem = document.createElement('li');
                    listItem.className = 'flex items-center justify-between bg-gray-50 p-3 rounded';
                    
                    listItem.innerHTML = `
                        <div class="flex items-center">
                            <i class="fas fa-file text-gray-500 mr-3"></i>
                            <span class="text-gray-700">${file.name}</span>
                        </div>
                        <span class="text-sm text-gray-500">${(file.size / 1024 / 1024).toFixed(2)} MB</span>
                    `;
                    
                    fileList.appendChild(listItem);
                });
            }
        });

        // Allow drag and drop
        const dropArea = document.querySelector('.border-dashed');
        
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, preventDefaults, false);
        });
        
        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        ['dragenter', 'dragover'].forEach(eventName => {
            dropArea.addEventListener(eventName, highlight, false);
        });
        
        ['dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, unhighlight, false);
        });
        
        function highlight() {
            dropArea.classList.add('border-blue-400', 'bg-blue-50');
        }
        
        function unhighlight() {
            dropArea.classList.remove('border-blue-400', 'bg-blue-50');
        }
        
        dropArea.addEventListener('drop', handleDrop, false);
        
        function handleDrop(e) {
            const dt = e.dataTransfer;
            const files = dt.files;
            fileUpload.files = files;
            
            // Trigger the change event manually
            const event = new Event('change');
            fileUpload.dispatchEvent(event);
        }
    </script>
</body>
</html>
```

## Key Features

1. **Responsive Design**:
   - The sidebar collapses on mobile devices and can be toggled with a button
   - Layout adjusts for different screen sizes

2. **Visual Elements**:
   - Warning message at the top about no database connection
   - Clean file upload area with drag and drop functionality
   - Visual feedback during interactions

3. **Interactive Components**:
   - Database connections list in the sidebar
   - File upload area that shows selected files
   - Responsive buttons for actions

4. **Functionality**:
   - JavaScript for handling file selection and display
   - Drag and drop support for files
   - Mobile sidebar toggle

This template provides a clean, modern interface for managing database connections and file uploads while maintaining full responsiveness across devices.

---

Question done to Deepseek, at 16/09/2025
