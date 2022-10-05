const router = require('express').Router()
const status = require('../routes/routes')
router.get('/health',(req,res) => {
    res.status(200).json({
        message: "success"
    })
})

router.use(status)

module.exports = router