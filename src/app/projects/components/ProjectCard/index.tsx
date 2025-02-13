"use client";

export const ProjectCard = () => {
  return (
    <article className="flex h-78.5 w-92.5 flex-col">
      <div className="mb-3.5 flex gap-4">
        <h2 className="text-purple text-base font-bold">Projects</h2>
        <p className="text-light-grey text-sm">{` // short project description`}</p>
      </div>
      <div className="bg-dark-blue text-light-grey flex h-full w-full flex-col justify-between rounded-2xl p-6">
        <div>
          <p>lorem ipsum dolor sit</p>
        </div>
        <button className="w-fit rounded-lg bg-[#1C2B3A] px-3.5 py-2.5 text-white" type="button">
          view-project
        </button>
      </div>
    </article>
  );
};
