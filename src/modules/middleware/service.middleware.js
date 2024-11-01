export const catchReqFile=(req,res,next)=>{
  if(req.file) req.body.Icon=req.file.path
  next();
}