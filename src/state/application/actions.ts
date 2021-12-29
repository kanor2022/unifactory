import { createAction } from '@reduxjs/toolkit'
import { TokenList } from '@uniswap/token-lists'
import { StorageState } from './reducer'

export type PopupContent =
  | {
      txn: {
        hash: string
        success: boolean
        summary?: string
      }
    }
  | {
      listUpdate: {
        listUrl: string
        oldList: TokenList
        newList: TokenList
        auto: boolean
      }
    }

export enum ApplicationModal {
  WALLET,
  SETTINGS,
  SELF_CLAIM,
  ADDRESS_CLAIM,
  CLAIM_POPUP,
  MENU,
  DELEGATE,
  VOTE,
  LANGUAGE,
}

export const setAppManagement = createAction<{ status: boolean }>('application/setAppManagement')

export const retrieveDomainData = createAction<{
  admin: string
  factory: string
  router: string
  storageAddr: string
  pairHash: string
  protocolFee?: number
  totalFee?: number
  allFeeToProtocol?: boolean
}>('application/retrieveDomainData')

export const updateAppData = createAction<StorageState>('application/updateAppData')

export const updateBlockNumber = createAction<{ chainId: number; blockNumber: number }>('application/updateBlockNumber')

export const setOpenModal = createAction<ApplicationModal | null>('application/setOpenModal')

export const addPopup =
  createAction<{ key?: string; removeAfterMs?: number | null; content: PopupContent }>('application/addPopup')

export const removePopup = createAction<{ key: string }>('application/removePopup')
