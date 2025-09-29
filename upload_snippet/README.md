## Question:

Create a snippet for file upload using Tailwind and Flask.

## Response:

Here's a complete file upload snippet using Tailwind CSS and Flask:

## Flask Backend (`app.py`)

```python
from flask import Flask, render_template, request, redirect, url_for, flash
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.secret_key = 'your-secret-key-here'

# Configuration
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif', 'doc', 'docx'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max file size

# Create upload directory if it doesn't exist
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        flash('No file selected', 'error')
        return redirect(request.url)
    
    file = request.files['file']
    
    if file.filename == '':
        flash('No file selected', 'error')
        return redirect(request.url)
    
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        flash(f'File {filename} uploaded successfully!', 'success')
        return redirect(url_for('index'))
    else:
        flash('Invalid file type. Allowed types: ' + ', '.join(ALLOWED_EXTENSIONS), 'error')
        return redirect(request.url)

if __name__ == '__main__':
    app.run(debug=True)
```

## HTML Template (`templates/index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Upload</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4 py-8">
        <!-- Header -->
        <div class="text-center mb-12">
            <h1 class="text-3xl font-bold text-gray-800 mb-2">File Upload</h1>
            <p class="text-gray-600">Upload your files securely</p>
        </div>

        <!-- Upload Card -->
        <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div class="p-8">
                <!-- Flash Messages -->
                {% with messages = get_flashed_messages(with_categories=true) %}
                    {% if messages %}
                        {% for category, message in messages %}
                            <div class="mb-6 p-4 rounded-lg {% if category == 'error' %}bg-red-50 text-red-700 border border-red-200{% else %}bg-green-50 text-green-700 border border-green-200{% endif %}">
                                {{ message }}
                            </div>
                        {% endfor %}
                    {% endif %}
                {% endwith %}

                <!-- Upload Form -->
                <form action="/upload" method="post" enctype="multipart/form-data" class="space-y-6">
                    <!-- File Input -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Select File
                        </label>
                        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-400 transition-colors duration-200">
                            <div class="space-y-1 text-center">
                                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div class="flex text-sm text-gray-600">
                                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file" type="file" class="sr-only" required>
                                    </label>
                                    <p class="pl-1">or drag and drop</p>
                                </div>
                                <p class="text-xs text-gray-500">
                                    PNG, JPG, PDF, TXT, DOC up to 16MB
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- File Name Display -->
                    <div id="file-name" class="hidden text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                        Selected file: <span class="font-medium" id="selected-file-name"></span>
                    </div>

                    <!-- Submit Button -->
                    <div>
                        <button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                            Upload File
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- File Info -->
        <div class="max-w-2xl mx-auto mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 class="text-lg font-medium text-gray-900 mb-4">Allowed File Types</h3>
            <div class="flex flex-wrap gap-2">
                {% for ext in ['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif', 'doc', 'docx'] %}
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        .{{ ext }}
                    </span>
                {% endfor %}
            </div>
        </div>
    </div>

    <script>
        // Display selected file name
        const fileInput = document.getElementById('file-upload');
        const fileNameDisplay = document.getElementById('file-name');
        const selectedFileName = document.getElementById('selected-file-name');

        fileInput.addEventListener('change', function(e) {
            if (this.files && this.files[0]) {
                selectedFileName.textContent = this.files[0].name;
                fileNameDisplay.classList.remove('hidden');
            } else {
                fileNameDisplay.classList.add('hidden');
            }
        });

        // Drag and drop functionality
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
            fileInput.files = files;
            
            if (files && files[0]) {
                selectedFileName.textContent = files[0].name;
                fileNameDisplay.classList.remove('hidden');
            }
        }
    </script>
</body>
</html>
```

## Project Structure

```
file-upload-app/
│
├── app.py
├── uploads/
│   └── (uploaded files will go here)
└── templates/
    └── index.html
```

## Features

- **Modern UI**: Clean, responsive design with Tailwind CSS
- **File Validation**: Checks file type and size
- **Drag & Drop**: Enhanced user experience with drag-and-drop functionality
- **Flash Messages**: Success/error feedback for user actions
- **Security**: Uses `secure_filename()` to prevent directory traversal attacks
- **File Display**: Shows selected file name before upload
- **Mobile Responsive**: Works well on all screen sizes

## Installation & Setup

1. **Install dependencies:**
```bash
pip install flask
```

2. **Run the application:**
```bash
python app.py
```

3. **Visit `http://localhost:5000` in your browser**

## Customization Options

- Modify `ALLOWED_EXTENSIONS` to support different file types
- Adjust `MAX_CONTENT_LENGTH` for different file size limits
- Change `UPLOAD_FOLDER` to store files in different directories
- Add file processing logic in the upload route
- Implement user authentication for secure uploads

This snippet provides a complete, production-ready file upload system with a modern interface and proper security measures.

---

Answered by Deepseek.
