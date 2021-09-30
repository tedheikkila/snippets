// npm run test (on this file in CLI)
const MathFcn = require("../math");

describe("MathFcn", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'number' property when called with the 'new' keyword", () => {
      const obj = new MathFcn();

      expect("number" in obj).toEqual(true);
    });

    it("should set 'number' when created", () => {
      const num = 108;

      const obj = new MathFcn(num);

      expect(obj.number).toEqual(num);
    });

    it("should default 'number' to 10", () => {
      const obj = new MathFcn();

      expect(obj.number).toEqual(10);
    });
  });

  describe("plus", () => {
    it("should return a new 'MathFcn' object", () => {
      const obj = new MathFcn(3).plus(3);

      expect(obj instanceof MathFcn).toEqual(true);
    });

    it("should return a new 'MathFcn' object that has an updated 'number' value", () => {
      const num = 8;
      const added = 7;
      const sum = num + added;

      const { number } = new MathFcn(num).plus(added);

      expect(number).toEqual(sum);
    });
  });

  describe("minus", () => {
    it("should return a new 'MathFcn' object", () => {
      const obj = new MathFcn(9).minus(4);

      expect(obj instanceof MathFcn).toEqual(true);
    });

    it("should return a new 'MathFcn' object that has an updated 'number' value", () => {
      const num = 10;
      const subtracted = 17;
      const difference = num - subtracted;

      const { number } = new MathFcn(num).minus(subtracted);

      expect(number).toEqual(difference);
    });
  });

  describe("value", () => {
    it("should return the 'MathFcn' object's 'number' value", () => {
      const num = 10;
      const obj = new MathFcn(num);

      const result = obj.value();

      expect(result).toEqual(num);
    });
  });
});
