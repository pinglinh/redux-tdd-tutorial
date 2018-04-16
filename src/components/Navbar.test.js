import React from "react";
import { shallow } from "enzyme";
import Navbar from "../common/Navbar";

describe("This are navbar tests", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Navbar />);
    const header = <h2>Todo</h2>;
    expect(wrapper.contains(header)).toEqual(true);
  });
});
