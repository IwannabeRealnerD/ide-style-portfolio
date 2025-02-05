"use client";

import { FunctionComponent } from "react";

import { EditorWithPreview } from "../../components/EditorWithPreview";

import AboutMarkdown from "./education.md";

const AboutPersonalInfoEducationPage: FunctionComponent = () => {
  return <EditorWithPreview initialContent={AboutMarkdown} />;
};

export default AboutPersonalInfoEducationPage;
