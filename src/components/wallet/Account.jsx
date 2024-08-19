import * as React from 'react'
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'

export function Account() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  // const { data: ensName } = useEnsName({ address })
  // const { data: ensAvatar } = useEnsAvatar({ name: ensName })

  return (
    <div>
      {address && <div>{ address}</div>}
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  )
}