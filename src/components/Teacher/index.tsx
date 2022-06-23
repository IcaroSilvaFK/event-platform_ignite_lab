interface ITeacherProps {
  avatarURL: string;
  bio: string;
  name: string;
}

export function Teacher({ avatarURL, bio, name }: ITeacherProps) {
  return (
    <div className='flex items-center p-8 max-w-[1100px] mx-auto'>
      <img
        src={avatarURL}
        alt={name}
        className='rounded-full w-16 h-16 border-2 border-blue-500'
      />
      <div className='flex flex-col ml-2 leading-relaxed'>
        <span className='text-2xl font-bold '>{name}</span>
        <span className='text-sm text-gray-300'>{bio}</span>
      </div>
    </div>
  );
}
