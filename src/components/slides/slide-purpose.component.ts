import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-slide-purpose',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="min-h-full flex flex-col justify-center max-w-6xl mx-auto px-6 py-24 lg:py-0 relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-blue-50/30 rounded-full blur-3xl"></div>
      
      <div class="relative z-10">
        <div class="mb-12">
          <h2 class="text-xs font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">Context</h2>
          <h1 class="text-4xl md:text-5xl font-bold text-[#1F2937] leading-tight">
            Why People Attend Events
          </h1>
          <div class="w-20 h-1.5 bg-blue-600 mt-6 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div class="space-y-8">
            <p class="text-2xl text-[#4B5563] leading-relaxed font-light">
              At their core, events exist primarily to facilitate <span class="text-blue-600 font-semibold italic">human connection</span>. 
              Beyond the sessions and the swag, people are there for each other.
            </p>

            <div class="space-y-4">
              <h3 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Primary Goals</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                @for (goal of goals; track goal.text) {
                  <div class="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-blue-200 transition-colors">
                    <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                      <mat-icon class="text-sm">{{ goal.icon }}</mat-icon>
                    </div>
                    <span class="text-sm font-medium text-gray-700">{{ goal.text }}</span>
                  </div>
                }
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="p-8 md:p-12 bg-[#1F2937] rounded-3xl shadow-2xl relative overflow-hidden">
              <!-- Decorative Quote Mark -->
              <div class="absolute -top-4 -left-4 text-9xl text-white/5 font-serif">“</div>
              
              <div class="relative z-10">
                <h4 class="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">Key Insight</h4>
                <p class="text-2xl md:text-3xl text-white font-light leading-snug italic">
                  "The most valuable outcomes from events don't come from the stage—they come from <span class="text-blue-400 font-medium">conversations</span> between people."
                </p>
              </div>

              <!-- Abstract Network Graphic -->
              <div class="absolute bottom-0 right-0 opacity-10 p-4">
                <mat-icon class="text-9xl scale-[3]">hub</mat-icon>
              </div>
            </div>
            
            <!-- Floating Badge -->
            <div class="absolute -bottom-6 -right-6 bg-blue-600 text-white px-6 py-4 rounded-2xl shadow-xl hidden md:block">
              <p class="text-xs font-bold uppercase tracking-widest mb-1">Outcome Focus</p>
              <p class="text-lg font-semibold">Structured Networking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; height: 100%; }
    mat-icon { font-size: 20px; width: 20px; height: 20px; }
  `]
})
export class SlidePurposeComponent {
  readonly goals = [
    { text: 'Meet potential clients', icon: 'handshake' },
    { text: 'Discover partnerships', icon: 'group_work' },
    { text: 'Recruit talent', icon: 'person_search' },
    { text: 'Find investors', icon: 'payments' },
    { text: 'Expand networks', icon: 'connect_without_contact' },
    { text: 'Share knowledge', icon: 'psychology' }
  ];
}
