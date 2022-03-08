import Header from "./Header";
import { shallow } from "enzyme";
describe("find", () => {
  it("Header list", () => {
    let wrapper = shallow(<Header />);
    console.log(wrapper.debug());
    //expect(wrapper.text(nineleaps)).to.equal('nineleaps');
    //expect(wrapper.find('Position').length).toEqual(1)
    //expect(wrapper.exists('Nineleaps')).toEqual(false);
  });
});
