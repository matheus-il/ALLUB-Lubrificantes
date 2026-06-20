import { useState, useEffect } from 'react';
import { supabase } from './supabase';
import { Login } from './components/Login';
import { Clientes } from './components/Clientes';
import { Produtos } from './components/Produtos';
import { Ajustes } from './components/Ajustes';
import { AnimatedLogo } from './components/AnimatedLogo';
import { Users, Package, Settings } from 'lucide-react';
import type { Session } from '@supabase/supabase-js';

function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'clientes' | 'produtos' | 'ajustes'>('clientes');

  useEffect(() => {
    // Busca sessão inicial
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setAuthLoading(false);
    });

    // Escuta mudanças de autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setAuthLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (authLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#0f1013' }}>
        <div className="spinner" />
      </div>
    );
  }

  // Se não estiver logado, renderiza a tela de login
  if (!session) {
    return (
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Login onLoginSuccess={() => {}} />
      </div>
    );
  }

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'clientes':
        return <Clientes userId={session.user.id} />;
      case 'produtos':
        return <Produtos userId={session.user.id} />;
      case 'ajustes':
        return <Ajustes userEmail={session.user.email || ''} onLogout={() => setSession(null)} />;
      default:
        return <Clientes userId={session.user.id} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', overflow: 'hidden' }}>
      
      {/* Header Fixo */}
      <header 
        className="glass" 
        style={{
          padding: '12px 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 10,
          borderBottom: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <AnimatedLogo size="small" />
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text-secondary)' }}>
          <span 
            style={{ 
              width: 8, 
              height: 8, 
              borderRadius: '50%', 
              backgroundColor: 'var(--success)',
              display: 'inline-block'
            }} 
          />
          <span>Online</span>
        </div>
      </header>

      {/* Conteúdo Principal Scrollável */}
      <main style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        {renderActiveTab()}
      </main>

      {/* Navegação Inferior (Bottom Tabs) */}
      <nav 
        className="glass" 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '68px',
          display: 'grid',
          gridTemplateColumns: '1/3 1/3 1/3',
          gridAutoFlow: 'column',
          alignItems: 'center',
          borderTop: '1px solid var(--border-color)',
          boxShadow: '0 -4px 10px rgba(0,0,0,0.3)',
          zIndex: 10
        }}
      >
        {/* Aba Clientes */}
        <button
          onClick={() => setActiveTab('clientes')}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            color: activeTab === 'clientes' ? 'var(--primary)' : 'var(--text-secondary)',
            cursor: 'pointer',
            fontSize: 11,
            fontWeight: activeTab === 'clientes' ? 600 : 500,
            transition: 'color 0.2s'
          }}
        >
          <Users size={20} style={{ filter: activeTab === 'clientes' ? 'drop-shadow(0 0 4px var(--primary-glow))' : 'none' }} />
          <span>Clientes</span>
        </button>

        {/* Aba Produtos */}
        <button
          onClick={() => setActiveTab('produtos')}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            color: activeTab === 'produtos' ? 'var(--primary)' : 'var(--text-secondary)',
            cursor: 'pointer',
            fontSize: 11,
            fontWeight: activeTab === 'produtos' ? 600 : 500,
            transition: 'color 0.2s'
          }}
        >
          <Package size={20} style={{ filter: activeTab === 'produtos' ? 'drop-shadow(0 0 4px var(--primary-glow))' : 'none' }} />
          <span>Produtos</span>
        </button>

        {/* Aba Ajustes */}
        <button
          onClick={() => setActiveTab('ajustes')}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            color: activeTab === 'ajustes' ? 'var(--primary)' : 'var(--text-secondary)',
            cursor: 'pointer',
            fontSize: 11,
            fontWeight: activeTab === 'ajustes' ? 600 : 500,
            transition: 'color 0.2s'
          }}
        >
          <Settings size={20} style={{ filter: activeTab === 'ajustes' ? 'drop-shadow(0 0 4px var(--primary-glow))' : 'none' }} />
          <span>Ajustes</span>
        </button>
      </nav>

    </div>
  );
}

export default App;
