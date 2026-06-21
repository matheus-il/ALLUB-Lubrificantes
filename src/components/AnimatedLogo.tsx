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

    // Animação de entrada cinemática do SVG da logo
    const svgEntradaAnim = animate('#logo-svg', {
      opacity: [0, 1],
      scale: [0.4, 1],
      duration: 800,
      easing: 'easeOutBack'
    });

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

    // Animação fluida e contínua da gota de óleo pingando (com keyframes explícitos para fade-out de 1250ms)
    const gotaAnim = animate('#gota-oleo', {
      translateY: [
        { value: 0, duration: 0 },
        { value: 48, duration: 1400, easing: 'easeInQuad' }
      ],
      scaleY: [
        { value: 1, duration: 0 },
        { value: 1.6, duration: 800, easing: 'easeInQuad' },
        { value: 0.1, duration: 600, easing: 'easeOutQuad' }
      ],
      scaleX: [
        { value: 1, duration: 0 },
        { value: 0.7, duration: 800, easing: 'easeInQuad' },
        { value: 0.1, duration: 600, easing: 'easeOutQuad' }
      ],
      opacity: [
        { value: 0, duration: 0 },
        { value: 1, duration: 150, easing: 'linear' },
        { value: 0, duration: 1250, easing: 'linear' }
      ],
      duration: 1400,
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
      svgEntradaAnim.revert();
      setasAnim.revert();
      engrenagemAnim.revert();
      gotaAnim.revert();
      textAnim.revert();
    };
  }, []);

  const handleHover = () => {
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
        id="logo-svg"
        {...{ translate: "no" }}
        width={isLarge ? 120 : 60}
        height={isLarge ? 120 : 60}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ 
          opacity: 0, 
          filter: 'drop-shadow(0 0 10px var(--primary-glow))',
          transformOrigin: 'center'
        }}
      >
        {/* GRUPO DAS SETAS VERDES (Afastadas com raio 80, escala proporcional exata do triângulo perfeito) */}
        <g id="setas-verdes" style={{ transformOrigin: '100px 100px' }}>
          {/* Seta Superior (Sentido Horário) */}
          <path
            d="M 20,100 A 80,80 0 0,1 168,51"
            stroke="#74b22c"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          {/* Ponta da Seta Superior Simétrica Proporcional */}
          <path d="M 154,32 L 184,51 L 160,75 Z" fill="#74b22c" />

          {/* Seta Inferior (Sentido Horário) */}
          <path
            d="M 180,100 A 80,80 0 0,1 32,149"
            stroke="#74b22c"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          {/* Ponta da Seta Inferior Simétrica Proporcional */}
          <path d="M 46,168 L 16,149 L 40,125 Z" fill="#74b22c" />
        </g>

        {/* GRUPO DA ENGRENAGEM AZUL (Imponente: raio de aro 48) */}
        <g id="engrenagem-azul" style={{ transformOrigin: '100px 100px' }}>
          {/* Aro da engrenagem com centro oco/transparente */}
          <circle cx="100" cy="100" r="48" stroke="#0f3d64" strokeWidth="12" fill="none" />
          
          {/* Dentes da engrenagem (12 dentes rotacionados) */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
            <rect
              key={angle}
              x="94"
              y="34"
              width="12"
              height="12"
              rx="2"
              fill="#0f3d64"
              transform={`rotate(${angle} 100 100)`}
            />
          ))}
        </g>

        {/* GRUPO DO GALÃO DO ÓLEO (Alta fidelidade com alça oval integrada e cor ouro do app) */}
        <g id="galao-preto" fill="var(--primary)" transform="translate(0, 5) rotate(-15 100 100)">
          {/* Corpo principal e Alça traseira com furo oval no mesmo path (evenodd) */}
          <path
            fillRule="evenodd"
            d="M 75,90 C 68,90 62,95 62,102 L 62,114 C 62,121 68,126 75,126 L 115,126 C 122,126 127,121 127,114 L 127,102 C 127,95 122,90 115,90 L 75,90 Z M 75,97 C 72,97 70,99 70,102 L 70,114 C 70,117 72,119 75,119 L 77,119 L 77,97 L 75,97 Z"
          />
          
          {/* Tampa do galão */}
          <rect x="85" y="83" width="5" height="7" />
          <rect x="80" y="80" width="15" height="3" rx="1" />
          
          {/* Bico curvo e orgânico do galão */}
          <path d="M 115,94 C 126,94 138,91 146,84 C 151,80 155,83 154,88 L 146,102 C 141,100 135,99 115,99 Z" />
        </g>

        {/* GOTA DE ÓLEO PINGANDO (Cor ouro do app e posicionamento alinhado ao bico curvo) */}
        <path
          id="gota-oleo"
          d="M 139,107 C 139,107 135,115 135,118 C 135,121 137,123 140,123 C 143,123 145,121 145,118 C 145,115 141,107 141,107 Z"
          fill="var(--primary)"
          style={{ transformOrigin: '140px 107px' }}
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
