import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        address:{
            type: String,
            required: true,
        },
        regularPrice:{
            type: Number,
            required: true,
        },
        discountPrice:{
            type: Number,
            required: true,
        },
        goodCondition:{
            type: Boolean,
            required: true,
        },
        warranty:{
            type: Boolean,
            required: true,
        },
        type:{
            type: String,
            required: true,
        },
        offer: {
            type: Boolean,
            required: true,
        },
        imageUrls:{
            type: Array,
            required: true,
        },
        userRef:{
            type: String,
            required: true,
        },
    }, {timestamps: true}
)

const Listing = mongoose.model('listing', listingSchema)

export default Listing;