import express from 'express'
import { mobileModel } from '../model/mobileModels.js'
import { addRecord } from './constant.js';

export const mobile = express.Router();

mobile.get('/mobile',async(req,res)=>{
    const result = await mobileModel.find({})
    res.json(result)
})

mobile.post('/mobile/add',async (req,res)=>{
    const payload = {
        ...req.body,
        ...addRecord
    }
    const result = new mobileModel(payload)
    result.save();
    res.json(result)
})
