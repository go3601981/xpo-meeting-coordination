import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-slide-competitors',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-24 lg:py-12 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute top-0 left-0 w-72 h-72 bg-amber-50/30 rounded-full blur-3xl"></div>
      
      <div class="relative z-10">
        <div class="mb-8">
          <h2 class="text-xs font-bold text-amber-600 uppercase tracking-[0.3em] mb-4">Current Solutions</h2>
          <h1 class="text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight">
            How Other Event Platforms Handle Meetings
          </h1>
          <div class="w-20 h-1 bg-amber-600 mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div class="space-y-6">
            <div class="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm relative">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                  <mat-icon class="text-xl">account_tree</mat-icon>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 text-sm">The "Whova" Model</h3>
                  <p class="text-[10px] text-gray-500 uppercase tracking-wider">Top-Down Scheduling</p>
                </div>
              </div>

              <div class="space-y-4">
                @for (step of approach; track step.text) {
                  <div class="flex items-start gap-3 group">
                    <div class="w-5 h-5 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-[9px] font-bold text-amber-700 mt-0.5 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      {{ $index + 1 }}
                    </div>
                    <p class="text-base text-gray-700 leading-tight">{{ step.text }}</p>
                  </div>
                }
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="p-6 bg-amber-50 rounded-3xl border border-amber-100 relative overflow-hidden">
              <div class="absolute top-0 right-0 p-4 opacity-10">
                <mat-icon class="text-6xl">settings_suggest</mat-icon>
              </div>
              
              <h4 class="text-amber-800 font-bold text-[10px] uppercase tracking-widest mb-4 flex items-center gap-2">
                <mat-icon class="text-xs">info</mat-icon>
                The Core Logic
              </h4>
              
              <p class="text-lg text-amber-900 leading-relaxed font-light mb-6">
                In this model, the <span class="font-bold">organizer</span> dictates the structure of the interaction. It assumes that meetings can only happen if they are pre-planned and pre-allocated.
              </p>

              <div class="p-5 bg-white rounded-2xl border border-amber-200 shadow-sm">
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                    <mat-icon class="text-sm">lock</mat-icon>
                  </div>
                  <span class="font-bold text-amber-900 text-sm">Rigid Control</span>
                </div>
                <p class="text-xs text-amber-800 leading-relaxed italic">
                  "Attendees can only meet within the boxes defined by the event organizer."
                </p>
              </div>
            </div>

            <div class="p-6 bg-[#1F2937] rounded-2xl text-white shadow-xl">
              <h4 class="text-amber-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">Key Takeaway</h4>
              <p class="text-xl font-light leading-snug">
                This is a <span class="text-amber-400 font-bold">top-down scheduling model</span> entirely controlled by the organizer.
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
export class SlideCompetitorsComponent {
  readonly approach = [
    { text: 'Organizer creates meeting blocks' },
    { text: 'Time slots are predefined' },
    { text: 'Meeting locations are predefined' },
    { text: 'Attendees book those slots' }
  ];
}
