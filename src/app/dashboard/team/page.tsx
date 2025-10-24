'use client';

import React from 'react';
import { Users, Mail, UserPlus, Shield } from 'lucide-react';

export default function TeamManagementPage() {
  const members = [
    { name: 'Kuncham Venkata Satya Manikanta', email: 'mk1343093@gmail.com', role: 'Owner', date: 'Jun 2024' },
    { name: 'Valeff Labs Reviewer', email: 'lead@valefflabs.com', role: 'Admin', date: 'Jul 2024' },
    { name: 'Systems Engineer', email: 'devops@valefflabs.com', role: 'Member', date: 'Aug 2024' },
  ];

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Team Members</h1>
          <p className="text-xs text-slate-400 mt-1">Manage team access and role-based access control (RBAC).</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition">
          <UserPlus className="w-4 h-4" /> Invite Member
        </button>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 overflow-hidden">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-slate-900/80 text-[11px] text-slate-400 uppercase border-b border-slate-800">
            <tr>
              <th className="px-5 py-3.5">User</th>
              <th className="px-5 py-3.5">Role</th>
              <th className="px-5 py-3.5">Joined</th>
              <th className="px-5 py-3.5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {members.map((m, idx) => (
              <tr key={idx}>
                <td className="px-5 py-3.5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center font-bold text-sky-400">
                    {m.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{m.name}</div>
                    <div className="text-slate-400 text-[11px]">{m.email}</div>
                  </div>
                </td>
                <td className="px-5 py-3.5">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                    m.role === 'Owner' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                    m.role === 'Admin' ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20' :
                    'bg-slate-800 text-slate-400'
                  }`}>
                    {m.role}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-slate-400">{m.date}</td>
                <td className="px-5 py-3.5 text-right text-slate-500 hover:text-white cursor-pointer font-medium">
                  Configure
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
