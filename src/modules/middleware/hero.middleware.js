export const catchReqFile=(req,res,next)=>{
  if(!req.file) {
    return res.status(400).json({ message: "No files were uploaded." });
  }
  req.body.Image=req.file.path
  next();
}