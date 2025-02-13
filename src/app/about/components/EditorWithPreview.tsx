"use client";

import { FunctionComponent, useRef, useState } from "react";

import Editor, { Monaco } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import ReactMarkdown from "react-markdown";

import { GLOBAL_COLORS } from "@/constants/colors";
import { useGlobalDebounce } from "@/hooks/useDebounce";

type EditorRefType = editor.IStandaloneCodeEditor;

interface EditorWithPreviewProps {
  initialContent: string;
}

export const EditorWithPreview: FunctionComponent<EditorWithPreviewProps> = (props) => {
  const [editorContent, setEditorContent] = useState<string | null>(null);
  const editorRef = useRef<EditorRefType | null>(null);

  const handleEditorDidMount = (editorInstance: EditorRefType, monaco: Monaco) => {
    monaco.editor.defineTheme("vs-dark", {
      base: "vs-dark",
      colors: {
        "editor.background": GLOBAL_COLORS.DEEP_NAVY,
      },
      inherit: true,
      rules: [],
    });
    editorRef.current = editorInstance;
    setEditorContent(editorInstance.getValue());
  };

  const throttledSetEditorContent = useGlobalDebounce((value: string) => {
    setEditorContent(value);
  }, 500);
  const onEditorChange = (value: string | undefined) => {
    throttledSetEditorContent(value ?? "");
  };

  return (
    <div className="flex h-full w-full overflow-hidden">
      <div className="border-line w-1/2 border-r pt-4">
        <Editor
          defaultValue={props.initialContent}
          height="100%"
          language="markdown"
          options={{
            contextmenu: true,
            cursorSmoothCaretAnimation: "on",
            formatOnPaste: true,
            formatOnType: true,
            minimap: { enabled: true },
            overviewRulerBorder: false,
            scrollbar: {
              handleMouseWheel: true,
            },
          }}
          theme="vs-dark"
          onChange={onEditorChange}
          onMount={handleEditorDidMount}
        />
      </div>
      <div className="markdown w-1/2 overflow-scroll">
        <ReactMarkdown>{editorContent}</ReactMarkdown>
      </div>
    </div>
  );
};
