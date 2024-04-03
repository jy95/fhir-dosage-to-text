// Utility function
import { fromRangeToString } from "../utils/fromRangeToString";

// types
import type { DisplayOrderParams } from "../types";

export function transformDoseRangeToText({
  dos,
  config,
  i18next,
}: DisplayOrderParams): string | undefined {
  // If empty, return undefined
  if (dos.doseAndRate === undefined) {
    return undefined;
  }
  // Find the first entry that match criteria
  let doseRange = dos.doseAndRate.find((s) => s.doseRange !== undefined);

  // If not found, skip
  if (doseRange === undefined) {
    return undefined;
  }

  // Turn range into a text
  const text = fromRangeToString({
    range: doseRange.doseRange!,
    config,
    i18next,
  });

  // Reject if empty
  if (text === undefined) {
    return undefined;
  }

  return i18next.t("fields.doseRange", {
    rangeText: text,
  });
}