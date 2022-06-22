interface IPropsButton {
  type: 'contains' | 'outline';
  text: string;
  icon?: JSX.Element;
}

export function Button({ text, type, icon }: IPropsButton) {
  return type === 'contains' ? (
    <button
      className='
      py-3 px-1 bg-green-500 flex items-center gap-1 text-white rounded-sm
      hover:brightness-90
    '
    >
      <span>{icon}</span>
      <span className='uppercase text-sm '>{text}</span>
    </button>
  ) : (
    <button>
      <span>{icon}</span>
      <span>{text}</span>
    </button>
  );
}
