import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
    const { loading, logout } = useLogout();

    return (
        <div className='flex items-center justify-center'>
            {!loading ? (
                <BiLogOut className='w-6 h-6 text-gray-800 dark:text-white cursor-pointer' onClick={logout} />
            ) : (
                <span className='loading loading-spinner'></span>
            )}
        </div>
    );
};
export default LogoutButton;