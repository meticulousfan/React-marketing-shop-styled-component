import { FaRegUser } from 'react-icons/fa';
import { useState } from 'react';

import { Div } from './styled';
import * as colors from '../../../config/colors';
import MenuDrop from './menu';

function NavDropdown() {
    const [menu, setMenu] = useState(false);

    function handleDrop() {
        if (menu) {
            setMenu(false);
        } else {
            setMenu(true);
        }
    }

    return (
        <Div>
            <FaRegUser
                size={24}
                color={colors.primaryColor}
                cursor="pointer"
                onClick={handleDrop}
            />
            {menu ? <MenuDrop /> : ''}
        </Div>
    );
}

export default NavDropdown;
