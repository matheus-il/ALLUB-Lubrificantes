/**
 * Remove caracteres não numéricos.
 */
export function cleanDoc(val: string): string {
  return val.replace(/\D/g, '');
}

/**
 * Validação matemática de CPF.
 */
export function validateCPF(cpfRaw: string): boolean {
  const cpf = cleanDoc(cpfRaw);
  if (cpf.length !== 11) return false;

  // Impede CPFs com todos os dígitos iguais
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  // Validação do primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let rev = 11 - (sum % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(9))) return false;

  // Validação do segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  rev = 11 - (sum % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(10))) return false;

  return true;
}

/**
 * Validação matemática de CNPJ.
 */
export function validateCNPJ(cnpjRaw: string): boolean {
  const cnpj = cleanDoc(cnpjRaw);
  if (cnpj.length !== 14) return false;

  // Impede CNPJs com todos os dígitos iguais
  if (/^(\d)\1{13}$/.test(cnpj)) return false;

  // Validação do primeiro dígito verificador
  let size = cnpj.length - 2;
  let numbers = cnpj.substring(0, size);
  const digits = cnpj.substring(size);
  let sum = 0;
  let pos = size - 7;
  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(0))) return false;

  // Validação do segundo dígito verificador
  size = size + 1;
  numbers = cnpj.substring(0, size);
  sum = 0;
  pos = size - 7;
  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(1))) return false;

  return true;
}

/**
 * Formata número de telefone com máscara (11) 99999-9999 ou (11) 9999-9999.
 */
export function formatPhone(phoneRaw: string): string {
  const cleaned = cleanDoc(phoneRaw);
  if (cleaned.length <= 2) return cleaned;
  if (cleaned.length <= 6) {
    return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2)}`;
  }
  if (cleaned.length <= 10) {
    return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2, 6)}-${cleaned.substring(6)}`;
  }
  return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2, 7)}-${cleaned.substring(7, 11)}`;
}

/**
 * Formata CPF ou CNPJ com a respectiva pontuação padrão.
 */
export function formatCPFOrCNPJ(docRaw: string): string {
  const cleaned = cleanDoc(docRaw);
  if (cleaned.length <= 11) {
    // CPF: 999.999.999-99
    return cleaned
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  } else {
    // CNPJ: 99.999.999/9999-99
    return cleaned
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d{1,2})$/, '$1-$2');
  }
}
