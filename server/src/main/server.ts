import env from '@/main/config/env'
import { MongoHelper } from '@/infra'
import app from '@/main/config/app'

const mongoHelper = new MongoHelper(env.mongoUrl)

mongoHelper.connect().then(async () => {
  app.listen(env.port, () => {
    console.log(`Listening on port ${env.port}`)
  })
})
