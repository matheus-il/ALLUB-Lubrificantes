import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

interface AnimatedLogoProps {
  size?: 'small' | 'large';
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ size = 'small' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Animação das setas verdes em loop (sentido horário)
    const setasAnim = animate('#setas-verdes', {
      rotate: '1turn',
      duration: 8000,
      easing: 'linear',
      loop: true
    });

    // Animação da engrenagem azul em loop (sentido horário)
    const engrenagemAnim = animate('#engrenagem-azul', {
      rotate: '1turn',
      duration: 12000,
      easing: 'linear',
      loop: true
    });

    // Animação realista da gota de óleo pingando em loop
    const gotaAnim = animate('#gota-oleo', {
      translateY: [0, 45],
      scaleY: [
        { value: 1, duration: 0 },
        { value: 1.6, duration: 400, easing: 'easeInQuad' },
        { value: 1.2, duration: 400, easing: 'easeOutQuad' },
        { value: 0.1, duration: 200 }
      ],
      scaleX: [
        { value: 1, duration: 0 },
        { value: 0.7, duration: 400, easing: 'easeInQuad' },
        { value: 0.9, duration: 400, easing: 'easeOutQuad' },
        { value: 0.1, duration: 200 }
      ],
      opacity: [
        { value: 0, duration: 0 },
        { value: 1, duration: 150 },
        { value: 1, duration: 650 },
        { value: 0, duration: 200, easing: 'easeOutQuad' }
      ],
      duration: 2000,
      easing: 'easeInQuad',
      loop: true
    });

    // Animação das letras surgindo em efeito cascata
    const textAnim = animate('.logo-letter', {
      opacity: [0, 1],
      translateY: [20, 0],
      scale: [0.5, 1],
      delay: stagger(60, { start: 250 }),
      duration: 600,
      easing: 'easeOutBack'
    });

    return () => {
      setasAnim.revert();
      engrenagemAnim.revert();
      gotaAnim.revert();
      textAnim.revert();
    };
  }, []);

  const handleHover = () => {
    // Leve pulso na engrenagem quando passar o mouse
    const engrenagem = document.querySelector('#engrenagem-azul');
    if (engrenagem) {
      animate(engrenagem, {
        scale: [1, 1.15, 1],
        duration: 500,
        easing: 'easeInOutBack'
      });
    }
  };

  const isLarge = size === 'large';

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleHover}
      onTouchStart={handleHover}
      className="notranslate"
      translate="no"
      style={{
        display: 'flex',
        flexDirection: isLarge ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: isLarge ? 12 : 8,
        cursor: 'pointer',
        padding: isLarge ? '20px 0' : '4px 0',
      }}
    >
      {/* SVG da Logo ALLUB Redesenhado e Animado */}
      <svg
        width={isLarge ? 120 : 60}
        height={isLarge ? 120 : 60}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0 0 10px var(--primary-glow))' }}
      >
        {/* GRUPO DAS SETAS VERDES */}
        <g id="setas-verdes" style={{ transformOrigin: '100px 100px' }}>
          {/* Seta Superior (Sentido Horário) */}
          <path
            d="M 35,100 A 65,65 0 0,1 155,60"
            stroke="#74b22c"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
          />
          <path d="M 144,45 L 168,60 L 149,80 Z" fill="#74b22c" />

          {/* Seta Inferior (Sentido Horário) */}
          <path
            d="M 165,100 A 65,65 0 0,1 45,140"
            stroke="#74b22c"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
          />
          <path d="M 56,155 L 32,140 L 51,120 Z" fill="#74b22c" />
        </g>

        {/* GRUPO DA ENGRENAGEM AZUL */}
        <g id="engrenagem-azul" style={{ transformOrigin: '100px 100px' }}>
          {/* Aro da engrenagem com centro oco/transparente */}
          <circle cx="100" cy="100" r="40" stroke="#00315a" strokeWidth="14" fill="none" />
          
          {/* Dentes da engrenagem (12 dentes rotacionados) */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
            <rect
              key={angle}
              x="93"
              y="40"
              width="14"
              height="14"
              rx="2"
              fill="#00315a"
              transform={`rotate(${angle} 100 100)`}
            />
          ))}
        </g>

        {/* GRUPO DO GALÃO DE ÓLEO (Inclinado para a esquerda/derramando) */}
        <g id="galao-preto" fill="#111" transform="translate(0, 5) rotate(-15 100 100)">
          {/* Corpo principal do galão */}
          <rect x="75" y="92" width="40" height="24" rx="4" />
          
          {/* Alça do galão */}
          <path d="M 75,96 L 62,96 L 62,112 L 75,112 L 75,106 L 67,106 L 67,102 L 75,102 Z" />
          
          {/* Tampa do galão */}
          <rect x="85" y="85" width="4" height="7" />
          <rect x="81" y="82" width="12" height="3" rx="1" />
          
          {/* Bico longo do galão */}
          <path d="M 115,96 L 138,91 C 143,90 148,94 148,99 L 143,105 C 140,102 135,101 115,101 Z" />
        </g>

        {/* GOTA DE ÓLEO PINGANDO (Independente para animação translateY) */}
        <path
          id="gota-oleo"
          d="M 136,105 C 136,105 132,113 132,116 C 132,119 134,121 137,121 C 140,121 142,119 142,116 C 142,113 138,105 138,105 Z"
          fill="#111"
          style={{ transformOrigin: '137px 105px' }}
        />
      </svg>

      {/* Nome da Marca com letras divididas para animação */}
      <div
        ref={textRef}
        className="notranslate"
        translate="no"
        style={{
          display: 'flex',
          fontFamily: 'var(--font-heading)',
          fontSize: isLarge ? 32 : 20,
          fontWeight: 800,
          letterSpacing: -0.5,
          color: '#fff',
          textTransform: 'uppercase',
        }}
      >
        {['A', 'l', 'l', 'u', 'b'].map((char, index) => (
          <span
            key={index}
            className="logo-letter"
            style={{
              display: 'inline-block',
              color: index >= 2 ? 'var(--primary)' : '#fff',
              opacity: 0,
            }}
          >
            {char}
          </span>
        ))}
        {isLarge && (
          <span
            className="logo-letter"
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: 'var(--text-secondary)',
              letterSpacing: 2,
              marginTop: 4,
              display: 'block',
              width: '100%',
              textAlign: 'center',
            }}
          >
            LUBRIFICANTES
          </span>
        )}
      </div>
    </div>
  );
};
