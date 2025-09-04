import * as Temporal from "@js-temporal/polyfill";

const now = Temporal.Temporal.Now.plainDateISO();
console.log(now.toString());