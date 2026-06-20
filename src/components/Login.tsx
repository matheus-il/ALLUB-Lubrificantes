import React, { useState } from 'react';
import { supabase } from '../supabase';
import { AnimatedLogo } from './AnimatedLogo';
import { LogIn, UserPlus, Eye, EyeOff } from 'lucide-react';

interface LoginProps {
  onLoginSuccess: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);
    setLoading(true);

    try {
      if (isSignUp) {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
        });
        if (signUpError) throw signUpError;
        if (data.user && data.session) {
          onLoginSuccess();
        } else {
          setSuccessMsg('Cadastro realizado! Verifique seu e-mail para confirmação se necessário.');
        }
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (signInError) throw signInError;
        onLoginSuccess();
      }
    } catch (err: any) {
      setError(err.message || 'Ocorreu um erro inesperado.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 24px',
        height: '100%',
        gap: 24,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <AnimatedLogo size="large" />
        <h2 style={{ fontSize: 22, marginTop: 12, color: 'var(--text-primary)' }}>
          {isSignUp ? 'Criar Nova Conta' : 'Acessar Painel'}
        </h2>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 4 }}>
          {isSignUp
            ? 'Cadastre-se para gerenciar seus clientes e produtos'
            : 'Faça login para gerenciar clientes e produtos'}
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        {error && (
          <div
            style={{
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: 'var(--radius-md)',
              padding: '12px',
              fontSize: 14,
              color: 'var(--danger)',
              marginBottom: 16,
              textAlign: 'center',
            }}
          >
            {error}
          </div>
        )}

        {successMsg && (
          <div
            style={{
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: 'var(--radius-md)',
              padding: '12px',
              fontSize: 14,
              color: 'var(--success)',
              marginBottom: 16,
              textAlign: 'center',
            }}
          >
            {successMsg}
          </div>
        )}

        <div className="input-group">
          <label className="input-label" htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            required
            className="input-field"
            placeholder="seuemail@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group" style={{ position: 'relative' }}>
          <label className="input-label" htmlFor="password">Senha</label>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              required
              minLength={6}
              className="input-field"
              placeholder="••••••••"
              style={{ width: '100%', paddingRight: 48 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: 12,
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <button type="submit" className="btn btn-primary" style={{ marginTop: 8 }} disabled={loading}>
          {loading ? (
            <div className="spinner" style={{ width: 20, height: 20, borderWidth: 2 }} />
          ) : isSignUp ? (
            <>
              <UserPlus size={18} /> Cadastrar
            </>
          ) : (
            <>
              <LogIn size={18} /> Entrar
            </>
          )}
        </button>
      </form>

      <button
        onClick={() => {
          setIsSignUp(!isSignUp);
          setError(null);
          setSuccessMsg(null);
        }}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--primary)',
          fontSize: 14,
          fontWeight: 600,
          cursor: 'pointer',
          textDecoration: 'underline',
          marginTop: 8,
        }}
      >
        {isSignUp ? 'Já tem uma conta? Entrar' : 'Não tem conta? Cadastre-se'}
      </button>
    </div>
  );
};
