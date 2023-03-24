import * as httpie from "../dist/index.js";
// import * as httpie from "@atomictech/httpie";

const yoda = {
  customPath: "yoda",
  domains: new Set([
    "yoda.myunisoft.fr"
  ]),
  agent: new httpie.Agent({
    connections: 500
  }),

  // Work by reading the NODE_ENV var.
  prod: "",
  preprod: "",
  dev: "https://yoda.myunisoft.fr:1407"
};
httpie.agents.add(yoda);

const { data } = await httpie.get("/yoda/api/v1/ipa/healthz");
console.log(data);
