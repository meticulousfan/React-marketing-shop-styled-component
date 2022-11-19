import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect, useState } from 'react';
import axios from '../../services/axios';

export default function DropdownCor(props) {
    return (
        <Dropdown as={ButtonGroup}>
            <Button variant="light" className="btn-drop"></Button>

            <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />

            <Dropdown.Menu>
                {props.cores.map((cor, index) => {
                    return (
                        <Dropdown.Item key={String(index)}>{cor}</Dropdown.Item>
                    );
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
}
