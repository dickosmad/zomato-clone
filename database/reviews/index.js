import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
   food: {
        type: mongoose.Types.ObjectId,
        ref: "Foods",
      },
      restaurants:{ 
        type: mongoose.Types.ObjectId,
        ref: "Restaurants",
      },
      user:{ 
        type: mongoose.Types.ObjectId,
        ref: "Users",
      },
      rating:{type:String, required: true},
      reviewText:{type:String, required:},
      photos:[{
        type: mongoose.Types.ObjectId,
        ref: "Images",
      }]
},
{timestamps:true}
)

export const ReviewModel = mongoose.model('Reviews',ReviewSchema)