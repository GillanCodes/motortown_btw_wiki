import { MoveDown, MoveUp } from "lucide-react";
import { ReactNode, useState } from "react";
import "./Dropdown.scss";

export const Dropdown = ({ isDefaultOpen = false, title="Dropdown", content }: { isDefaultOpen?: boolean, title: string, content: ReactNode | string }) => {
  
  if (!content) return;

  const [open, setOpen] = useState(isDefaultOpen);

  const OpenCloseHandle = () => {
    setOpen(!open);
  }

  return (
    <div className='dropdown'>
      <div className="dropdown__container">
        <div className="dropdown__head" onClick={OpenCloseHandle}>
          {open ? <MoveDown /> : <MoveUp />}
          <p>{title}</p>
        </div>
        {open && (
          <div className="dropdown__content">
            {content}
          </div>
        )}
      </div>
    </div>
  )
}
