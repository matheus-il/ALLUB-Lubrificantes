import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

interface AnimatedLogoProps {
  size?: 'small' | 'large';
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ size = 'small' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dropRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dropElement = dropRef.current;
    if (!containerRef.current || !dropElement) return;

    // Animação da gota de óleo (Efeito elástico de pingo)
    const dropAnim = animate(dropElement, {
      translateY: [-30, 0],
      scaleY: [
        { value: 1.5, duration: 150, easing: 'easeOutQuad' },
        { value: 0.8, duration: 100, easing: 'easeInOutQuad' },
        { value: 1.1, duration: 150, easing: 'easeInOutQuad' },
        { value: 1, duration: 150, easing: 'easeInOutQuad' }
      ],
      scaleX: [
        { value: 0.6, duration: 150, easing: 'easeOutQuad' },
        { value: 1.3, duration: 100, easing: 'easeInOutQuad' },
        { value: 0.9, duration: 150, easing: 'easeInOutQuad' },
        { value: 1, duration: 150, easing: 'easeInOutQuad' }
      ],
      opacity: [0, 1],
      duration: 800,
      easing: 'easeOutElastic(1, .6)'
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
      dropAnim.revert();
      textAnim.revert();
    };
  }, []);

  const handleHover = () => {
    const dropElement = dropRef.current;
    if (!dropElement) return;
    // Mini-animação de pulso ao passar o mouse ou tocar
    animate(dropElement, {
      scale: [1, 1.25, 1],
      rotate: '1turn',
      duration: 800,
      easing: 'easeInOutBack'
    });
  };

  const isLarge = size === 'large';

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleHover}
      onTouchStart={handleHover}
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
      {/* SVG da Gota de Óleo / Lubrificante Premium */}
      <svg
        ref={dropRef}
        width={isLarge ? 64 : 32}
        height={isLarge ? 64 : 32}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0 0 8px var(--primary-glow))' }}
      >
        <path
          d="M50 10C50 10 20 45 20 65C20 81.5685 33.4315 95 50 95C66.5685 95 80 81.5685 80 65C80 45 50 10 50 10Z"
          fill="url(#paint0_linear)"
        />
        {/* Reflexo de brilho premium dentro da gota */}
        <path
          d="M40 50C33 55 30 65 30 65C30 65 33 58 40 55C47 52 50 48 50 48C50 48 47 45 40 50Z"
          fill="white"
          opacity="0.3"
        />
        <defs>
          <linearGradient id="paint0_linear" x1="50" y1="10" x2="50" y2="95" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--primary)" />
            <stop offset="1" stopColor="hsl(var(--primary-hue), 95%, 35%)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Nome da Marca com letras divididas para animação */}
      <div
        ref={textRef}
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
