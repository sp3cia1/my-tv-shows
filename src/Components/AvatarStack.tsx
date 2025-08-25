import { useState } from "react";

type AvatarStackProps = {
  data: {
    key: number;
    name: string;
    href: string;
    src: string;
  }[];
  max?: number;
}

export const AvatarStack = ({data, max}: AvatarStackProps) => {
  const dataSize = data.length;
  const displayedAvatars = max ? data.slice(0, max) : data;
  const remainingAvatars = dataSize - displayedAvatars.length;

  const [popupOpen,setPopupOpen] = useState(false);

  return (
    (dataSize > 0) && (
    <div>

      <div className="flex">
        {displayedAvatars.map((avatar) => {
          return (
            <a key={avatar.key} href={avatar.href}>
              <img className="rounded-full w-8 h-8" src={avatar.src} alt={avatar.name} title={avatar.name} />
            </a>
          );
        })}
        {remainingAvatars > 0 && (
          <button className="ml-2 rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-500 cursor-pointer"
          title={`${remainingAvatars} more cast members`}
          onClick={() => setPopupOpen(true)}
          >
            +{remainingAvatars}
          </button>
        )}
      </div>
      {popupOpen && (
       <div className="absolute z-10 w-48 p-2 mt-2 bg-white border rounded-md shadow-lg">
          <h3 className="font-semibold">Cast Members</h3>
          <ul>
            {data.map((member) => (
              <li key={member.key}>
                <a href={member.href} className="flex items-center space-x-2">
                  <img className="rounded-full w-8 h-8" src={member.src} alt={member.name} title={member.name} />
                  <span>{member.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <button className="mt-2 text-sm text-gray-500" onClick={() => setPopupOpen(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  ))
};
