import { app } from './app'

import { connectDB } from './database/index'

app.listen(3000, () => {
    console.log(
        `Server running on: ${process.env.APP_URL}.`
    )
    
    connectDB();
})