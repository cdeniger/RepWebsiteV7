import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';

const LoginModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [loginError, setLoginError] = useState<string | null>(null);

  // Reset error when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setLoginError(null);
    }
  }, [isOpen]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("Client Account is Not Found");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-oxford/40 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-bone border border-oxford shadow-2xl p-8 md:p-10 flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-oxford/50 hover:text-signal transition-colors"
        >
          <X size={24} />
        </button>

        <div className="mb-8">
          <div className="font-mono text-xs uppercase tracking-widest text-signal mb-2">
            Client Portal
          </div>
          <h2 className="font-serif text-3xl font-bold text-oxford leading-tight">
            Welcome back to your Rep. Team.
          </h2>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="space-y-2">
            <label className="font-mono text-xs uppercase text-oxford/60">
              Email Address
            </label>
            <input
              type="email"
              className="w-full bg-white border border-oxford/20 p-3 font-serif focus:outline-none focus:border-signal transition-colors"
              placeholder="client@example.com"
            />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-xs uppercase text-oxford/60">
              Password
            </label>
            <input
              type="password"
              className="w-full bg-white border border-oxford/20 p-3 font-serif focus:outline-none focus:border-signal transition-colors"
            />
          </div>

          <div className="pt-2 space-y-4">
            <Button
              type="submit"
              className="w-full !bg-oxford hover:!bg-signal text-white"
            >
              Access Portal
            </Button>

            {loginError && (
              <div className="font-mono text-xs text-signal font-bold text-center animate-pulse">
                {loginError}
              </div>
            )}
          </div>
        </form>

        <div className="mt-6 pt-6 border-t border-oxford/10 text-center">
          <p className="font-mono text-[10px] text-oxford/40">
            Secure client access. 256-bit encryption.
          </p>
        </div>
      </div>
    </div>
  );
};

export { LoginModal };
