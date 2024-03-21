const mongoose = require("mongoose");
const { Schema } = mongoose;

const pairSchema = new Schema(
  {
    chainId: {
      type: String,
    },
    dexId: {
      type: String,
    },
    url: {
      type: String,
    },
    pairAddress: {
      type: String,
    },
    baseToken: {
      address: String,
      name: String,
      symbol: String,
    },
    quoteToken: {
      address: String,
      name: String,
      symbol: String,
    },
    priceNative: {
      type: Number,
    },
    priceUsd: {
      type: Number,
    },
    txns: {
      m5: {
        buys: Number,
        sells: Number,
      },
      h1: {
        buys: Number,
        sells: Number,
      },
      h6: {
        buys: Number,
        sells: Number,
      },
      h24: {
        buys: Number,
        sells: Number,
      },
    },
    volume: {
      h24: Number,
      h6: Number,
      h1: Number,
      m5: Number,
    },
    priceChange: {
      m5: Number,
      h1: Number,
      h6: Number,
      h24: Number,
    },
    liquidity: {
      usd: Number,
      base: Number,
      quote: Number,
    },
    pairCreatedAt: {
      type: Date,
    },
    info: {
      imageUrl: String,
      websites: [
        {
          label: String,
          url: String,
        },
      ],
      socials: [
        {
          type: {type:String},
          url: String,
        },
      ],
    },
  },
  { timestamps: true }
);

const Pair = mongoose.model("Pair", pairSchema);

module.exports = Pair;
