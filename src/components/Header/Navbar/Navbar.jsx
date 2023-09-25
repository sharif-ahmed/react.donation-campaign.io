import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className=''>{/* relative */}
            <div className='container mx-auto'>
                <div className='flex flex-wrap flex-col lg:flex-row gap-6 items-center justify-between py-4'>
                    <Logo></Logo>
                    <nav>
                        <ul className='flex flex-wrap gap-12 items-center '>
                            <li className='font-semibold text-[18px] text-[#0B0B0B]'>
                                <NavLink to={"/"}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] text-[18px] font-semibold underline" : ""}
                                >Home</NavLink>
                            </li>
                            <li className='font-semibold text-[18px] text-[#0B0B0B]'>
                                <NavLink to={"/donation"}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] text-[18px] font-semibold underline" : ""}
                                >Donation</NavLink>
                            </li>
                            <li className='font-semibold text-[18px] text-[#0B0B0B]'>
                                <NavLink to={"/statistics"}
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] text-[18px] font-semibold underline" : ""}
                                >Statistics</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;