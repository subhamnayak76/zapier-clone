import  express from "express";
import { userRouter } from "./routes/User";
import {zapRouter} from './routes/zap'
import cors from 'cors'
const app = express()
app.use(cors())

app.use(express.json())

// app.use(cors())

app.use('/api/v1/user',userRouter)
app.use("/api/v1/zap", zapRouter);

app.listen(5000,() =>{
    console.log("server is listening in port 5000")
})
