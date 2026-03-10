import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-slide-philosophy',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-12 lg:py-4 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl"></div>
      
      <div class="relative z-10">
        <div class="mb-8">
          <h2 class="text-[10px] font-bold text-blue-600 uppercase tracking-[0.3em] mb-2">The Philosophy</h2>
          <h1 class="text-3xl md:text-4xl font-bold text-[#1F2937] leading-tight">
            Attendee-Driven Meeting Coordination
          </h1>
          <div class="w-16 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div class="space-y-6">
            <div class="p-6 bg-blue-600 rounded-3xl shadow-xl text-white relative overflow-hidden">
              <div class="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <h3 class="text-lg font-light leading-relaxed italic mb-4">
                "Instead of organizers controlling meetings, Expo Pass enables attendees to coordinate meetings <span class="font-bold">directly</span> with each other."
              </h3>
              <div class="flex items-center gap-2 text-blue-100 text-xs font-medium">
                <mat-icon class="text-xs">verified</mat-icon>
                <span>The Expo Pass Way</span>
              </div>
            </div>

            <div class="space-y-3">
              <p class="text-base text-gray-600 leading-relaxed">
                Expo Pass simply provides the tools that make coordination easy, while leaving the <span class="text-blue-600 font-semibold">agency</span> where it belongs: with the participants.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            @for (decision of decisions; track decision.label) {
              <div class="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group">
                <div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <mat-icon class="text-sm">{{ decision.icon }}</mat-icon>
                </div>
                <h4 class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{{ decision.label }}</h4>
                <p class="text-base font-bold text-gray-900">{{ decision.text }}</p>
              </div>
            }
          </div>
        </div>

        <div class="mt-10 p-5 bg-gray-50 rounded-2xl border border-gray-200 flex flex-col md:flex-row items-center gap-4">
          <div class="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-600 shrink-0">
            <mat-icon class="text-sm">auto_fix_high</mat-icon>
          </div>
          <p class="text-gray-600 text-sm text-center md:text-left">
            By removing the organizer as a bottleneck, we enable <span class="font-semibold text-gray-900">spontaneous, high-value connections</span> that traditional platforms simply can't support.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100%; }
    mat-icon { font-size: 24px; width: 24px; height: 24px; }
  `]
})
export class SlidePhilosophyComponent {
  readonly decisions = [
    { label: 'Who', text: 'Target matches', icon: 'person_add' },
    { label: 'When', text: 'Mutual availability', icon: 'event_available' },
    { label: 'Where', text: 'Preferred location', icon: 'place' },
    { label: 'How', text: 'Meeting format', icon: 'forum' }
  ];
}
