import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-title',
  standalone: true,
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-24 lg:py-0 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
      
      <div class="relative z-10">
        <div class="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200">
          <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          <span class="text-xs font-bold text-blue-800 uppercase tracking-widest">Strategic Product Proposal</span>
        </div>

        <div class="max-w-4xl mb-12">
          <h1 class="text-4xl md:text-5xl font-black text-[#1F2937] leading-[1.1] tracking-tight mb-6">
            Expo Pass <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              One-on-One Meeting Coordination
            </span>
          </h1>
          
          <p class="text-xl md:text-2xl text-[#4B5563] font-light leading-snug max-w-2xl">
            Turning Connections into <span class="font-medium text-gray-900">Real Conversations</span>
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-gray-200">
          <div class="space-y-4">
            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Purpose</h4>
            <p class="text-lg text-[#374151] leading-relaxed">
              Introduce a new capability inside Expo Pass that allows attendees, exhibitors, and organizers to easily coordinate meetings with each other.
            </p>
          </div>

          <div class="space-y-4">
            <h4 class="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Key Concept</h4>
            <div class="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <p class="text-lg text-[#374151] leading-relaxed italic">
                "Expo Pass will not control meetings or impose schedules. Instead, the platform will help people coordinate meetings naturally <span class="text-blue-600 font-semibold">after they connect</span>."
              </p>
            </div>
          </div>
        </div>

        <div class="mt-16 flex items-center justify-between text-sm text-[#9CA3AF]">
          <div>
            <p class="font-bold text-[#374151] mb-1 uppercase tracking-wider">Product Strategy Team</p>
            <p>March 10, 2026</p>
          </div>
          <div class="hidden md:block">
            <div class="flex gap-4">
              <div class="w-12 h-1 bg-blue-600 rounded-full"></div>
              <div class="w-12 h-1 bg-gray-200 rounded-full"></div>
              <div class="w-12 h-1 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class SlideTitleComponent {}
