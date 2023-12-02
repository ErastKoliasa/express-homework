module.exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    if(err.statusCode) return res.status(err.statusCode).json({error: err.message});
    res.status(500).json({error: 'Something went wrong'})
}