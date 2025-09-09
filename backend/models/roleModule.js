const mongoose = require("mongoose");
const permissionSchema = new mongoose.Schema({
  module: { type: String, required: true },
  actions: {
    create: { type: Boolean, default: false },
    edit: { type: Boolean, default: false },
    delete: { type: Boolean, default: false },
    view: { type: Boolean, default: false },
    allowAll: { type: Boolean, default: false },
  },
});

const roleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    status: { type: Boolean, default: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    permissions: [permissionSchema],
  },

  { timestamps: true }
);

module.exports = mongoose.model("Role", roleSchema);
