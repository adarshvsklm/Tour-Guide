// let express = require('express')
import express from'express'
import Authentication from '../Controller/Admin/Authentication.js'
import { block, unBlock } from '../Controller/Admin/ManageUser.js';
import { viewUsers } from '../Controller/Admin/viewUsers.js';

let router = express.Router();

router.post('/login',Authentication.login)
router.get('/logout',Authentication.logout)
router.get('/users',viewUsers)
router.patch('/user/block',block)
router.patch('/user/unBlock',unBlock)


export default router;