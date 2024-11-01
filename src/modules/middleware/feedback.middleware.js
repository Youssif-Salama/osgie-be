export const catchReqFile=(req,res,next)=>{
  if(req.file)   req.body.Image=req.file.path
  next();
}