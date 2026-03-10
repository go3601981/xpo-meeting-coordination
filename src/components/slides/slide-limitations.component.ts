import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-slide-limitations',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-12 lg:py-4 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute bottom-0 right-0 w-80 h-80 bg-orange-50/30 rounded-full blur-3xl"></div>
      
      <div class="relative z-10">
        <div class="mb-6">
          <h2 class="text-[10px] font-bold text-orange-600 uppercase tracking-[0.3em] mb-2">The Friction</h2>
          <h1 class="text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight">
            Limitations of Organizer-Controlled Scheduling
          </h1>
          <div class="w-16 h-1 bg-orange-600 mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div class="space-y-4">
            <p class="text-lg text-gray-600 leading-relaxed font-light mb-4">
              While structured, the top-down model introduces significant friction that often stifles the very connections it aims to facilitate.
            </p>

            <div class="grid gap-3">
              @for (weakness of weaknesses; track weakness.title) {
                <div class="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-orange-200 transition-all group">
                  <div class="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors shrink-0">
                    <mat-icon class="text-sm">{{ weakness.icon }}</mat-icon>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 text-sm mb-0.5">{{ weakness.title }}</h3>
                    <p class="text-[11px] text-gray-500 leading-snug">{{ weakness.description }}</p>
                  </div>
                </div>
              }
            </div>
          </div>

          <div class="relative">
            <div class="p-8 bg-[#1F2937] rounded-3xl shadow-2xl relative overflow-hidden border-t-4 border-orange-500">
              <div class="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl"></div>
              
              <div class="relative z-10">
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-7 h-7 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <mat-icon class="text-orange-400 text-[10px]">lightbulb</mat-icon>
                  </div>
                  <h4 class="text-orange-400 text-[10px] font-bold uppercase tracking-[0.2em]">Key Insight</h4>
                </div>

                <p class="text-2xl md:text-3xl text-white font-light leading-tight mb-6">
                  Real networking often happens <span class="text-orange-400 font-medium italic">outside</span> predefined structures.
                </p>

                <div class="pt-6 border-t border-white/10">
                  <p class="text-gray-400 text-xs leading-relaxed">
                    The most impactful meetings are often spontaneous—triggered by a chance encounter, a shared session, or a mutual connection discovered in the moment.
                  </p>
                </div>
              </div>
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
export class SlideLimitationsComponent {
  readonly weaknesses = [
    { 
      title: 'Heavy Operational Burden', 
      description: 'Requires extensive manual setup and management by event organizers.',
      icon: 'engineering'
    },
    { 
      title: 'Restricted Timeframes', 
      description: 'Meetings are confined strictly to predefined slots, ignoring natural flow.',
      icon: 'timer_off'
    },
    { 
      title: 'Artificial Interactions', 
      description: 'Networking becomes a rigid checklist rather than a fluid conversation.',
      icon: 'layers_clear'
    },
    { 
      title: 'Zero Spontaneity', 
      description: 'Extremely difficult to adapt to connections made in the moment.',
      icon: 'shuffle'
    }
  ];
}
