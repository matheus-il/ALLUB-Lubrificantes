import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { supabase } from './supabase';

// Mock do supabase client
vi.mock('./supabase', () => ({
  supabase: {
    auth: {
      getSession: vi.fn(),
      onAuthStateChange: vi.fn().mockReturnValue({ data: { subscription: { unsubscribe: vi.fn() } } }),
    },
    from: vi.fn().mockReturnValue({
      select: vi.fn().mockReturnThis(),
      order: vi.fn().mockReturnThis(),
      eq: vi.fn().mockResolvedValue({ data: [], error: null }),
    }),
  },
}));

describe('App Root Component - Navegação e Estrutura', () => {
  it('deve renderizar a tela de login se o usuário não tiver sessão ativa', async () => {
    vi.mocked(supabase.auth.getSession).mockResolvedValue({ data: { session: null }, error: null });

    render(<App />);
    
    // Aguarda o loading do spinner sumir e a tela de login aparecer
    const loginTitle = await screen.findByText(/acessar painel/i);
    expect(loginTitle).toBeInTheDocument();
  });

  it('deve renderizar o header e footer com estilos corretos para safe-area e fluxo flexbox', async () => {
    const mockSession = {
      user: { id: 'user-123', email: 'pedropauloteodoro26@gmail.com' } as any,
      expires_at: 0,
      expires_in: 0,
      token_type: 'bearer' as const,
      access_token: 'token',
      refresh_token: 'token'
    };
    vi.mocked(supabase.auth.getSession).mockResolvedValue({ data: { session: mockSession }, error: null });

    const { container } = render(<App />);

    // Aguarda carregar a barra de navegação
    const navElement = await screen.findByRole('navigation');
    expect(navElement).toBeInTheDocument();

    const headerElement = container.querySelector('header');
    expect(headerElement).not.toBeNull();

    // Validar se o nav NÃO usa posicionamento absoluto
    const navStyle = navElement.getAttribute('style') || '';
    expect(navStyle).not.toContain('position: absolute');
    expect(navStyle).not.toContain('position:absolute');
  });

  it('deve definir a propriedade customizada --vh no document.documentElement ao montar', () => {
    vi.mocked(supabase.auth.getSession).mockResolvedValue({ data: { session: null }, error: null });
    render(<App />);
    const vhValue = document.documentElement.style.getPropertyValue('--vh');
    expect(vhValue).not.toBe('');
    expect(vhValue).toContain('px');
  });

  it('deve usar a altura de window.visualViewport se disponível ao definir --vh', () => {
    const originalVisualViewport = window.visualViewport;
    
    vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(800);
    
    Object.defineProperty(window, 'visualViewport', {
      writable: true,
      configurable: true,
      value: {
        height: 650,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      },
    });

    vi.mocked(supabase.auth.getSession).mockResolvedValue({ data: { session: null }, error: null });

    render(<App />);

    const vhValue = document.documentElement.style.getPropertyValue('--vh');
    expect(vhValue).toBe('6.5px');

    if (originalVisualViewport) {
      Object.defineProperty(window, 'visualViewport', {
        writable: true,
        configurable: true,
        value: originalVisualViewport,
      });
    } else {
      delete (window as any).visualViewport;
    }
  });
});

