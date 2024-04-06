import { extractTimingRepeat } from "../internal/extractTimingRepeat";

import type { DisplayOrderParams } from "../types";

export function transformCountCountMaxToText({
  dos,
  i18next,
}: DisplayOrderParams): string | undefined {
  let repeat = extractTimingRepeat(dos);

  // If empty, return undefined
  if (repeat === undefined) {
    return undefined;
  }

  // Pickup the repeat interesting attributes
  let count = repeat.count;
  let countMax = repeat.countMax;

  // Do nothing if no count, I am not a wizard
  if (count === undefined && countMax === undefined) {
    return undefined;
  } else {
    // Three cases

    // 1. Both count & countMax are present
    if (count !== undefined && countMax !== undefined) {
      return i18next.t("fields.countMax.countMax", {
        count: countMax,
        low: count,
      });
    }

    // 2. Only countMax is present
    if (countMax !== undefined) {
      return i18next.t("fields.count.count", { count: countMax });
    }

    // 3. Only count is present
    return i18next.t("fields.count.count", { count: count });
  }
}
