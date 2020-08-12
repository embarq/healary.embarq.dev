module.exports = {
  apps : [
    {
      name: 'healary-dev',
      script: 'node_modules/.bin/next',
      args: 'dev -p 4530',
      time: true,
      watch: false,
      restart_delay: 3000
    }
  ]
};
