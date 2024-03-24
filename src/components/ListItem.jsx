export function ListItem({ user, selectUser }) {
  return (
    <li
      className="flex w-full p-2 cursor-pointer odd:bg-white even:bg-slate-50"
      onClick={() => {
        selectUser(user);
      }}
    >
      <span className="w-1/2">{user.name}</span>
      <span className="w-1/2 trun">{user.email}</span>
    </li>
  );
}
