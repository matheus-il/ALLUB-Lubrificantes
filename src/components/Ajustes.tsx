import React from 'react';
import { supabase } from '../supabase';
import { LogOut, Wifi, User, ShieldCheck } from 'lucide-react';

interface AjustesProps {
  userEmail: string;
  onLogout: () => void;
}

export const Ajustes: React.FC<AjustesProps> = ({ userEmail, onLogout }) => {
  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      onLogout();
    } catch (err: any) {
      alert('Erro ao sair: ' + err.message);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '24px 24px 88px 24px', gap: '20px', height: '100%' }}>
      <h2 style={{ fontSize: 22, color: '#fff', marginBottom: 8 }}>Configurações</h2>

      {/* Card do Usuário */}
      <div 
        className="glass" 
        style={{
          borderRadius: 'var(--radius-md)',
          padding: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <div 
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 'var(--primary-glow)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'var(--primary)',
            border: '1px solid var(--border-color)'
          }}
        >
          <User size={24} />
        </div>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <h3 style={{ fontSize: 15, color: '#fff', fontWeight: 600 }}>Usuário Conectado</h3>
          <p 
            style={{ 
              fontSize: 13, 
              color: 'var(--text-secondary)', 
              overflow: 'hidden', 
              textOverflow: 'ellipsis', 
              whiteSpace: 'nowrap',
              marginTop: 2
            }}
          >
            {userEmail}
          </p>
        </div>
      </div>

      {/* Card de Status da Conexão */}
      <div 
        className="glass" 
        style={{
          borderRadius: 'var(--radius-md)',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Wifi size={18} color="var(--success)" />
          <div style={{ flex: 1 }}>
            <h4 style={{ fontSize: 14, color: '#fff', fontWeight: 500 }}>Conexão com Banco</h4>
            <p style={{ fontSize: 12, color: 'var(--success)', marginTop: 2 }}>Sincronização 100% Online Ativa</p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
          <ShieldCheck size={18} color="var(--primary)" />
          <div style={{ flex: 1 }}>
            <h4 style={{ fontSize: 14, color: '#fff', fontWeight: 500 }}>Segurança de Dados</h4>
            <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>Políticas RLS do Supabase Ativas</p>
          </div>
        </div>
      </div>

      {/* Botão de Logout */}
      <button 
        onClick={handleSignOut} 
        className="btn btn-secondary" 
        style={{ 
          marginTop: 'auto', 
          borderColor: 'rgba(239, 68, 68, 0.2)', 
          color: 'var(--danger)',
          backgroundColor: 'rgba(239, 68, 68, 0.03)'
        }}
      >
        <LogOut size={16} /> Sair da Conta
      </button>
    </div>
  );
};
