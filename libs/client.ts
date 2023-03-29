import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "p4wd01bxuj",
  apiKey: process.env.API_KEY || "",
});
