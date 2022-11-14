import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

export default function DropdownCor() {
    return (
        <Dropdown as={ButtonGroup}>
            <Button variant="light" className="btn-drop"></Button>

            <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Branco</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Azul</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Vermelho</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
