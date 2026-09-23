// Synthesizer utility using Web Audio API for peaceful focus ambiance
class AmbientAudioController {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isRunning: boolean = false;
  private activeOscillators: { stop: () => void }[] = [];
  private intervalId: number | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.2;
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(vol: number) {
    if (this.masterGain && this.ctx) {
      // Clamp between 0 and 1
      const safeVol = Math.max(0, Math.min(1, vol));
      this.masterGain.gain.linearRampToValueAtTime(safeVol * 0.35, this.ctx.currentTime + 0.1);
    }
  }

  public stop() {
    this.isRunning = false;
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.activeOscillators.forEach((item) => item.stop());
    this.activeOscillators = [];
  }

  public play(track: 'piano' | 'alpha' | 'rain' = 'piano', volume: number = 0.3) {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    this.stop();
    this.isRunning = true;
    this.setVolume(volume);

    if (track === 'piano') {
      this.playGentleChords();
    } else if (track === 'alpha') {
      this.playAlphaWaves();
    } else if (track === 'rain') {
      this.playCalmNoise();
    }
  }

  private playGentleChords() {
    if (!this.ctx || !this.masterGain) return;
    // Harmonious chord progressions (Pentatonic/Lydian - soothing study notes: C4, E4, G4, B4, D5)
    const chords = [
      [261.63, 329.63, 392.00, 493.88], // Cmaj7
      [220.00, 261.63, 329.63, 392.00], // Am7
      [174.61, 220.00, 261.63, 329.63], // Fmaj7
      [196.00, 246.94, 293.66, 392.00], // G
    ];

    let chordIndex = 0;
    const playChordStep = () => {
      if (!this.ctx || !this.masterGain || !this.isRunning) return;
      const currentChord = chords[chordIndex % chords.length];
      chordIndex++;

      currentChord.forEach((freq, i) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        // Warm sine wave with subtle triangle warmth
        osc.type = i === 0 ? 'triangle' : 'sine';
        osc.frequency.value = freq;

        const startTime = this.ctx.currentTime + i * 0.2;
        const duration = 4.5;

        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.exponentialRampToValueAtTime(0.08 / (i + 1), startTime + 0.8);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(startTime);
        osc.stop(startTime + duration + 0.1);

        this.activeOscillators.push({
          stop: () => {
            try {
              osc.stop();
            } catch {
              // Ignore if already stopped
            }
          }
        });
      });
    };

    playChordStep();
    this.intervalId = window.setInterval(playChordStep, 4500);
  }

  private playAlphaWaves() {
    if (!this.ctx || !this.masterGain) return;
    // 10Hz binaural/beat alpha wave for deep focus
    const baseFreq = 160;
    const diff = 10;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.value = baseFreq;

    osc2.type = 'sine';
    osc2.frequency.value = baseFreq + diff;

    gain.gain.setValueAtTime(0.05, this.ctx.currentTime);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.masterGain);

    osc1.start();
    osc2.start();

    this.activeOscillators.push({
      stop: () => {
        try {
          osc1.stop();
          osc2.stop();
        } catch {
          // ignore
        }
      }
    });
  }

  private playCalmNoise() {
    if (!this.ctx || !this.masterGain) return;
    // Generate pink-filtered soothing ambiance
    const bufferSize = 2 * this.ctx.sampleRate;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      output[i] = (b0 + b1 + b2 + b3 + b4) * 0.05;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 800;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    whiteNoise.start();

    this.activeOscillators.push({
      stop: () => {
        try {
          whiteNoise.stop();
        } catch {
          // ignore
        }
      }
    });
  }
}

export const ambientAudio = new AmbientAudioController();
