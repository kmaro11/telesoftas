export function ListItem({ user, selectUser, selectedUserId }) {
  const activeUser =
    user.id === selectedUserId
      ? 'bg-blue-200'
      : 'odd:bg-white even:bg-slate-50';

  return (
    <li
      className={`flex w-full p-2 cursor-pointer ${activeUser}`}
      onClick={() => {
        selectUser(user);
      }}
    >
      <span className="w-1/2">{user.name}</span>
      <span className="w-1/2 trun">{user.email}</span>
    </li>
  );
}
