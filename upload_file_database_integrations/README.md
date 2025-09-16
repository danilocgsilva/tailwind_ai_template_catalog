# Upload files with db integration

An interface to upload file. And interacts to the database.

* A nice central area for managing upload.
* A message on top to tell there's no database connection.
* A left sidebar, listing the database connections.
* Responsiveness consideration to the sidebar

## Thougths

There's a winner in this request: **ChatGPT**

In the first prompt both models seemed to have issues.

The Deepseek version initially provided comprehensive code to handle responsiveness; however, there was a problem: once the sidebar was set to be hidden in the mobile layout, it could no longer be shown.

The ChatGPT version, at it's initial iteration, didn't provide the complete code because it ignored the JavaScript interaction. But, after beign prompted again, the version became fully functional.

Although the Deepseek launch promised quivalent performance compared to ChatGPT with a greater optimization, this wasn't true, at least in September 2025. It appears that Deepseek works well with simple prompts, and in those terms, the quality between ChatGPT and Deepseek isn't noticebly different. However, for more specialized prompts, ChatGPT was clearly superior to Deepseek.

Deepseek initially impressed with its attempt to provide a comprehensive answer – it even included the JavaScript code to interact with the responsive menu, which ChatGPT didn't.  However, the results were poor due to a significant issue in the mobile template’s sidebar. 

Conversely, ChatGPT opted for a more concise response, without providing the necessary JavaScript. Perhaps this was an early optimization strategy. Nevertheless, it anticipated a future user need and, when prompted again, produced a fully functional answer without issues.

As an added note, I should mention that ChatGPT generated answers faster than Deepseek did. 
