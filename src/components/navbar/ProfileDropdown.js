import React from 'react';
import { Link } from 'react-router-dom';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from '@firebase/app';
import Avatar from '../common/Avatar';
import useMember from '../../hooks/useMember';

const ProfileDropdown = () => {
  const member = useMember();

  if (!member.isLoaded) return <></>;

  let role;
  let abilities;
  switch (member.permissions) {
    case 1: {
      role = 'Moderator';
      abilities = [
        'View licenses',
        'View statistics',
      ];

      break;
    }

    case 2: {
      role = 'Administrator';
      abilities = [
        'Manage licenses',
        'Manage releases',
      ];

      break;
    }

    case 3: {
      role = 'Owner';
      abilities = [
        'Manage licenses',
        'Manage releases',
        'Manage plans',
        'Assign staff',
      ];

      break;
    }

    default: {
      role = 'None';
      abilities = [];
    }
  }

  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav className="pr-0 py-0">
        <Avatar src={`https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.png`} />
      </DropdownToggle>
      <DropdownMenu right className="dropdown-menu-card">
        <div className="bg-white rounded-soft py-2">
          <DropdownItem tag="div" className="text-base px-3 py-2">
            <span className="d-flex justify-content-between fs--1 text-black">
              <span className="font-weight-semi-bold">{role}</span>
              <span>({member.permissions})</span>
            </span>
            <ul className="list-unstyled pl-1 my-2 fs--1">{abilities.map((ability, index) => (
              <li key={index}>
                <FontAwesomeIcon icon="circle" transform="shrink-11" />
                <span className="ml-1">{ability}</span>
              </li>
            ))}
            </ul>
            <p className="fs--2 mb-0">
              Read about <Link to="/admin/documentation">permissions</Link>
            </p>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag={Link} to="/admin/settings">
            Settings
          </DropdownItem>
          <DropdownItem onClick={() => firebase.auth().signOut()}>
            Log out
          </DropdownItem>
        </div>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default ProfileDropdown;
