import React, { useState } from 'react';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';

const LoginIcon = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <ButtonGroup>
      <DropdownButton
        as={ButtonGroup}
        title={
          <img src="https://i.ibb.co/rKj1RvR/login-icon.png" alt="Login Icon" style={{ width: '36px', height: '36px', borderRadius: '50%' }} />
        }
        id="dropdown-menu-align-right"
        drop="right"
        show={dropdownOpen}
        onToggle={toggleDropdown}
      >
        <Dropdown.Item eventKey="1">Cerrar sesión</Dropdown.Item>
        <Dropdown.Item eventKey="2">Configuraciones</Dropdown.Item>
        <Dropdown.Item eventKey="3">Configuraciones</Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>
  );
};

export default LoginIcon;