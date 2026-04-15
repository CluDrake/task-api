import { query } from "express-validator";
import { checkValidationResults } from "./handleValidationErrors.js";

export const validateTaskQuery = [
  query('completed')
    .optional()
    .isBoolean()
    .withMessage('completed must be either true or false'),

  checkValidationResults,   
];