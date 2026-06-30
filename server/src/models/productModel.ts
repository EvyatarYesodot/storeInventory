import { InferSchemaType, model, Schema } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: true, trim: true },
  quantity: { type: Number, required: true, min: 0, default: 0 },
});

export type Product = InferSchemaType<typeof productSchema>;

export const ProductModel = model(`Product`, productSchema);
