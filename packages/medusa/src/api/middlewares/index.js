import { default as authenticateCustomer } from "./authenticate-customer"
import { default as authenticate } from "./authenticate"
import { default as normalizeQuery } from "./normalized-query"
import { default as wrap } from "./await-middleware"

export * from "./batch-job/get-requested-batch-job"
export * from "./batch-job/can-access-batch-job"

export default {
  authenticate,
  authenticateCustomer,
  normalizeQuery,
  wrap,
}
