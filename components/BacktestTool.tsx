"use client"

import React, { useState } from 'react'

export default function BacktestTool() {
  const [from, setFrom] = useState('2023-01-01')
  const [to, setTo] = useState('2023-12-31')
  const [selected, setSelected] = useState<string[]>([])

  return (
    <div className="bg-surface border border-border rounded-lg p-4">
      <div className="flex gap-3 mb-4">
        <div>
          <label className="text-xs text-foreground-muted">From</label>
          <input type="date" value={from} onChange={(e)=>setFrom(e.target.value)} className="block mt-1" />
        </div>
        <div>
          <label className="text-xs text-foreground-muted">To</label>
          <input type="date" value={to} onChange={(e)=>setTo(e.target.value)} className="block mt-1" />
        </div>
        <div>
          <label className="text-xs text-foreground-muted">Providers / Signals</label>
          <select multiple value={selected} onChange={(e)=> setSelected(Array.from(e.target.selectedOptions).map(o=>o.value))} className="block mt-1">
            <option value="providerA">Provider A</option>
            <option value="providerB">Provider B</option>
            <option value="signalX">Signal X</option>
            <option value="signalY">Signal Y</option>
          </select>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="px-4 py-2 bg-purple-500 rounded text-white">Run Simulation</button>
        <button className="px-3 py-2 bg-surface-high text-foreground rounded">Export CSV</button>
      </div>

      <div className="mt-6 text-gray-400">
        <p>Simulated results, win rate, drawdown and charts will appear here after running the simulation.</p>
      </div>
    </div>
  )
}
