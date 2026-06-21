import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Clientes } from './Clientes';

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

describe('Clientes Component - Associação de Labels e Inputs no Modal', () => {
  it('deve exibir todos os campos do formulário associados às suas labels no modal de cadastro', () => {
    const { container } = render(<Clientes userId="user-123" />);

    // Encontra o botão flutuante de adicionar e clica para abrir o modal
    const addButton = container.querySelector('button[style*="position: absolute"]');
    expect(addButton).not.toBeNull();
    fireEvent.click(addButton!);

    // Lista de labels e seus respectivos textos esperados no modal
    const labelsEsperadas = [
      /cpf ou cnpj/i,
      /nome fantasia/i,
      /razão social/i,
      /cep/i,
      /número/i,
      /rua/i,
      /bairro/i,
      /cidade/i,
      /estado/i,
      /telefone 1/i,
      /telefone 2/i,
      /e-mail/i
    ];

    // Busca cada input por label text e valida se ele é um HTMLInputElement válido
    labelsEsperadas.forEach((labelText) => {
      const input = screen.getByLabelText(labelText);
      expect(input).toBeInTheDocument();
      expect(input.tagName).toBe('INPUT');
    });
  });
});
