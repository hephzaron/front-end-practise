import React, {Component} from 'react';
import { 
  FormControl,
  Dropdown,
  MenuItem
} from 'react-bootstrap';
import RootCloseWrapper from 'react-overlays/lib/RootCloseWrapper';

/**
 * @description Renders a custom dropdown component
 * @param {object} - props and context
 * @return {JSX}
 */

class CustomToggle extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();

    this.props.onClick(e);
  }

  render() {
    return (
      <a href="" onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}

class CustomMenu extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  focusNext() {
    const input = ReactDOM.findDOMNode(this.input);

    if (input) {
      input.focus();
    }
  }

  render() {
    const { children } = this.props;
    const { value } = this.state;

    return (
      <div className="dropdown-menu" style={{ padding: '' }}>
        <FormControl
          ref={c => {
            this.input = c;
          }}
          type="text"
          placeholder="Type to filter..."
          onChange={this.handleChange}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            child => !value.trim() || child.props.children.indexOf(value) !== -1
          )}
        </ul>
      </div>
    );
  }
}

const CustomDropdown = () =>(
  <Dropdown id="dropdown-custom-menu">
    <CustomToggle bsRole="toggle">Custom toggle</CustomToggle>

    <CustomMenu bsRole="menu">
      <MenuItem eventKey="1">Red</MenuItem>
      <MenuItem eventKey="2">Blue</MenuItem>
      <MenuItem eventKey="3" active>
        Orange
      </MenuItem>
      <MenuItem eventKey="1">Red-Orange</MenuItem>
    </CustomMenu>
  </Dropdown>
);

export default CustomDropdown;
