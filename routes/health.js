const router = require('express').Router()
const status = require('../routes/routes')
router.get('/health',(req,res) => {
    res.status(200).json({
        message: "success"
    })
})

router.use('/api/v1/students',status)

module.exports = router