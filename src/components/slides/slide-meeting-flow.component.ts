import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-slide-meeting-flow',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-24 lg:py-12 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute top-1/2 right-0 w-96 h-96 bg-violet-50/50 rounded-full blur-3xl -translate-y-1/2"></div>
      
      <div class="relative z-10">
        <div class="mb-8">
          <h2 class="text-xs font-bold text-violet-600 uppercase tracking-[0.3em] mb-4">The Experience</h2>
          <h1 class="text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight">
            Proposed Meeting Flow
          </h1>
          <div class="w-20 h-1 bg-violet-600 mt-4 rounded-full"></div>
        </div>

        <div class="relative py-8">
          <!-- Connector Line (Desktop) -->
          <div class="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 relative z-10">
            @for (step of flowSteps; track step.title; let i = $index) {
              <div class="flex flex-col items-center text-center group">
                <div class="w-14 h-14 rounded-2xl bg-white border-2 border-gray-100 shadow-sm flex items-center justify-center text-gray-400 mb-4 group-hover:border-violet-600 group-hover:text-violet-600 group-hover:shadow-lg transition-all duration-300 relative bg-white">
                  <mat-icon class="scale-110 text-xl">{{ step.icon }}</mat-icon>
                  <div class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-900 text-white text-[10px] font-bold flex items-center justify-center group-hover:bg-violet-600 transition-colors">
                    {{ i + 1 }}
                  </div>
                </div>
                <h3 class="text-[11px] font-bold text-gray-900 mb-1">{{ step.title }}</h3>
                <p class="text-[10px] text-gray-500 leading-tight px-1">
                  {{ step.description }}
                </p>
                
                <!-- Arrow for mobile/tablet -->
                @if (i < flowSteps.length - 1) {
                  <div class="lg:hidden my-2 text-gray-300">
                    <mat-icon class="text-sm">south</mat-icon>
                  </div>
                }
              </div>
            }
          </div>
        </div>

        <div class="mt-10 flex flex-col md:flex-row items-center justify-between p-6 bg-violet-50 rounded-3xl border border-violet-100 gap-6">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center shadow-lg">
              <mat-icon class="text-sm">auto_awesome</mat-icon>
            </div>
            <div>
              <h4 class="text-[10px] font-bold text-violet-600 uppercase tracking-widest">Design Goal</h4>
              <p class="text-lg font-bold text-gray-900">Simple and Natural</p>
            </div>
          </div>
          <p class="text-sm text-gray-600 max-w-md text-center md:text-right font-light italic">
            "Meetings emerge naturally from existing networking interactions, mirroring how people connect in the real world."
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100%; }
    mat-icon { font-size: 24px; width: 24px; height: 24px; }
    .scale-110 { transform: scale(1.1); }
  `]
})
export class SlideMeetingFlowComponent {
  readonly flowSteps = [
    { title: 'Participant List', icon: 'groups', description: 'Discover people at the event' },
    { title: 'View Profile', icon: 'person_search', description: 'Discover potential partners' },
    { title: 'Start Chat', icon: 'chat_bubble_outline', description: 'Break the ice instantly' },
    { title: 'Propose Meeting', icon: 'add_task', description: 'Suggest a formal sync' },
    { title: 'Choose Type', icon: 'layers', description: 'In-person or virtual' },
    { title: 'Select Time', icon: 'schedule', description: 'Pick a mutual slot' },
    { title: 'Add to Calendar', icon: 'event_note', description: 'Sync to personal tools' }
  ];
}
