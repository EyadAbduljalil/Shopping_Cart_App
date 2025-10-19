// تحميل متغيرات البيئة من ملف .env
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
// للسماح بالاتصال بين السيرفر والفرونت-إند
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());


// الاتصال بقاعدة البيانات MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // استخدام الرابط الموجود في .env
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1); // إيقاف السيرفر لو قاعدة البيانات فيها مشكلة
  }
};
connectDB();
// (Schema) تعريف هيكل البيانات الخاص بعناصر السلة
const CartItemSchema = new mongoose.Schema({
  name: String,     // اسم المنتج
  price: Number,    // سعر المنتج
  quantity: Number  // الكمية
});


//MongoDB إنشاء موديل للتعامل مع البيانات داخل
const CartItem = mongoose.model("CartItem", CartItemSchema);

// جلب كل عناصر السلة
app.get("/cart", async (req, res) => {
  const items = await CartItem.find();
  res.json(items);
});
// إضافة عنصر جديد للسلة
app.post("/cart", async (req, res) => {
  const newItem = new CartItem(req.body);
  await newItem.save();
  res.json(newItem);
});
// تعديل عنصر داخل السلة
app.put("/cart/:id", async (req, res) => {
  const updatedItem = await CartItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedItem);
});
// حذف عنصر من السلة
app.delete("/cart/:id", async (req, res) => {
  await CartItem.findByIdAndDelete(req.params.id);
  res.json({ message: "Item removed" });
});



// تشغيل السيرفر
app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on port ${process.env.PORT}`)
);
