const mongoose = require('mongoose');

    const codeReviewSchema = new mongoose.Schema({
      code: { type: String, required: true },
      comments: { type: String },
      createdAt: { type: Date, default: Date.now }
    });

    const CodeReview = mongoose.model('CodeReview', codeReviewSchema);

    module.exports = CodeReview;