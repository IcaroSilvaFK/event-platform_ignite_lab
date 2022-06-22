interface IPropsButton {
  type: 'contains' | 'outline';
  text: string;
  icon?: JSX.Element;
}

export function Button({ text, type, icon }: IPropsButton) {
  return type === 'contains' ? (
    <button
      className='
      py-4 px-6 bg-green-500 flex items-center gap-[10px] text-white rounded-[4px]
      hover:bg-green-700 transition: ;
    '
    >
      <span>{icon}</span>
      <span className='uppercase text-sm font-bold'>{text}</span>
    </button>
  ) : (
    <button
      className='
    py-4 px-6 border-2 border-blue-500 flex justify-center  items-center gap-[10px] text-blue-500 rounded-[4px]
    hover:bg-blue-500 hover:text-white transition
  '
    >
      <span>{icon}</span>
      <span className='uppercase text-sm font-bold'>{text}</span>
    </button>
  );
}
