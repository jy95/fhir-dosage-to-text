// For typings autocomplete whatever your IDE
import { expect, test, describe } from "@jest/globals";
import { FhirDosageUtils } from "../src/index";

import type { Dosage } from "fhir/r4";

describe("API scenarios", () => {
  let dosagesEn: FhirDosageUtils;
  let dosagesFr: FhirDosageUtils;

  beforeAll(async () => {
    dosagesEn = await FhirDosageUtils.build({ language: "en" });
    dosagesFr = await FhirDosageUtils.build({ language: "fr" });
  });

  // restore init state
  afterEach(async () => {
    dosagesEn = await FhirDosageUtils.build({ language: "en" });
    dosagesFr = await FhirDosageUtils.build({ language: "fr" });
  });

  test("Two separated instances must give different results", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          frequency: 1,
          period: 8,
          periodUnit: "h",
        },
      },
    };

    let language1 = dosagesEn.getProperty("language");
    let language2 = dosagesFr.getProperty("language");

    let result1 = dosagesEn.fromDosageToText(dosage);
    let result2 = dosagesFr.fromDosageToText(dosage);
    expect(language1).not.toBe(language2);
    expect(result1).not.toBe(result2);
  });

  test("changeDisplayOrder must be applied", () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          frequency: 1,
          period: 8,
          periodUnit: "h",
        },
      },
      text: "Test string",
    };

    let order1 = dosagesEn.getProperty("displayOrder");
    let result1 = dosagesEn.fromDosageToText(dosage);
    dosagesEn.setProperty("displayOrder", ["text"]);
    let order2 = dosagesEn.getProperty("displayOrder");
    let result2 = dosagesEn.fromDosageToText(dosage);
    expect(order1).not.toBe(order2);
    expect(result1).not.toBe(result2);
  });

  test("changeLanguage must be applied", async () => {
    const dosage: Dosage = {
      timing: {
        repeat: {
          frequency: 1,
          period: 8,
          periodUnit: "h",
        },
      },
    };

    let result1 = dosagesEn.fromDosageToText(dosage);
    await dosagesEn.changeLanguage("fr");
    let result2 = dosagesEn.fromDosageToText(dosage);
    expect(result1).not.toBe(result2);
  });

  test("changeDisplaySeparator must be applied", async () => {
    let sep1 = dosagesEn.getProperty("displaySeparator");
    dosagesEn.setProperty("displaySeparator", " | ");
    let sep2 = dosagesEn.getProperty("displaySeparator");
    expect(sep1).not.toBe(sep2);
  });

  test("changeDateTimeFormatOptions must be applied", async () => {
    let opts1 = dosagesEn.getProperty("dateTimeFormatOptions");
    dosagesEn.setProperty("dateTimeFormatOptions", {
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      second: "2-digit",
    });
    let opts2 = dosagesEn.getProperty("dateTimeFormatOptions");
    expect(opts1).not.toBe(opts2);
  });
});
