import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
    email: string;
    name: string;
    location: {
      type: string,
      coordinates: [number],
    }
}

const UserSchema: Schema = new Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    location: {
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ['Point'], // 'location.type' must be 'Point'
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      }
    }
  });

  UserSchema.index({ "location": "2dsphere" });
  
export default mongoose.model<User>('User', UserSchema);