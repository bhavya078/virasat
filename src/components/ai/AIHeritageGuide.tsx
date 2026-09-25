import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Mic, MicOff, Volume2, VolumeX, Send, Sparkles, Compass, HelpCircle } from 'lucide-react';
import { heritageAudio } from '../../utils/audioService';

interface Message {
  id: string;
  sender: 'user' | 'dhara';
  text: string;
  time: string;
}

const QUICK_PROMPTS = [
  "Why do Taj Mahal minarets tilt outwards?",
  "What is the secret of Brihadeeswara Temple dome?",
  "Suggest 3 untouched hidden valleys in Himachal",
  "Explain the 49-foot Maitreya Buddha in Ladakh",
  "How are Aranmula metal mirrors forged without glass?"
];

// Rich knowledge responses for quick prompts & heritage queries
const HERITAGE_KNOWLEDGE: Record<string, string> = {
  "taj": "The four minarets of the Taj Mahal lean slightly outward by approximately 2 degrees. This architectural stroke of genius ensured that in the event of an earthquake, the towers would collapse outward onto the gardens rather than crashing onto the precious central marble crypt housing Mumtaz Mahal and Shah Jahan.",
  "brihadeeswara": "The monolithic Kumbam dome atop the Brihadeeswara Temple in Thanjavur weighs approximately 80 tonnes and was carved from a single granite block. Because there were no granite quarries within 60 kilometers, King Rajaraja Chola’s master engineers built an inclined earthen ramp over 6 kilometers long, using elephants and log rollers to haul the massive crown stone 66 meters into the sky!",
  "valleys": "Three of India's most pristine, uncrowded valleys are: 1) Tirthan Valley in Himachal (pristine trout river & gateway to Great Himalayan National Park), 2) Gurez Valley in Kashmir (nestled beneath Habba Khatoon peak along the Kishenganga), and 3) Mechuka in Arunachal Pradesh (often hailed as the Shangri-La of the Northeast with wooden suspension bridges).",
  "buddha": "The two-storey, 49-foot high Maitreya Buddha at Thiksey Monastery in Ladakh took four years to sculpt and was consecrated by the 14th Dalai Lama in 1970. Seated in the lotus posture, it portrays the Buddha of the Future radiating serene compassion across the upper Indus valley.",
  "aranmula": "The UNESCO-recognized Aranmula Kannadi metal mirror from Kerala contains no glass or reflective mercury coating! It is hand-cast by a single artisan family guild using an ancient metallurgical alloy of copper, tin, and secret medicinal herbs, polished over days with velvet cloth to achieve a 100% distortion-free front-surface reflection.",
  "default": "Namaste! India's heritage spans over five millennia of continuous spiritual, architectural, and cultural evolution. Whether you are curious about Vedic temple mathematics, royal Rajput forts, or tribal art forms, I am here to guide your journey."
};

export const AIHeritageGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'dhara',
      text: "Namaste! I am Dhara, your Virasat AI Heritage Guide. Ask me anything about India's 50 monuments, 50 hidden gems, rituals, or architecture.",
      time: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Speech-to-Text handler
  const handleVoiceInput = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Speech Recognition is not supported by your browser. Please type your question.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const speechToText = event.results[0][0].transcript;
      setInputText(speechToText);
      handleUserSubmit(speechToText);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const handleUserSubmit = (queryText: string) => {
    if (!queryText.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: queryText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');

    // Formulate response
    const qLower = queryText.toLowerCase();
    let reply = HERITAGE_KNOWLEDGE['default'];

    if (qLower.includes('taj') || qLower.includes('minaret')) {
      reply = HERITAGE_KNOWLEDGE['taj'];
    } else if (qLower.includes('brihadeeswara') || qLower.includes('dome') || qLower.includes('thanjavur')) {
      reply = HERITAGE_KNOWLEDGE['brihadeeswara'];
    } else if (qLower.includes('valley') || qLower.includes('himachal') || qLower.includes('untouched')) {
      reply = HERITAGE_KNOWLEDGE['valleys'];
    } else if (qLower.includes('buddha') || qLower.includes('ladakh') || qLower.includes('thiksey')) {
      reply = HERITAGE_KNOWLEDGE['buddha'];
    } else if (qLower.includes('mirror') || qLower.includes('aranmula')) {
      reply = HERITAGE_KNOWLEDGE['aranmula'];
    } else {
      reply = `Thank you for asking about that facet of Bharat's heritage. In Indian tradition, this is linked to deep historical records and sacred geography. Our platform contains 50 detailed monument pages, 50 hidden gems, and 50 living cultural traditions exploring this in depth. Feel free to explore our Explore 50 and Hidden Gems directories!`;
    }

    setTimeout(() => {
      const dharaMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'dhara',
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, dharaMsg]);

      // Voice read aloud if user enabled
      if (isSpeaking) {
        heritageAudio.speakGuide(reply);
      }
    }, 600);
  };

  return (
    <>
      {/* Floating Launcher Pill in Bottom-Right */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            heritageAudio.playTempleBell();
          }}
          className="group relative flex items-center space-x-2.5 px-4 py-3 rounded-full bg-[#083B2D] border border-[#C49A3A] text-[#C49A3A] shadow-luxury-hover hover:scale-105 transition-all duration-300"
          title="Open Dhara AI Heritage Guide"
        >
          <div className="w-8 h-8 rounded-full bg-[#C49A3A] text-[#083B2D] flex items-center justify-center font-bold font-serif shadow-gold-glow">
            <Sparkles className="w-4 h-4 text-[#083B2D] animate-spin-slow" />
          </div>
          <span className="font-semibold text-xs text-[#FAF8F4] tracking-wide">
            Dhara AI Guide
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
        </button>
      </div>

      {/* Expandable Glass Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-4 sm:right-6 w-[94vw] sm:w-[420px] h-[550px] bg-[#083B2D]/95 backdrop-blur-2xl border border-[#C49A3A]/40 rounded-3xl shadow-luxury-hover z-50 flex flex-col overflow-hidden text-[#FAF8F4]"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-black/30 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-[#C49A3A] text-[#083B2D] flex items-center justify-center font-serif font-bold">
                  ध
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#C49A3A]">Dhara AI Heritage Guide</h4>
                  <span className="text-[10px] text-white/70 block">Voice Enabled • Active Session Memory</span>
                </div>
              </div>

              <div className="flex items-center space-x-1.5">
                {/* Voice Output Toggle */}
                <button
                  onClick={() => {
                    if (isSpeaking) {
                      heritageAudio.stopSpeaking();
                      setIsSpeaking(false);
                    } else {
                      setIsSpeaking(true);
                      heritageAudio.speakGuide("Voice narration active.");
                    }
                  }}
                  className={`p-1.5 rounded-full border transition-colors ${
                    isSpeaking ? 'bg-[#C49A3A] text-[#083B2D] border-[#C49A3A]' : 'text-white/60 border-white/20 hover:text-white'
                  }`}
                  title={isSpeaking ? 'Disable Audio Voice' : 'Enable Audio Voice Narration'}
                >
                  {isSpeaking ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Prompts Carousel */}
            <div className="px-4 py-2 bg-black/20 border-b border-white/5 flex items-center space-x-1.5 overflow-x-auto text-[11px] no-scrollbar">
              {QUICK_PROMPTS.map((p, i) => (
                <button
                  key={i}
                  onClick={() => handleUserSubmit(p)}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/10 hover:bg-[#C49A3A]/20 border border-white/10 hover:border-[#C49A3A] text-white/85 text-[10px] transition-colors"
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Message Thread */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-[#C49A3A] text-[#083B2D] font-medium rounded-br-none'
                        : 'bg-white/10 text-[#FAF8F4] border border-white/10 rounded-bl-none shadow-sm'
                    }`}
                  >
                    {m.text}
                  </div>
                  <span className="text-[9px] text-white/40 mt-1 px-1 font-mono">{m.time}</span>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Input Bar with Speech-to-Text */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUserSubmit(inputText);
              }}
              className="p-3 bg-black/40 border-t border-white/10 flex items-center space-x-2"
            >
              <button
                type="button"
                onClick={handleVoiceInput}
                className={`p-2.5 rounded-full border transition-all ${
                  isListening
                    ? 'bg-red-500 text-white border-red-500 animate-pulse'
                    : 'bg-white/10 border-white/20 text-[#C49A3A] hover:bg-white/20'
                }`}
                title="Speak question (Speech-to-Text)"
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>

              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask Dhara about monuments, temples, gems..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder-white/50 focus:outline-none focus:border-[#C49A3A]"
              />

              <button
                type="submit"
                className="p-2.5 rounded-full bg-[#C49A3A] text-[#083B2D] hover:bg-[#DFB757] transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
