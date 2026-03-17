import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { User, Session } from '@supabase/supabase-js';
import { loadUserProgressFromDb } from '../utils/progressManager';

type AuthContextType = {
  user: User | null;
  session: Session | null;
  isLoaded: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  isLoaded: false,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Get initial session — set isLoaded immediately, sync progress in background
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoaded(true); // ← Don't wait for DB, mark auth as resolved right away
      if (session?.user) {
        // Fire-and-forget: never await inside the auth handler to avoid lock deadlock
        loadUserProgressFromDb(session.user.id).catch(console.error);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (_event === 'SIGNED_IN' && session?.user) {
        // Fire-and-forget: same reason — never await inside auth state handler
        loadUserProgressFromDb(session.user.id).catch(console.error);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, session, isLoaded }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUser = () => {
  return useContext(AuthContext);
};

// React wrappers to mimic InsForge SDK
export const SignedIn = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  return user ? <>{children}</> : null;
};

export const SignedOut = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  return !user ? <>{children}</> : null;
};

export const SignOutButton = ({ children }: { children: React.ReactNode }) => {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };
  return <div onClick={handleSignOut} style={{ cursor: 'pointer' }}>{children}</div>;
};

export const SignInButton = ({ children }: { children?: React.ReactNode }) => {
  return <a href="/login" className="lp-btn lp-btn--solid">{children || 'Sign In'}</a>;
};

export const SignUpButton = ({ children }: { children?: React.ReactNode }) => {
  return <a href="/login" className="lp-btn lp-btn--ghost">{children || 'Sign Up'}</a>;
};

export const UserButton = () => {
  const { user } = useUser();
  if (!user) return null;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px', borderRadius: '4px', background: 'rgba(0,0,0,0.05)' }}>
      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#ccc' }}></div>
      <span style={{ fontSize: '14px', fontWeight: 600 }}>{user.email?.split('@')[0]}</span>
    </div>
  );
};
