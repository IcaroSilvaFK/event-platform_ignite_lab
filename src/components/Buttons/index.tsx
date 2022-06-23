import { ReactNode } from "react";

interface IPropsButton {
  type: 'contains' | 'outline';
  children: ReactNode;
  icon?: JSX.Element;
  href: string;
}

export function Button({ children, type, icon, href }: IPropsButton) {
  return type === 'contains' ? (
    <a
      href={href}
      className='
      p-4  bg-green-500 flex items-center gap-[10px] text-white rounded-[4px]
      hover:bg-green-700 transition: ;
    '
    >
      <span>{icon}</span>
      <span className='uppercase text-sm font-bold'>{children}</span>
    </a>
  ) : (
    <a
      href={href}
      className='
    p-4  border border-blue-500 flex justify-center  items-center gap-[10px] text-blue-500 rounded-[4px]
    hover:bg-blue-500 hover:text-gray-900 transition-colors
  '
    >
      <span>{icon}</span>
      <span className='uppercase text-sm font-bold'>{children}</span>
    </a>
  );
}
