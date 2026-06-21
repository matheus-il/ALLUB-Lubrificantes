import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Produtos } from './Produtos';

// Mock Supabase
vi.mock('../supabase', () => ({
  supabase: {
    from: vi.fn().mockReturnThis(),
    select: vi.fn().mockReturnThis(),
    eq: vi.fn().mockResolvedValue({ data: [], error: null }),
    insert: vi.fn().mockResolvedValue({ error: null }),
    update: vi.fn().mockReturnThis(),
  },
}));

describe('Produtos Component - Novo Campo de Código e Validação de Valor', () => {
  it('deve exibir o campo de código e permitir edição no modal de cadastro', () => {
    const { container } = render(<Produtos userId="user-123" />);
    
    // Encontra o botão de adicionar (floating action button) e clica
    const addButton = container.querySelector('button[style*="position: absolute"]');
    expect(addButton).not.toBeNull();
    fireEvent.click(addButton!);

    // Verifica se o campo Código do Produto está presente e NÃO está disabled
    const codigoInput = screen.getByLabelText(/código/i) as HTMLInputElement;
    expect(codigoInput).toBeInTheDocument();
    expect(codigoInput.disabled).toBe(false);

    // Permite digitação
    fireEvent.change(codigoInput, { target: { value: '9876' } });
    expect(codigoInput.value).toBe('9876');
  });

  it('deve bloquear a digitação de letras no campo de valor e aceitar apenas formato correto', () => {
    const { container } = render(<Produtos userId="user-123" />);
    const addButton = container.querySelector('button[style*="position: absolute"]');
    fireEvent.click(addButton!);

    const valorInput = screen.getByLabelText(/valor/i) as HTMLInputElement;
    expect(valorInput).toBeInTheDocument();

    // Tenta digitar letras
    fireEvent.change(valorInput, { target: { value: 'abc' } });
    // Deve ser sanitizado para vazio
    expect(valorInput.value).toBe('');

    // Tenta digitar números com letras
    fireEvent.change(valorInput, { target: { value: '12a34' } });
    expect(valorInput.value).toBe('1234');
  });
});
