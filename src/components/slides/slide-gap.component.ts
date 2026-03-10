import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-slide-gap',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-12 lg:py-4 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute top-1/2 right-0 w-80 h-80 bg-red-50/30 rounded-full blur-3xl -translate-y-1/2"></div>
      
      <div class="relative z-10">
        <div class="mb-6">
          <h2 class="text-[10px] font-bold text-red-600 uppercase tracking-[0.3em] mb-2">The Problem</h2>
          <h1 class="text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight">
            The Networking Gap in Event Platforms
          </h1>
          <div class="w-16 h-1 bg-red-600 mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div class="space-y-6">
            <div class="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <h3 class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-4">Current Platform Focus</h3>
              <div class="space-y-3">
                @for (feature of currentFeatures; track feature.text) {
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                      <mat-icon class="text-lg">check_circle</mat-icon>
                    </div>
                    <span class="text-base text-gray-700 font-medium">{{ feature.text }}</span>
                  </div>
                }
              </div>
            </div>

            <div class="p-5 bg-red-50 rounded-2xl border border-red-100">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                  <mat-icon class="text-lg">error_outline</mat-icon>
                </div>
                <div>
                  <h4 class="text-red-900 font-bold mb-1 text-sm">The Missing Link</h4>
                  <p class="text-red-800 leading-relaxed text-xs mb-4">
                    Event apps allow users to discover people in the participant list, but they rarely provide tools that help <span class="font-bold text-red-900">convert those discoveries into real meetings</span>.
                  </p>
                  <div class="pt-4 border-t border-red-200">
                    <p class="text-[9px] font-bold text-red-600 uppercase tracking-widest mb-1">The Networking Stat</p>
                    <p class="text-lg font-black text-red-900 italic leading-tight">
                      "80% of attendees list networking as their primary goal, yet only 15% successfully schedule a 1-on-1 meeting."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="relative p-6 bg-white rounded-3xl border border-gray-200 shadow-xl">
              <h4 class="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">Typical Situation</h4>
              
              <div class="space-y-4 relative">
                <!-- Visual Gap Graphic -->
                <div class="flex justify-between items-center px-2">
                  <div class="text-center">
                    <div class="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-1 mx-auto">
                      <mat-icon class="text-2xl">chat</mat-icon>
                    </div>
                    <p class="text-[9px] font-bold text-gray-500 uppercase">Connection</p>
                  </div>

                  <div class="flex-1 h-px bg-dashed border-t-2 border-dashed border-red-300 mx-2 relative">
                    <mat-icon class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-500 bg-white px-1 text-sm">block</mat-icon>
                  </div>

                  <div class="text-center">
                    <div class="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 mb-1 mx-auto">
                      <mat-icon class="text-2xl">event_available</mat-icon>
                    </div>
                    <p class="text-[9px] font-bold text-gray-400 uppercase">Actual Meeting</p>
                  </div>
                </div>

                <p class="text-base text-[#4B5563] leading-relaxed text-center italic">
                  "People connect in the app, but coordinating an actual meeting becomes difficult and often falls through."
                </p>
              </div>
            </div>

            <div class="p-6 bg-red-600 rounded-2xl text-white shadow-lg">
              <h4 class="text-red-200 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Key Message</h4>
              <p class="text-xl font-bold leading-tight">
                Event apps help people <span class="underline decoration-red-300 underline-offset-4">connect</span>, but not necessarily <span class="text-red-100 italic">meet</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100%; }
    mat-icon { font-size: 24px; width: 24px; height: 24px; }
  `]
})
export class SlideGapComponent {
  readonly currentFeatures = [
    { text: 'Discover attendees' },
    { text: 'View profiles' },
    { text: 'Send messages' }
  ];
}
