import UserIcon from "@/assets/svg/UserIcon";

const UserButton = () => {
  return (
    <div className="relative">
      <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:scale-105 transition-colors">
        <UserIcon />
      </button>
    </div>
  );
};

export default UserButton;
