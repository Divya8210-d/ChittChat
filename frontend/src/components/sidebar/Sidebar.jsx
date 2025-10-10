import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import ThemeToggle from "../ThemeToggle";

const Sidebar = () => {
    return (
        <div className='border-r border-slate-500 p-4 flex flex-col text-gray-800 dark:text-gray-200'>
            <SearchInput />
            <div className='divider px-3'></div>
            <Conversations />
            <div className='mt-auto flex items-center justify-between'>
                <LogoutButton />
                <ThemeToggle />
            </div>
        </div>
    );
};
export default Sidebar;