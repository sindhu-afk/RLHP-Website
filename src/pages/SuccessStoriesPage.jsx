import React from 'react';
import { successStoriesData } from '../data/rlhpData';
import { BookOpen, AlertCircle, ArrowRight } from 'lucide-react';

export default function SuccessStoriesPage({ onSelectNews }) {
  return (
    <div className="space-y-12 font-sans pb-12">
      <section className="bg-rlhp-darkgreen text-white py-16 px-4 sm:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold">Success Stories & Case Studies</h1>
          <p className="text-xs sm:text-sm text-rlhp-lightgreen max-w-xl mx-auto font-medium">
            Real stories of transformation, resilience, and community empowerment
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-center space-x-3 text-xs text-amber-800">
          <AlertCircle size={18} className="text-amber-600 shrink-0" />
          <span>
            <strong>Content Status:</strong> Additional detailed case studies are currently being curated by the field research team. The UI structure below highlights active transformation journeys.
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {successStoriesData.map((story) => (
            <div key={story.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-2xs flex flex-col justify-between group">
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  {story.isPlaceholder && (
                    <span className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      Needs Update
                    </span>
                  )}
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rlhp-green bg-rlhp-lightgreen px-2.5 py-0.5 rounded-full">
                    {story.programme}
                  </span>
                  <h3 className="font-bold text-sm text-gray-900 group-hover:text-rlhp-green transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {story.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => onSelectNews({ title: story.title, content: story.summary, image: story.image, category: 'Success Story' })}
                  className="text-xs font-bold text-rlhp-orange hover:text-rlhp-darkorange inline-flex items-center space-x-1"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
