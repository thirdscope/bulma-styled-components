import getVariables from "./derived-variables";
import { TODO } from "./typeutil";

export default class VarCalculator {
  static _variables: { [key: string]: TODO } = {};
  static _defaults: TODO[] = [];
  static _derived: TODO[] = [];

  static getVariables = (overrides?: TODO) =>
    VarCalculator._derived.reduce(
      (vars, der) => ({
        ...der(vars),
        ...vars
      }),
      getVariables(overrides)
    );

  static addDefault(obj: TODO) {
    VarCalculator._defaults.push(obj);
  }

  static addDerivedDefault(value: TODO) {
    if (typeof value === "function") {
      VarCalculator._derived.push(value);
    }
  }
}
