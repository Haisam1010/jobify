const notFoundMiddleWare = (req,res) =>{
    res.status(404).send('Route Does Not Found')
}
export default notFoundMiddleWare