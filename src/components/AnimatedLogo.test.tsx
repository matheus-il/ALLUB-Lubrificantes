import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { AnimatedLogo } from './AnimatedLogo';

describe('AnimatedLogo Component', () => {
  it('deve renderizar a estrutura SVG da logo animada com os IDs de animação corretos', () => {
    const { container } = render(<AnimatedLogo size="large" />);
    
    // Verifica se os elementos com os caminhos geométricos e IDs existem no DOM
    const logoSvg = container.querySelector('#logo-svg');
    const setasVerdes = container.querySelector('#setas-verdes');
    const engrenagemAzul = container.querySelector('#engrenagem-azul');
    const galaoPreto = container.querySelector('#galao-preto');
    const gotaOleo = container.querySelector('#gota-oleo');
    const pontaSuperior = container.querySelector('#seta-ponta-superior');
    const pontaInferior = container.querySelector('#seta-ponta-inferior');

    expect(logoSvg).not.toBeNull();
    expect(logoSvg?.getAttribute('translate')).toBe('no');
    expect(setasVerdes).not.toBeNull();
    expect(engrenagemAzul).not.toBeNull();
    expect(galaoPreto).not.toBeNull();
    expect(gotaOleo).not.toBeNull();

    // Verificações das pontas tangenciais (Opção 1)
    expect(pontaSuperior).not.toBeNull();
    expect(pontaSuperior?.getAttribute('transform')).toContain('translate(176.2, 56.0)');
    expect(pontaSuperior?.getAttribute('transform')).toContain('rotate(-30)');

    expect(pontaInferior).not.toBeNull();
    expect(pontaInferior?.getAttribute('transform')).toContain('translate(23.8, 144.0)');
    expect(pontaInferior?.getAttribute('transform')).toContain('rotate(150)');
  });
});

