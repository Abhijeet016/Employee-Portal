import App from "./App";
import { shallow } from "enzyme";

describe("about page testing", () => {
  it("class check", async () => {
    let wrapper = shallow(<App />);
    let anyfn = wrapper.instance().app();
    console.log(anyfn);
  });
});
