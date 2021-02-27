import mongoose from "mongoose";

export interface IPost {
  _id?: string;
  slug: string;
  title: string;
  content: string;
  description: string;
  coverImageUrl: string;
  thumbnailUrl?: string;
  createdAt?: string;
  updatedAt?: string;
  isDeleted?: boolean;
}

const PostSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  coverImageUrl: {
    type: String,
  },
  thumbnailUrl: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date(),
  },
  updatedAt: {
    type: String,
    default: Date(),
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
