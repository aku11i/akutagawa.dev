const APP_ENV = process.env.APP_ENV || "local";

const env = {
  ...require("./default"),
  ...require(`./${APP_ENV}`),
  NEXT_PUBLIC_APP_ENV: APP_ENV,
};

Object.entries(env).forEach(([key, value]) => {
  console.log([key, value].join("="));
  process.env[key] = value;
});
