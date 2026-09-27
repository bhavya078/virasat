import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Shield, Sparkles, Award, Lightbulb, PieChart, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export const BudgetPlanner: React.FC = () => {
  const { t } = useLanguage();
  const [days, setDays] = useState(5);
  const [travelers, setTravelers] = useState(2);
  const [tier, setTier] = useState<'Backpacker' | 'Comfort' | 'Heritage Luxury' | 'Royal Maharaja'>('Heritage Luxury');

  // Daily costs per person by tier
  const tierCostPerDay = {
    'Backpacker': 1800,
    'Comfort': 4500,
    'Heritage Luxury': 14000,
    'Royal Maharaja': 35000
  };

  const totalBudget = tierCostPerDay[tier] * days * travelers;

  // Breakdown percentages
  const breakdown = {
    accommodation: Math.round(totalBudget * 0.42),
    food: Math.round(totalBudget * 0.23),
    transport: Math.round(totalBudget * 0.18),
    monumentsShopping: Math.round(totalBudget * 0.11),
    emergencyReserve: Math.round(totalBudget * 0.06)
  };

  return (
    <div className="py-24 bg-[#FAF8F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#083B2D]/5 border border-[#C49A3A]/40 text-[#083B2D] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            <DollarSign className="w-3.5 h-3.5 text-[#C49A3A]" />
            <span>{t('budgetBadge', 'Interactive Financial Architect')}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#083B2D] font-bold tracking-tight mb-4">
            {t('budgetTitle', 'Heritage Travel Budget Calculator')}
          </h1>
          <p className="font-subheading text-lg sm:text-xl text-[#111827]/75 italic">
            {t('budgetSubtitle', 'Simulate realistic costs across accommodation, regional cuisine, transport, ASI monument passes, and emergency reserves.')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#C49A3A]/30 shadow-luxury space-y-6">
            <h3 className="font-serif text-xl font-bold text-[#083B2D]">
              Configure Trip Scale
            </h3>

            {/* Travelers Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Number of Travelers
                </label>
                <span className="font-serif text-base font-bold text-[#C49A3A]">
                  {travelers} {travelers === 1 ? 'Person' : 'People'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                value={travelers}
                onChange={(e) => setTravelers(parseInt(e.target.value))}
                className="w-full accent-[#C49A3A] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-mono mt-1">
                <span>1 Solo</span>
                <span>4 Family</span>
                <span>8 Group</span>
              </div>
            </div>

            {/* Days Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Trip Duration (Days)
                </label>
                <span className="font-serif text-base font-bold text-[#C49A3A]">
                  {days} Days
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="21"
                value={days}
                onChange={(e) => setDays(parseInt(e.target.value))}
                className="w-full accent-[#C49A3A] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-mono mt-1">
                <span>1 Day</span>
                <span>10 Days</span>
                <span>21 Days</span>
              </div>
            </div>

            {/* Tier Buttons */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Comfort & Luxury Level
              </label>
              <div className="grid grid-cols-2 gap-2">
                {([
                  { key: 'Backpacker', label: t('tierBackpacker', 'Backpacker') },
                  { key: 'Comfort', label: t('tierComfort', 'Comfort') },
                  { key: 'Heritage Luxury', label: t('tierLuxury', 'Heritage Luxury') },
                  { key: 'Royal Maharaja', label: t('tierMaharaja', 'Royal Maharaja') }
                ] as const).map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setTier(item.key)}
                    className={`p-3 rounded-2xl text-xs font-medium border text-center transition-all ${
                      tier === item.key
                        ? 'bg-[#083B2D] text-[#C49A3A] border-[#C49A3A] font-bold shadow-md'
                        : 'border-gray-200 text-gray-700 hover:border-[#C49A3A]/40'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Total Estimated Cost Banner */}
            <div className="p-5 rounded-2xl bg-[#083B2D] text-[#FAF8F4] border border-[#C49A3A] shadow-gold-glow flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#C49A3A] tracking-widest block">
                  {t('estTotalBudget', 'Total Estimated Budget')}
                </span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF8F4]">
                  ₹{totalBudget.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="text-right text-[11px] text-[#C49A3A] font-mono">
                ₹{Math.round(totalBudget / days).toLocaleString()}/day
              </div>
            </div>
          </div>

          {/* Breakdown & Visual Allocation */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#C49A3A]/30 shadow-luxury space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#083B2D] flex items-center space-x-2">
                <PieChart className="w-5 h-5 text-[#C49A3A]" />
                <span>Financial Category Allocation</span>
              </h3>

              {/* Progress Bars for Categories */}
              <div className="space-y-4">
                {/* Accommodation */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-[#083B2D]">{t('stayExpenses', 'Heritage Hotels & Havelis')} (42%)</span>
                    <strong className="text-gray-900 font-mono">₹{breakdown.accommodation.toLocaleString()}</strong>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#083B2D] rounded-full" style={{ width: '42%' }} />
                  </div>
                </div>

                {/* Food */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-[#C49A3A]">{t('foodExpenses', 'Royal Thalis & Street Cuisine')} (23%)</span>
                    <strong className="text-gray-900 font-mono">₹{breakdown.food.toLocaleString()}</strong>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#C49A3A] rounded-full" style={{ width: '23%' }} />
                  </div>
                </div>

                {/* Transport */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-[#E67E22]">{t('transitExpenses', 'Flights, Trains & Private Cabs')} (18%)</span>
                    <strong className="text-gray-900 font-mono">₹{breakdown.transport.toLocaleString()}</strong>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#E67E22] rounded-full" style={{ width: '18%' }} />
                  </div>
                </div>

                {/* Monument Passes & Shopping */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-emerald-600">{t('guideExpenses', 'ASI Passes, Guides & Handicrafts')} (11%)</span>
                    <strong className="text-gray-900 font-mono">₹{breakdown.monumentsShopping.toLocaleString()}</strong>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-600 rounded-full" style={{ width: '11%' }} />
                  </div>
                </div>

                {/* Emergency Reserve */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-indigo-600">Emergency & Contingency Reserve (6%)</span>
                    <strong className="text-gray-900 font-mono">₹{breakdown.emergencyReserve.toLocaleString()}</strong>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 rounded-full" style={{ width: '6%' }} />
                  </div>
                </div>
              </div>

              {/* Smart Savings Suggestions */}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <span className="text-xs font-mono uppercase text-[#083B2D] tracking-wider font-semibold flex items-center space-x-1.5">
                  <Lightbulb className="w-4 h-4 text-[#C49A3A]" />
                  <span>Pro-Traveler Savings Strategies</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-[#FAF8F4] rounded-xl border border-gray-100">
                    <strong className="text-[#083B2D] block mb-0.5">Online ASI E-Tickets</strong>
                    <p className="text-gray-600 text-[11px]">Save up to ₹15 per ticket and avoid 45-minute queues at Taj Mahal, Qutub Minar, and Red Fort by purchasing online.</p>
                  </div>
                  <div className="p-3 bg-[#FAF8F4] rounded-xl border border-gray-100">
                    <strong className="text-[#083B2D] block mb-0.5">IRCTC Tourist Circuits</strong>
                    <p className="text-gray-600 text-[11px]">Use Bharat Gaurav and Vande Bharat trains for seamless intercity transfers with integrated meals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
