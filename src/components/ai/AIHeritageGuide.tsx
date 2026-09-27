import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  X,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Send,
  Sparkles,
  Compass,
  HelpCircle,
  MapPin,
  Calendar,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { heritageAudio } from '../../utils/audioService';
import { HeritageAIQueryEngine, HeritageGuideAnswer } from '../../services/heritageAIQueryEngine';

interface Message {
  id: string;
  sender: 'user' | 'dhara';
  text: string;
  time: string;
  guideAnswer?: HeritageGuideAnswer;
}

const QUICK_PROMPTS = [
  "History of Konark",
  "Gujarat festivals in October",
  "Hidden places in Kerala",
  "Chola temples",
  "Karnataka UNESCO sites",
  "Why do Taj Mahal minarets tilt outwards?",
  "How are Aranmula metal mirrors forged?"
];

export const AIHeritageGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'dhara',
      text: "Namaste! I am Dhara, your Virasat AI Cultural Guide. Ask me anything about India's 74 UNESCO monuments, 50 hidden gems, dynasties, sacred rituals, or temple mathematics.",
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

    // Generate rich response using sovereign engine
    const answer = HeritageAIQueryEngine.answerQuery(queryText);

    setTimeout(() => {
      const dharaMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'dhara',
        text: answer.summary,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        guideAnswer: answer
      };
      setMessages((prev) => [...prev, dharaMsg]);

      // Voice read aloud if user enabled
      if (isSpeaking) {
        heritageAudio.speakGuide(answer.headline + ". " + answer.summary);
      }
    }, 400);
  };

  return (
    <>
      {/* Floating Launcher Pill in Bottom-Right */}
      <div className="fixed bottom-20 xl:bottom-6 right-4 sm:right-6 z-40">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            heritageAudio.playTempleBell();
          }}
          className="group relative flex items-center space-x-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-full bg-[#083B2D] border border-[#C49A3A] text-[#C49A3A] shadow-luxury-hover active:scale-95 hover:scale-105 transition-all duration-300"
          title="Open Dhara AI Heritage Guide"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#C49A3A] text-[#083B2D] flex items-center justify-center font-bold font-serif shadow-gold-glow">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#083B2D] animate-spin-slow" />
          </div>
          <span className="font-semibold text-[11px] sm:text-xs text-[#FAF8F4] tracking-wide">
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
            className="fixed bottom-[4.5rem] xl:bottom-20 right-3 sm:right-6 left-3 sm:left-auto w-auto sm:w-[480px] h-[580px] max-h-[calc(100dvh-5.5rem)] bg-[#083B2D]/95 backdrop-blur-2xl border border-[#C49A3A]/40 rounded-3xl shadow-luxury-hover z-50 flex flex-col overflow-hidden text-[#FAF8F4]"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-black/40 border-b border-white/10 flex items-center justify-between shrink-0">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-[#C49A3A] text-[#083B2D] flex items-center justify-center font-serif font-bold text-sm shadow-gold-glow">
                  ध
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#C49A3A]">Dhara AI Heritage Guide</h4>
                  <span className="text-[10px] text-white/70 block">Knowledge Engine • 74 Monuments & 50 Gems</span>
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
                      heritageAudio.speakGuide("Voice narration enabled.");
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
            <div className="px-4 py-2 bg-black/25 border-b border-white/5 flex items-center space-x-1.5 overflow-x-auto text-[11px] no-scrollbar shrink-0">
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
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  {m.sender === 'user' ? (
                    <div className="max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed bg-[#C49A3A] text-[#083B2D] font-medium rounded-br-none shadow-sm">
                      {m.text}
                    </div>
                  ) : m.guideAnswer ? (
                    /* Rich Structured Dhara Response Card */
                    <div className="max-w-[95%] bg-black/40 border border-[#C49A3A]/30 rounded-2xl overflow-hidden shadow-luxury space-y-3 p-3.5 text-xs">
                      {/* Badge & Headline */}
                      <div className="flex items-center justify-between gap-2">
                        {m.guideAnswer.badge && (
                          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#C49A3A]/20 text-[#C49A3A] font-semibold border border-[#C49A3A]/30">
                            {m.guideAnswer.badge}
                          </span>
                        )}
                        {m.guideAnswer.locationInfo && (
                          <span className="text-[10px] text-white/60 flex items-center space-x-1">
                            <MapPin className="w-3 h-3 text-[#C49A3A]" />
                            <span>{m.guideAnswer.locationInfo.state}</span>
                          </span>
                        )}
                      </div>

                      <h4 className="font-serif text-sm font-bold text-[#FAF8F4] leading-snug">
                        {m.guideAnswer.headline}
                      </h4>

                      {/* Photo Thumbnail if available */}
                      {m.guideAnswer.image && (
                        <div className="relative rounded-xl overflow-hidden aspect-video border border-white/10 group">
                          <img
                            src={m.guideAnswer.image}
                            alt={m.guideAnswer.headline}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          {m.guideAnswer.imageCaption && (
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2 text-[10px] text-white/90">
                              {m.guideAnswer.imageCaption}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Summary */}
                      <p className="text-white/85 text-[11.5px] leading-relaxed">
                        {m.guideAnswer.summary}
                      </p>

                      {/* Verified Facts */}
                      {m.guideAnswer.facts && m.guideAnswer.facts.length > 0 && (
                        <div className="bg-white/5 rounded-xl p-2.5 space-y-1.5 border border-white/5">
                          <span className="text-[10px] font-mono uppercase text-[#C49A3A] font-bold block">
                            Key Historical Facts
                          </span>
                          <ul className="space-y-1 text-[11px] text-white/80">
                            {m.guideAnswer.facts.map((fact, idx) => (
                              <li key={idx} className="flex items-start space-x-1.5">
                                <CheckCircle className="w-3 h-3 text-[#C49A3A] shrink-0 mt-0.5" />
                                <span>{fact}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Key Highlights */}
                      {m.guideAnswer.keyHighlights && m.guideAnswer.keyHighlights.length > 0 && (
                        <div className="grid grid-cols-2 gap-1.5 text-[10.5px]">
                          {m.guideAnswer.keyHighlights.map((kh, idx) => (
                            <div key={idx} className="bg-black/30 p-2 rounded-lg border border-white/5">
                              <span className="block text-white/50 text-[9px] uppercase font-mono">{kh.title}</span>
                              <span className="font-semibold text-white/90 truncate block">{kh.desc}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Related Items */}
                      {m.guideAnswer.relatedItems && m.guideAnswer.relatedItems.length > 0 && (
                        <div className="pt-1 border-t border-white/10 space-y-1">
                          <span className="text-[10px] font-mono uppercase text-white/50 block">Nearby & Related</span>
                          <div className="flex flex-wrap gap-1.5">
                            {m.guideAnswer.relatedItems.map((rel, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] text-white/80 border border-white/10"
                              >
                                {rel.title}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Suggestions Chips */}
                      {m.guideAnswer.actionSuggestions && (
                        <div className="pt-1 flex flex-wrap gap-1.5">
                          {m.guideAnswer.actionSuggestions.map((sug, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleUserSubmit(sug)}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-[#C49A3A]/15 hover:bg-[#C49A3A]/30 text-[#C49A3A] border border-[#C49A3A]/30 transition-colors flex items-center space-x-1"
                            >
                              <span>{sug}</span>
                              <ChevronRight className="w-2.5 h-2.5" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed bg-white/10 text-[#FAF8F4] border border-white/10 rounded-bl-none shadow-sm">
                      {m.text}
                    </div>
                  )}

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
              className="p-3 bg-black/50 border-t border-white/10 flex items-center space-x-2 shrink-0"
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
                placeholder="Ask Dhara about monuments, temples, dynasties..."
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
