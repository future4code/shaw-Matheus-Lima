import { app } from "./controller/app";
import {productsRouter} from "./router/productsRouter"




app.use('/products',productsRouter)
