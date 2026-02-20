import express from "express";
import aithMiddleware from "../middleware/auth.js"
import { placeOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", placeholder);