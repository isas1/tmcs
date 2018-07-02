// Copy of NAVBAR
import _ from "lodash";
import React, { Component } from "react";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive
} from "semantic-ui-react";
import logo from '../../cslogo.png';
import HomepageLayout from '../home/home.jsx'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const NavBarMobile = ({
  children,
  leftItems,
  onPusherClick,
  onToggle,
  rightItems,
  visible
}) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      items={leftItems}
      vertical
      visible={visible}
    />
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: "100vh" }}
    >
      <Menu fixed="top" inverted>
        <Menu.Item>
          <Image size="mini" src={logo} />
        </Menu.Item>
        <Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Menu position="right">
          {_.map(rightItems, item => <Menu.Item {...item} />)}
        </Menu.Menu>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

// Desktop component
const NavBarDesktop = ({ leftItems, rightItems }) => (
  <Menu fixed="top" inverted>
    <Menu.Item>
      <Image size="mini" src={logo} />
    </Menu.Item>
    {_.map(leftItems, item => <Menu.Item {...item} />)}
    <Menu.Menu position="right">
      {_.map(rightItems, item => <Menu.Item {...item} />)}
    </Menu.Menu>
  </Menu>
);

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "5em" }}>{children}</Container>
);

class NavBar extends Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children, leftItems, rightItems } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}

//Sidebar components
const leftItems = [
  { as: "a", content: "Home", key: "home" },
  { as: "a", content: "About", key: "about" },
  { as: "a", content: "Contact", key: "contact" }
];

//Right menu items
const rightItems = [
  { as: "a", content: "Login", key: "login" },
  { as: "a", content: "Register", key: "register" }
];

class NBar extends Component {
  
  constructor (props) {
    super(props);
    this.state = { message: 'Hello'}
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  

  handleItemClick() {
    //console.log({this.state.message});
  }

  render () {
    return <NavBar leftItems={leftItems} rightItems={rightItems}>
    

    <ul>
      <li ><a href="" onClick={this.handleItemClick}>Test</a>  </li>
      {_.map(leftItems, item => <li {...item} onClick={this.handleItemClick}/>)}
    </ul>
    <HomepageLayout />
    
  </NavBar>
  }
};

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default NBar;