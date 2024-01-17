import renderer from 'react-test-renderer'
import Users from './Users';
test('Class component method testing ', () => {
    const componentData = renderer.create(<Users />).getInstance();
    expect(componentData.getUserList()).toMatch("User List")
})

