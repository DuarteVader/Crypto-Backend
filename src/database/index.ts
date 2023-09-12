import { connect } from 'mongoose'

import { mongoURI } from './config'

const connectDB = async () => {
  try {
    connect(String(mongoURI))

    console.log('MongoDB connected')
  } catch (err) {
    throw new Error('Failed to connect to MongoDB')
  }
}

export { connectDB }
