import { Schema, model, Document } from 'mongoose'

interface IAccountDocument extends Document {
  name: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
}

const accountSchema = new Schema<IAccountDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
    },
  },
  { timestamps: true }
)

const Account = model<IAccountDocument>('Account', accountSchema)

export { Account, IAccountDocument }
