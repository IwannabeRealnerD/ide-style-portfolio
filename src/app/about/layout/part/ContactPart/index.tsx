import { CONTACT_INFO } from "./constant";

export const ContactPart = () => {
  return (
    <div className="flex flex-col gap-2.5 px-4.5 py-3.5">
      {CONTACT_INFO.map((contact) => (
        <a key={contact.label} className="text-grey flex items-center gap-2 text-sm" href={contact.link}>
          <contact.icon className="size-4.75 shrink-0" />
          <p className="text-xs">{contact.label}</p>
        </a>
      ))}
    </div>
  );
};
