import React from "react";
import { shallow } from "enzyme";
import TodoItem from "./TodoItem";

describe("TodoItem", () => {
  it("have a title", () => {
    const wrapper = shallow(<TodoItem />);
    expect(wrapper.find("h2").length).toBe(1);
  });
});
