import i18next from "i18next";

// To make a list understandable for end-users
export function fromListToString(arr: string[]): string {
  // Split the array into two parts: all entries except the last one, and the last
  const firstString = arr.slice(0, -1).join(", ");
  const lastString = arr.slice(-1).join("");

  // concatenate the result
  const linkWord = arr.length > 1 ? ` ${i18next.t("linkwords.and")} ` : "";
  const finalString = firstString + linkWord + lastString;
  return finalString;
}