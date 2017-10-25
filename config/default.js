module.exports = {
  databaseUrl: process.env.DATABASE_URL,
  devServer: {
    url: 'http://localhost',
    port: 7000,
    hot: true,
    inline: true,
    noInfo: true,
    apiProxyHost: "localhost:7001"
  }
};