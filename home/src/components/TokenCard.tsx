import React from 'react'

interface TokenCardProps {
  token: {
    name: string
    symbol: string
    icon: string
    color: string
    displayAmount: string
    tokenType: number
  }
  onMintClear: () => void
  onMintEncrypted: () => void
}

export const TokenCard: React.FC<TokenCardProps> = ({ token, onMintClear, onMintEncrypted }) => {
  return (
    <div className="token-card">
      <div className={`token-icon ${token.color}`}>{token.icon}</div>
      <h3>{token.name}</h3>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>{token.symbol}</p>
      <div style={{ background: '#f8f9fa', padding: '12px', borderRadius: '8px', marginBottom: '16px' }}>
        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#28a745' }}>{token.displayAmount}</div>
        <div style={{ fontSize: '12px', color: '#666' }}>领取数量</div>
      </div>
      <button className="button" onClick={onMintClear} style={{ marginTop: '8px' }}>
        Mint {token.symbol} (clear)
      </button>
      <button className="button" onClick={onMintEncrypted} style={{ marginTop: '8px' }}>
        Mint {token.symbol} (encrypted)
      </button>
    </div>
  )
}
