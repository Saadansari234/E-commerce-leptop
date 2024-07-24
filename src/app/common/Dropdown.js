import Dropdown from 'react-bootstrap/Dropdown';
import { CgProfile } from "react-icons/cg";
import { RiUserLine } from "react-icons/ri";
import { TiShoppingBag } from "react-icons/ti";
import { TbLogout2 } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../store/action';
import Naviagtion from '../utils/navigatation';
import { TbLogout } from "react-icons/tb";

function ToggleDropdown() {

    const isloggedin = useSelector(state => state.LoginInfo)
    const dispatch = useDispatch()
    console.log(isloggedin)
    return (
        <div className='dropdown mt-3 mt-lg-0'>
            <Dropdown>
                <Dropdown.Toggle variant="none" className='custom-dropdown-toggle'>
                    <CgProfile fontSize={26} />
                </Dropdown.Toggle>

                <Dropdown.Menu className="custom-dropdown-menu">

                    {
                        isloggedin ?
                            (
                                <>
                                    <Dropdown.Item className='items' >
                                        <div className='inner-item'>
                                            <RiUserLine /><div>Profile</div>
                                        </div>
                                    </Dropdown.Item>

                                    <Dropdown.Item className='items'>
                                        <Naviagtion path={"/orders"}>
                                            <div className='inner-item'>
                                                <TiShoppingBag /><div>orders</div>
                                            </div>
                                        </Naviagtion>
                                    </Dropdown.Item>

                                    <Dropdown.Divider className='bg-white' />

                                    <Dropdown.Item className='items' onClick={() => dispatch(logOut())}>
                                        <Naviagtion path={"/"}>
                                            <div className='inner-item'>
                                                <TbLogout2 /><div>logout</div>
                                            </div>
                                        </Naviagtion>
                                    </Dropdown.Item>
                                </>
                            ) :
                            (<Dropdown.Item className='items' >
                                <Naviagtion path={"/login"}>
                                    <div className='inner-item'>
                                        <TbLogout /><div>login</div>
                                    </div>
                                </Naviagtion>
                            </Dropdown.Item>)
                    }

                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default ToggleDropdown;