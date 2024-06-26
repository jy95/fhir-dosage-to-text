import { hasUnit } from "../internal/hasUnit";
import {
  isNotUndefined,
  noUndefinedInArray,
  allUndefinedInArray,
} from "../internal/undefinedChecks";

import type { RangeParams, Config, Quantity, I18N } from "../types";

function transformQuantityUnitToString(
  i18next: I18N,
  quantity: Quantity,
  config: Config,
): string {
  let quantityValue = quantity.value!;

  if (quantity.system === "http://hl7.org/fhir/ValueSet/duration-units") {
    let code = quantity.code! as "s" | "min" | "h" | "d" | "wk" | "mo" | "a";
    return i18next.t(`unitsOfTime:withoutCount.${code}`, {
      count: quantityValue,
    });
  }

  return config.fromFHIRQuantityUnitToString({
    language: config.language,
    quantity: quantity,
  });
}

type UnitType = "withUnit" | "withoutUnit";
type ResultUnitType = { prefix: `amount.range.${UnitType}`; unit: string };
function getParams({ range, config, i18next }: RangeParams): ResultUnitType {
  const { low, high } = range;
  let quantityUnit = high || low;
  let hasQuantityUnit = hasUnit(quantityUnit);

  if (hasQuantityUnit) {
    return {
      prefix: `amount.range.withUnit`,
      unit: transformQuantityUnitToString(i18next, quantityUnit!, config),
    };
  }

  return {
    prefix: `amount.range.withoutUnit`,
    unit: "",
  };
}

// To cover all nasty cases of Range
// https://build.fhir.org/datatypes.html#Range
export function fromRangeToString({
  range,
  config,
  i18next,
}: RangeParams): string | undefined {
  const { low, high } = range;
  const lowValue = low?.value;
  const highValue = high?.value;

  if (allUndefinedInArray(lowValue, highValue)) {
    return undefined;
  }

  const { prefix, unit } = getParams({ range, config, i18next });

  if (noUndefinedInArray(lowValue, highValue)) {
    return i18next.t(`${prefix}.lowAndHigh`, {
      low: lowValue,
      high: highValue,
      unit: unit,
    });
  }

  if (isNotUndefined(highValue)) {
    return i18next.t(`${prefix}.onlyHigh`, {
      high: highValue,
      unit: unit,
    });
  }

  return i18next.t(`${prefix}.onlyLow`, {
    low: lowValue,
    unit: unit,
  });
}
