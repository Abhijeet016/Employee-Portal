import Customlist from "./Customlist";
import { shallow } from "enzyme";
describe("find", () => {
  it("Custom list", () => {
    let wrapper = shallow(<Customlist />);
    console.log(wrapper.debug);
    //expect(wrapper.find('Customlist')).length.toEqual(1)
    //expect(wrapper.find('link')).to.have.lengthOf(1);
    //expect(wrapper.containsMatchingElement()).to.equal(true);
  });
});
