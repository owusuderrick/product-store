import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";

import "dotenv/config";

//init arcjet
export const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["ip.src"],
  rules: [
    //shield protects app against common attacks like SQL injection, XSS, CSRF.
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      //blocks all bots except search engines
      allow: ["CATEGORY:SEARCH ENGINE"],
    }),
    //rate limiting
    tokenBucket({
      mode: "LIVE",
      refillRate: 30,
      interval: 5,
      capacity: 30,
    }),
  ],
});
