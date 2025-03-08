"use client";

export const ProjectCard = () => {
  return (
    <article className="flex h-78.5 w-92.5 flex-col">
      <div className="mb-3.5 flex gap-4">
        <h2 className="text-base font-bold text-indigo-500">Project Name</h2>
        <p className="text-sm text-slate-400">{` // short project description`}</p>
      </div>
      <div className="text-light-grey flex h-full w-full flex-col justify-between rounded-2xl bg-slate-950 p-6">
        <div>
          <p>lorem ipsum dolor sit</p>
        </div>
        <button className="w-fit rounded-lg bg-slate-600 px-3.5 py-2.5 text-gray-50" type="button">
          view-project
        </button>
      </div>
    </article>
  );
};
