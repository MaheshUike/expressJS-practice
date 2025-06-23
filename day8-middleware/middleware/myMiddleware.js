function myMiddleware (req,res,next){
    console.log("middlware is running")
    next()
}

export default myMiddleware;