const couseRouter = require('express').Router();
const couseContoller = require('../controller/course.controller');

couseRouter.post('/',couseContoller.registerCourse);
couseRouter.get('/',couseContoller.getCourse);
couseRouter.get('/:id',couseContoller.viewCourse);
couseRouter.patch('/:id/:uid',couseContoller.enrollToCourse);
couseRouter.patch('/:id',couseContoller.updateCourse);
couseRouter.post('/:id',couseContoller.addLecture);

module.exports = couseRouter;