const asynchandler=(requestHandler)=>{
   return async(req,res,next)=>{
        await Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err));
   }
}

export {asynchandler}