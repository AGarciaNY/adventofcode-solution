import Vector from "../build-a-vector/index.js";
describe('MyClass', () => {
  let instance;

  beforeEach(() => {
    instance = new Vector(); // Create a new instance for each test
  });

  // ... your tests will go here
  function testest(a) {
    return a
  }
  // it('should initialize with the provided value', () => {
  //   expect(testest(1)).toBe(2);
  // });
  //initiate class
  it('size starts at 0', () => {
    expect(instance.size()).toBe(0);
  });

  it('capacity start at 1', () => {
    expect(instance.capacity()).toBe(2);
  });
  it('array is empty', () => {
    expect(instance.isEmpty()).toBe(true);
  });
  it('error is thrown when array is empty', () => {
    // expect(instance.at(0)).toThrow(new Error("invalid index"));
    expect(() => instance.at(0)).toThrow(new Error("invalid index"));
  });


  it('size increase by 1', () => {
    instance.pushBack(1)
    expect(instance.size()).toBe(1);
  });
  it('Verify that data was added', () => {
    instance.pushBack(20)
    expect(instance.at(0)).toBe(20);
  });

  it('After more pushback make sure the data are in the array', () => {
    instance.pushBack(20);
    instance.pushBack(10);
    instance.pushBack("hi");
    instance.pushBack("cat");

    let list = [20, 10, "hi", "cat"];
    expect(instance.size()).toBe(4);

    expect(instance.at(0)).toBe(20);
    expect(instance.at(1)).toBe(10);
    expect(instance.at(2)).toBe("hi");
    expect(instance.at(3)).toBe("a");

    expect(instance.capacity()).toBe(8);
  });


  //pop()
  it('Make sure the size decreases by 1', () => {
    instance.pushBack(20);
    let size = instance.size()
    instance.popback()
    expect(instance.size()).toBe(size - 1);
  });

  it('Make sure it returns the element', () => {
    instance.pushBack(20);
    expect(instance.popback()).toBe(20);
  });

  it('Check if an error is thrown when empty', () => {
    expect(() => instance.popback()).toThrow(new Error("nothing to pop"));
  });

  it('Make sure it works after multiple pops', () => {
    instance.pushBack(20);
    instance.pushBack(10);
    instance.pushBack(30);
    instance.pushBack(40);
    instance.pushBack(2);
    expect(instance.popback()).toBe(2);
    expect(instance.popback()).toBe(40);
    expect(instance.popback()).toBe(10);
    expect(instance.popback()).toBe(20);
  });
});