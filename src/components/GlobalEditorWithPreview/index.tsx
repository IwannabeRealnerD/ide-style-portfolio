"use client";

import { FunctionComponent, useRef, useState } from "react";

import Editor, { Monaco } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import ReactMarkdown from "react-markdown";

import { GLOBAL_COLORS } from "@/constants/colors";
import { useGlobalDebounce } from "@/hooks/useDebounce";

import * as styles from "./style.css";

type EditorRefType = editor.IStandaloneCodeEditor;

interface GlobalEditorWithPreviewProps {
  initialContent: string;
}

export const GlobalEditorWithPreview: FunctionComponent<GlobalEditorWithPreviewProps> = (props) => {
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
    <div className={styles.container}>
      <div className={styles.editorWrapper}>
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
      <div className={styles.previewWrapper}>
        <ReactMarkdown>{editorContent}</ReactMarkdown>
      </div>
    </div>
  );
};
