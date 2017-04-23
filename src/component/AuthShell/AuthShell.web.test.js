import React from 'react';
import {mount, render} from 'enzyme';
import AuthShell from './AuthShell.web';
import {MemoryRouter as Router} from 'react-router-dom';

const AtLogin = props => (
  <Router initialEntries={['/login']}>
    <AuthShell {...props} />
  </Router>
);

const AtApp = props => (
  <Router initialEntries={['/']}>
    <AuthShell {...props} />
  </Router>
);

const AtAppRandom = props => (
  <Router initialEntries={['/random']}>
    <AuthShell {...props} />
  </Router>
);

describe('AuthShell', () => {
  it('should render without crashing with no props', () => {
    const rendered = render(<AtLogin />);
    expect(rendered.length).toBe(1);
  });
  it('should render no children with no props at /login', () => {
    const rendered = render(<AtLogin />);
    expect(rendered.children().length).toBe(0);
  });
  it('should render loginComponent with no user and passing loginComponent at /login', () => {
    const loginComponent = () => <div>test</div>;
    const props = {
      loginComponent,
    };
    const mounted = mount(<AtLogin {...props} />);
    expect(mounted.find(loginComponent).length).toBe(1);
  });
  it('should not render children with user and no children at /login', () => {
    const props = {
      user: {
        uid: 1,
      },
    };
    const rendered = render(<AtLogin {...props} />);
    expect(rendered.children().length).toBe(0);
  });
  it('should render children with user and children at /login', () => {
    const props = {
      user: {
        uid: 1,
      },
    };
    const TestComponent = () => <div />;
    const rendered = mount(<AtLogin {...props}><TestComponent /></AtLogin>);
    expect(rendered.find(TestComponent).length).toBe(1);
  });
  it('should render children with no user and children at /', () => {
    const props = {};
    const TestComponent = () => <div />;
    const rendered = mount(<AtApp {...props}><TestComponent /></AtApp>);
    expect(rendered.find(TestComponent).length).toBe(1);
  });
  it('should render children with no user and children at /random', () => {
    const props = {};
    const TestComponent = () => <div />;
    const rendered = mount(
      <AtAppRandom {...props}><TestComponent /></AtAppRandom>
    );
    expect(rendered.find(TestComponent).length).toBe(1);
  });
});
