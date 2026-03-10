import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-slide-gap',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-24 lg:py-0 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute top-1/2 right-0 w-80 h-80 bg-red-50/30 rounded-full blur-3xl -translate-y-1/2"></div>
      
      <div class="relative z-10">
        <div class="mb-12">
          <h2 class="text-xs font-bold text-red-600 uppercase tracking-[0.3em] mb-4">The Problem</h2>
          <h1 class="text-4xl md:text-5xl font-bold text-[#1F2937] leading-tight">
            The Networking Gap in Event Platforms
          </h1>
          <div class="w-20 h-1.5 bg-red-600 mt-6 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <div class="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Current Platform Focus</h3>
              <div class="space-y-4">
                @for (feature of currentFeatures; track feature.text) {
                  <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                      <mat-icon>check_circle</mat-icon>
                    </div>
                    <span class="text-lg text-gray-700 font-medium">{{ feature.text }}</span>
                  </div>
                }
              </div>
            </div>

            <div class="p-6 bg-red-50 rounded-2xl border border-red-100">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                  <mat-icon>error_outline</mat-icon>
                </div>
                <div>
                  <h4 class="text-red-900 font-bold mb-2">The Missing Link</h4>
                  <p class="text-red-800 leading-relaxed text-sm">
                    Event apps allow users to discover people in the participant list, but they rarely provide tools that help <span class="font-bold text-red-900">convert those discoveries into real meetings</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-8">
            <div class="relative p-8 bg-white rounded-3xl border border-gray-200 shadow-xl">
              <h4 class="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">Typical Situation</h4>
              
              <div class="space-y-6 relative">
                <!-- Visual Gap Graphic -->
                <div class="flex justify-between items-center px-4">
                  <div class="text-center">
                    <div class="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-2 mx-auto">
                      <mat-icon class="text-3xl">chat</mat-icon>
                    </div>
                    <p class="text-xs font-bold text-gray-500 uppercase">Connection</p>
                  </div>

                  <div class="flex-1 h-px bg-dashed border-t-2 border-dashed border-red-300 mx-4 relative">
                    <mat-icon class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-500 bg-white px-1">block</mat-icon>
                  </div>

                  <div class="text-center">
                    <div class="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 mb-2 mx-auto">
                      <mat-icon class="text-3xl">event_available</mat-icon>
                    </div>
                    <p class="text-xs font-bold text-gray-400 uppercase">Actual Meeting</p>
                  </div>
                </div>

                <p class="text-lg text-[#4B5563] leading-relaxed text-center italic">
                  "People connect in the app, but coordinating an actual meeting becomes difficult and often falls through."
                </p>
              </div>
            </div>

            <div class="p-8 bg-red-600 rounded-2xl text-white shadow-lg transform hover:scale-[1.02] transition-transform">
              <h4 class="text-red-200 text-xs font-bold uppercase tracking-[0.2em] mb-4">Key Message</h4>
              <p class="text-2xl font-bold leading-tight">
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
