module.exports = config = {
  "name" : "Hummingbird",

  "tracking_port" : 8200,
  "dashboard_port" : 8280,

  "mongo_host" : "localhost",
  "mongo_port" : 27017,

  "udp_address" : "127.0.0.1",
  "udp_port" : 8200,

  "enable_dashboard" : true,

  "capistrano" : {
    "repository" :       "git://github.com/mnutt/hummingbird.git",
    "hummingbird_host" : "hummingbird.your-host.com"
  }
}
