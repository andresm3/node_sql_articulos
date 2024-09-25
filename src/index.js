const app = require('./app')
const env = require('./config/environment')

app.set('port', env.app.port)
app.listen(app.get('port'), ()=>console.log('Listening on port: ' + env.app.port))
