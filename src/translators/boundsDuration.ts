import { extractMatchingTimeRepeatField } from "../internal/extractMatchingTimingRepeat";
import { isNotUndefined } from "../internal/undefinedChecks";

import type { Config, Duration, DisplayOrderParams, I18N } from "../types";

function transformDurationToString(
  i18next: I18N,
  duration: Duration,
  config: Config,
): string {
  let quantity = duration.value!;

  // If common units from HL7, do the job
  if (duration.system === "http://hl7.org/fhir/ValueSet/duration-units") {
    let code = duration.code! as "s" | "min" | "h" | "d" | "wk" | "mo" | "a";
    return i18next.t(`unitsOfTime:withCount.${code}`, { count: quantity });
  }

  // otherwise, it is UCUM, ... so let the user do the job
  let unit = config.fromFHIRQuantityUnitToString({
    language: config.language,
    quantity: duration,
  });
  return `${quantity} ${unit}`;
}

export function transformBoundsDurationToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  let boundsDuration = extractMatchingTimeRepeatField(dos, "boundsDuration");

  if (!isNotUndefined(boundsDuration)) {
    return undefined;
  }

  let durationText = transformDurationToString(i18next, boundsDuration, config);

  return i18next.t("fields.boundsDuration", { durationText: durationText });
}
