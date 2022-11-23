import express from 'express';
import { createUser } from '../controllers/users.js';
import { getAllUser } from '../controllers/users.js';
import { getOneUser } from '../controllers/users.js';
import { updateUser } from '../controllers/users.js';
import { deleteUser } from '../controllers/users.js';
const router = express.Router();

// all routes starts with /users, so only / is enough


router.get('/', getAllUser);

router.post('/', createUser);

router.get('/:id', getOneUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;