const express = require('express')
const categoriesContr = require('../controller/categoriesContr.js')
const router = express()

//外置路由链式结构
router.get('/categories',categoriesContr.categories)//加载静态页面
        .get('/getAllData',categoriesContr.getAllData)//处理动态渲染数据路由
        .post('/addSort',categoriesContr.addSort)//处理新增分类数据
        .get('/selSortById',categoriesContr.selSortById)//处理编辑分类内容
        .post('/updateCategories',categoriesContr.updateCategories)//处理编辑提交的数据
        .get('/delSort',categoriesContr.delSort)//处理删除分类
        .post('/delAllSort',categoriesContr.delAllSort)//批量删除
//暴露接口
module.exports = router