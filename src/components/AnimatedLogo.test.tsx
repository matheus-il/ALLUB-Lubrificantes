import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { AnimatedLogo } from './AnimatedLogo';

describe('AnimatedLogo Component', () => {
  it('deve renderizar a estrutura SVG da logo animada com os IDs de animação corretos', () => {
    const { container } = render(<AnimatedLogo size="large" />);
    
    // Verifica se os elementos com os caminhos geométricos e IDs existem no DOM
    const setasVerdes = container.querySelector('#setas-verdes');
    const engrenagemAzul = container.querySelector('#engrenagem-azul');
    const galaoPreto = container.querySelector('#galao-preto');
    const gotaOleo = container.querySelector('#gota-oleo');

    expect(setasVerdes).not.toBeNull();
    expect(engrenagemAzul).not.toBeNull();
    expect(galaoPreto).not.toBeNull();
    expect(gotaOleo).not.toBeNull();
  });
});
