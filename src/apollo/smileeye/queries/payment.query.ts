import gql from 'graphql-tag'

export const SORT_PAYMENTS = gql`
  query SortPayments($first: Int, $page: Int, $status: String) {
    sort_payments(first: $first, page: $page, status: $status) {
      id
      add_user_id
      goal_id
      goal {
        id
        name
        price
      }
      status
      type
      user_info
      code_sale
      money
      note
      attachments
      created_at
    }
  }
`

export const SUM_PAYMENT = gql`
  query SumPayment {
    sum_payment {
      sum
    }
  }
`
