import React from 'react';
import { successStoriesData } from '../data/rlhpData';
import { ArrowRight, Quote, MapPin } from 'lucide-react';

export default function SuccessStoriesPage({ onSelectNews }) {
  return (
    <div className="space-y-12 font-sans pb-12">
      <section className="bg-rlhp-darkgreen text-white py-16 px-4 sm:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold">Success Stories & Case Studies</h1>
          <p className="text-xs sm:text-sm text-rlhp-lightgreen max-w-xl mx-auto font-medium">
            Real stories of transformation, resilience, and community empowerment from our field operations across Karnataka
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {successStoriesData.map((story) => (
            <div 
              key={story.id} 
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-slate-900 flex items-center justify-center">
                  <img 
                    src={story.image.startsWith('/') ? `${import.meta.env.BASE_URL}${story.image.slice(1)}` : story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute top-3 left-3 bg-rlhp-darkgreen/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-xs">
                    {story.programme}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center text-[11px] text-gray-500 font-medium space-x-1">
                    <MapPin size={13} className="text-rlhp-green shrink-0" />
                    <span>{story.location}</span>
                  </div>

                  <h3 className="font-extrabold text-base text-gray-900 group-hover:text-rlhp-green transition-colors leading-snug">
                    {story.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-4">
                    {story.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-gray-100 mt-2 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-gray-400">
                  — {story.author}
                </span>
                <button
                  onClick={() => onSelectNews({ 
                    title: story.title, 
                    content: story.fullStory || story.summary, 
                    image: story.image.startsWith('/') ? `${import.meta.env.BASE_URL}${story.image.slice(1)}` : story.image, 
                    category: 'Success Story',
                    location: story.location,
                    author: story.author,
                    programme: story.programme
                  })}
                  className="text-xs font-bold text-rlhp-orange hover:text-rlhp-darkorange inline-flex items-center space-x-1 cursor-pointer transition-colors"
                >
                  <span>Read Case Study</span>
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
