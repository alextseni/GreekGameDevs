module.exports = {
  mail: process.env.MAIL,
  connectionString: process.env.DATABASE_URL
    ? `${process.env.DATABASE_URL}?ssl=true` : process.env.DB_CONN,
  sendinblue: {
    apikey: process.env.BLUE_API,
  },
  recaptcha: process.env.RECAPT,
  calendar: {
    domain: process.env.CAL_DOMAIN,
    url: process.env.CAL_URL,
    id: process.env.CAL_ID,
  },
};
