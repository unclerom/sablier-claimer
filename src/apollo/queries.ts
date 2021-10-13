import { gql } from '@apollo/client'

export const USER_STREAMS = gql`
  query UserStreams($account: Bytes) {
    streams(where: { recipient: $account }) {
      id
      deposit
      timestamp
      sender
      recipient
      startTime
      stopTime
      ratePerSecond
      token {
        id
        symbol
        name
        decimals
      }
      txs {
        id
        block
        event
        from
        timestamp
        to
      }
      withdrawals {
        id
        timestamp
        amount
        txhash
        stream {
          id
        }
      }
      cancellation {
        id
        timestamp
        recipientBalance
        senderBalance
        txhash
      }
    }
  }
`

export const USER_SINGLE_STREAM = gql`
  query UserSingleStream($id: ID!) {
    stream(id: $id) {
      id
      deposit
      sender
      recipient
      startTime
      stopTime
      ratePerSecond
      token {
        id
        name
        decimals
        symbol
      }
      txs {
        event
        txhash
        timestamp
      }
      withdrawals {
        id
        timestamp
        amount
        txhash
      }
      cancellation {
        id
        timestamp
        recipientBalance
        senderBalance
        txhash
      }
    }
    streamToSalary(id: $id) {
      salaryId
    }
  }
`
