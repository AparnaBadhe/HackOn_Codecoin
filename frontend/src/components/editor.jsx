import { useState } from "react";

export default function CodeEditor() {
  const [html, setHtml] = useState("<h1>Hello World</h1>");
  const [css, setCss] = useState("h1 { color: red; }");
  const [js, setJs] = useState("console.log('Hello World');");

  const srcDoc = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}<\/script>
      </body>
    </html>
  `;

  return (
    <div className="flex h-screen">
      {/* Code Input Section */}
      <div className="w-1/2 p-4 bg-gray-100 flex flex-col gap-4">
        <textarea
          className="w-full h-1/3 p-2 border rounded"
          placeholder="HTML"
          value={html}
          onChange={(e) => setHtml(e.target.value)}
        />
        <textarea
          className="w-full h-1/3 p-2 border rounded"
          placeholder="CSS"
          value={css}
          onChange={(e) => setCss(e.target.value)}
        />
        <textarea
          className="w-full h-1/3 p-2 border rounded"
          placeholder="JavaScript"
          value={js}
          onChange={(e) => setJs(e.target.value)}
        />
      </div>

      {/* Preview Section */}
      <div className="w-1/2 p-4 bg-white border-l">
        <iframe
          title="preview"
          className="w-full h-full border"
          srcDoc={srcDoc}
        />
      </div>
    </div>
  );
}
