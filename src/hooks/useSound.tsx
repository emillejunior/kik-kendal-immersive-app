import { useEffect, useRef } from 'react';
import clickSound from '@/assets/click.wav';
import switchSound from '@/assets/switch.wav';

export function useClickSound(volume: number = 0.5) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(clickSound);
    audioRef.current.volume = volume;
    audioRef.current.preload = 'auto';
  }, [volume]);

  const play = () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      // Rewind and play
      audio.currentTime = 0;
      audio.play();
    } catch (err) {
      console.warn('Click sound play error:', err);
    }
  };

  return play;
}

export function useSwitchSound(volume: number = 0.3) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(switchSound);
    audioRef.current.preload = 'auto';
    audioRef.current.volume = volume;
  }, [volume]);

  const play = () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      audio.currentTime = 0;
      audio.play();
    } catch (err) {
      console.warn('Switch sound play error:', err);
    }
  };

  return play;
}
