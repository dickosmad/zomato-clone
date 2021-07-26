import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },
    orderDetails: [
      {
        food: {
          type: mongoose.Types.ObjectId,
          ref: "Users",
        },
        quantity: { type: Number, required: true },
        paymode: { type: Number, required: true },
        status: { type: String, required: true },
        paymentDtails: {
          itemTotal: { type: Number, required: true },
          promo: { type: Number, required: true },
          tax: { type: Number, required: true },
        },
      },
    ],
    orderRatings: { type: Number, required: true },
  },
  { timestamps: true }
);

export const MOrderModel = mongoose.model("Menu", OrderSchema);
