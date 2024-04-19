
import CountNumber from "../models/Count.js";

const findOne =async(req, res)=>{
    let countDocument = await CountNumber.findOne();
    if (!countDocument) {
      res.status(200).json({
        data:0
      })
    }else{
        res.status(200).json({
            data:countDocument.count
        })
    }
}
export default{
    findOne,
}