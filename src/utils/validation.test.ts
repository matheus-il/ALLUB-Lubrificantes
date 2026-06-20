import { describe, it, expect } from 'vitest';
import { validateCPF, validateCNPJ, formatPhone } from './validation';

describe('Validações do Cliente', () => {
  it('deve validar CPF corretamente', () => {
    expect(validateCPF('111.111.111-11')).toBe(false);
    expect(validateCPF('123.456.789-00')).toBe(false);
    expect(validateCPF('00000000000')).toBe(false);
    // CPF matematicamente válido
    expect(validateCPF('52998224725')).toBe(true);
    expect(validateCPF('529.982.247-25')).toBe(true);
  });

  it('deve validar CNPJ corretamente', () => {
    expect(validateCNPJ('00.000.000/0000-00')).toBe(false);
    expect(validateCNPJ('11111111111111')).toBe(false);
    // CNPJ matematicamente válido
    expect(validateCNPJ('12345678000195')).toBe(true);
    expect(validateCNPJ('12.345.678/0001-95')).toBe(true);
  });

  it('deve formatar telefones com a máscara correta', () => {
    expect(formatPhone('11999999999')).toBe('(11) 99999-9999');
    expect(formatPhone('1188888888')).toBe('(11) 8888-8888');
  });
});
