"use client"
import { FC, MouseEvent, useState } from 'react';

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const RippleButton: FC<RippleButtonProps> = ({ children, ...props }) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; size: number }>>([]);

  const handleMouseDown = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const buttonRect = button.getBoundingClientRect();
    const size = Math.max(buttonRect.width, buttonRect.height);
    const x = e.clientX - buttonRect.left - size / 2;
    const y = e.clientY - buttonRect.top - size / 2;

    setRipples((prevRipples) => [
      ...prevRipples,
      { x, y, size },
    ]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.slice(1));
    }, 600);
  };

  return (
    <div>
        <style>{`
            .button {
              position: relative;
              overflow: hidden;
              padding: 20px 40px;
              border: none;
              background-color: #f2a900;
              color: white;
              font-size: 25px;
              cursor: pointer;
              border-radius: 4px;
              outline: none;
              transition: background-color .2s ease-in-out;
            }

            .button:hover{
              background-color: #dba500;
            }

            .ripple {
              position: absolute;
              border-radius: 50%;
              background-color: rgba(255, 255, 255, 0.6);
              transform: scale(0);
              animation: ripple-animation 0.6s ease-in-out;
            }

            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }

        `}</style>
        <button
        className="button"
        onMouseDown={handleMouseDown}
        {...props}
        >
        {children}
        {ripples.map((ripple, index) => (
            <span
            key={index}
            className="ripple"
            style={{
                width: ripple.size,
                height: ripple.size,
                left: ripple.x,
                top: ripple.y,
            }}
            />
        ))}
        </button>
    </div>
  );
};

export default RippleButton;
