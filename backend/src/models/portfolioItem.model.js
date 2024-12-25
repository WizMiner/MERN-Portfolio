import mongoose from 'mongoose';

const portfolioItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String }, // URL to the image
  tags: [String], // List of tags for categorization
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const PortfolioItem = mongoose.model('PortfolioItem', portfolioItemSchema);
export default PortfolioItem;
