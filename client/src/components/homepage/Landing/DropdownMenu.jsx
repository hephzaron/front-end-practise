import React, { Component } from 'react';
import {
  SplitButton,
  Dropdown,
  MenuItem,
  Glyphicon
} from 'react-bootstrap';

const onSelectAlert =  (eventKey) => {
  alert(`Alert from menu item .\neventKey: ${eventKey}`);
}

const ServiceDropdown = () => (
    <SplitButton title="What we offer !" pullRight id="split-button-pull-right">
      <MenuItem header>Choose type</MenuItem>
      <MenuItem eventKey={1} href="/audio-books" onSelect={onSelectAlert}>Get Audio Books</MenuItem>
      <MenuItem eventKey={2} href="/online-books" onSelect={onSelectAlert}>Get Online Books</MenuItem>
      <MenuItem divider/>
      <MenuItem header>Visit a bookshop</MenuItem>
      <MenuItem eventKey={3} href="/bookshops" onSelect={onSelectAlert}>Bookshops</MenuItem>
    </SplitButton>
)

export default ServiceDropdown;