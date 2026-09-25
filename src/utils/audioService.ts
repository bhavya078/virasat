// Web Audio API Synthesizer for Authentic Indian Ambience & Web Speech Guide

class HeritageAudioService {
  private audioCtx: AudioContext | null = null;
  private isAmbiencePlaying = false;
  private ambientGain: GainNode | null = null;
  private ambientInterval: number | null = null;

  private initAudio() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new AudioContextClass();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  // Play a resonant temple bell chime using additive harmonic synthesis
  public playTempleBell() {
    try {
      this.initAudio();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      const fundamental = 432; // Meditative Vedic tuning (Hz)
      const harmonics = [1, 2.02, 2.98, 4.05, 5.2];
      const gains = [0.4, 0.25, 0.15, 0.08, 0.04];

      harmonics.forEach((h, i) => {
        if (!this.audioCtx) return;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(fundamental * h, now);

        gain.gain.setValueAtTime(gains[i], now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now);
        osc.stop(now + 3.6);
      });
    } catch {
      // Audio autoplay policy fallback
    }
  }

  // Toggle meditative Indian Tanpura/Flute background ambience
  public toggleAmbience(): boolean {
    if (this.isAmbiencePlaying) {
      this.stopAmbience();
      return false;
    } else {
      this.startAmbience();
      return true;
    }
  }

  public isPlaying(): boolean {
    return this.isAmbiencePlaying;
  }

  private startAmbience() {
    try {
      this.initAudio();
      if (!this.audioCtx) return;

      this.isAmbiencePlaying = true;
      this.ambientGain = this.audioCtx.createGain();
      this.ambientGain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      this.ambientGain.connect(this.audioCtx.destination);

      // Play soft periodic bell/sitar resonance
      this.playTempleBell();
      this.ambientInterval = window.setInterval(() => {
        if (this.isAmbiencePlaying) {
          this.playTempleBell();
        }
      }, 12000);
    } catch {
      this.isAmbiencePlaying = false;
    }
  }

  private stopAmbience() {
    this.isAmbiencePlaying = false;
    if (this.ambientInterval) {
      clearInterval(this.ambientInterval);
      this.ambientInterval = null;
    }
    if (this.ambientGain && this.audioCtx) {
      this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.5);
    }
  }

  // Web Speech API: Text-to-Speech Audio Guide Narration
  public speakGuide(text: string, onEnd?: () => void) {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel(); // Stop ongoing speech

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95; // Gentle dignified narration pace
    utterance.pitch = 1.0;

    // Pick best English (India) or Hindi voice if available
    const voices = window.speechSynthesis.getVoices();
    const indianVoice = voices.find(v => v.lang.includes('en-IN') || v.lang.includes('hi-IN')) || voices[0];
    if (indianVoice) {
      utterance.voice = indianVoice;
    }

    if (onEnd) {
      utterance.onend = onEnd;
      utterance.onerror = onEnd;
    }

    window.speechSynthesis.speak(utterance);
  }

  public stopSpeaking() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

export const heritageAudio = new HeritageAudioService();
